<?php

namespace App\Http\Controllers;

use Exception;
use LDAP\Result;
use App\Models\People;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
            $res = $res->paginate($request->input('per_page', 5));

            $res->transform(function ($res) {

                $res->ministrie_id = $res->ministrie[0]['id'];
                return $res;
            });

            return response()->json([$res], 200);
        } catch (Exception $e) {
            return response()->json(["error" => $e->getMessage()], 400);
        }
    }


    public function create(Request $request)
    {
        try {

            $person = People::create([
                "names" => $request->names,
                "lastnames" => $request->lastnames,
                "birthday" => $request->birthday,
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
            $data = $request->except('id','ministrie');
            $person = People::where('id', $request->id)->update($data);


            return $person;
        } catch (\Throwable $th) {
            return response()->json([$th->getMessage()], 500);
        }
    }
    public function delete(Request $request)
    {
        try {
            $person = People::find($request->input('id'));
            $person->delete();

            return response()->json("success", 200);
        } catch (\Throwable $th) {
            return response()->json([$th->getMessage()], 500);
        }
    }
}
