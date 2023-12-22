<?php

namespace App\Http\Controllers;

use Exception;
use LDAP\Result;
use Dompdf\Dompdf;
use Dompdf\Options;
use App\Models\People;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Validator;

class PeopleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            $res = People::with('ministrie')->orderBy('id', 'desc');
            if ($request->name != null) {
                $res->whereRaw('LOWER(names) LIKE ?', ['%' . strtolower($request->name) . '%']);
            }
            $user = auth()->guard('api')->user()->load('ministrie');

            if ($user->global != true) {
                $ministrie_id = $user->ministrie[0]['id'];
                $res->whereHas('ministrie', function ($query) use ($ministrie_id) {
                    $query->where('id_ministrie', $ministrie_id);
                });
            }
            $res = $res->paginate($request->input('per_page', 5));


            $res->transform(function ($res) {
                if(isset($res->ministrie[0])) $res->ministrie_id = $res->ministrie[0]['id'];
                return $res;
            });

            return response()->json($res);
        } catch (Exception $e) {
            return response()->json(["error" => $e->getMessage()], 400);
        }
    }


    public function create(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'names' => 'required',
                'lastnames' => 'required',
                'age' => 'required',
                'ministrie' => 'required',
                'birthday' => 'required',
                'state' => 'required',
            ]);
            if ($validator->fails()) {
                $errors = $validator->errors()->all();
                return response()->json(['errors' => $errors], 422);
            }

            $person = People::create([
                "names" => $request->names,
                "lastnames" => $request->lastnames,
                "birthday" => Carbon::parse($request->birthday)->format('d-m-Y'),
                "age" => $request->age,
                "state" => $request->state,
                "active" => 1,
            ]);



            $person->ministrie()->sync($request->ministrie);


            return $person;
        } catch (\Throwable $th) {
            return response()->json([$th->getMessage()], 500);
        }
    }


    public function edit(Request $request)
    {
        try {
            $data = $request->except('id', 'ministrie');
            People::where('id', $request->id)->update($data);


            // DB::table('people_ministrie')->where('id_people', $request->id)->update([
            //     'id_ministrie' => $request->ministrie,
            //     'updated_at' => Carbon::now()
            // ]);

            return response()->json("success", 200);
        } catch (\Throwable $th) {
            return response()->json([$th->getMessage()], 500);
        }
    }
    public function delete(Request $request)
    {
        try {
            $person = People::find($request->input('id'));
            $person->ministrie()->detach();
            $person->delete();


            return response()->json("success", 200);
        } catch (\Throwable $th) {
            return response()->json([$th->getMessage()], 500);
        }
    }

    public function changeState(Request $request){
        try {
            $userId = $request->input('id');

            $person = People::find($userId);

            $person->active = !$person->active;

            $person->save();
            return response()->json(['msg'=> 'Se cambio el estado correctamente'], 200);

        } catch (\Throwable $th) {
            return  response()->json([$th->getMessage()],500);
        }
    }
    public function viewPerson(Request $request){
        try {
            $userId = $request->input('id');

            $person = People::with('ministrie')->where('id',$userId)->first();

            $person->ministerio = '';

            if(isset($person->ministrie[0]['name'])){
                $person->ministerio = $person->ministrie[0]['name'];
                unset($person->ministrie);
            }

            return response()->json($person);

        } catch (\Throwable $th) {
            return  response()->json([$th->getMessage()],500);
        }
    }

    public function generateReport(){
        try {
            $pdfOptions = new Options();
            $pdfOptions->set('isHtml5ParserEnabled', true);

            $data = People::with('ministrie')->get();
            $view = View::make('report')->with('data', $data)->render();

            $dompdf =new Dompdf($pdfOptions);

            $dompdf->loadHtml($view);

            $dompdf->render();

            return response($dompdf->output(), 200, [
                'Content-Type' => 'application/pdf',
                'Content-Disposition' => 'inline; filename="ejemplo.pdf"',
            ]);

        } catch (\Throwable $th) {
            return response()->json(['msg'=> $th->getMessage()],500);
        }
    }



}
