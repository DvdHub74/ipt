<?php

namespace App\Http\Controllers;

use App\Models\People;
use Exception;
use Illuminate\Http\Request;
use LDAP\Result;

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
            // $res = People::all();
            $res = People::orderBy('id', 'desc');
            if($request->name != null){
                $res->whereRaw('LOWER(names) LIKE ?', ['%' . strtolower($request->name) . '%']);
            }
            $res = $res->paginate($request->input('per_page', 5));

            return response()->json([$res],200);
        } catch (Exception $e) {
            return response()->json(["error" => $e->getMessage()],400);            //throw $th;
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        try {
            $person = People::create($request->all());

            return $person;
        } catch (\Throwable $th) {
            return response()->json([$th->getMessage()], 500);
        }
    }

    public function edit(Request $request)
    {
        try {
            $data = $request->except('id');
            $person = People::where('id',$request->id)->update($data);


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
