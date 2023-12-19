<?php

namespace App\Http\Controllers;

use App\Models\Log;
use App\Models\Ministrie;
use App\Models\User;
use Illuminate\Http\Request;

class ResourceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function logs(Request $request)
    {
        $log = Log::orderBy('id', 'desc')->paginate($request->input('per_page', 10));

        $log->transform(function ($log){

            $log->data = json_decode($log->data);

            $log->data->user = User::find($log->data->user);

            return $log;

        });

        return $log;
    }


    public function ministrie(Request $request){

        $ministrie = Ministrie::select('id', 'name')->get();

        if(auth()->guard('api')->user() != null){
            $user  = auth()->guard('api')->user()->load('ministrie');
            if($user->global != true){
                $ministrie = Ministrie::where('id', $user->ministrie[0]['id'])->get();
            }
        }
        return $ministrie;
    }

    public function users(Request $request){
        return User::orderBy('id', 'desc')->paginate($request->input('per_page', 5));
    }
}
