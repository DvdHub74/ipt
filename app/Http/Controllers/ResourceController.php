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

        return Ministrie::select('id', 'name')->get();
    }
}
