<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\Log;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class CustomLogsMiddlware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $userAgent = $request->header('User-Agent');
        $ip = $request->ip();
        $url = $request->url();
        $startTime = microtime(true);


        $endTime = microtime(true);

        $data = [
            "user" => auth()->guard('api')->user()->id,
            "action" => $request->method(),
            "user-agent" => $userAgent,
            "ip" => $ip,
            "url" => $url,
            "timestamp" => Carbon::now()->format('d-m-Y H:i:s'),
            "request_duration" => $endTime - $startTime,
            "request_parameters" => $request->all(),
        ];

        Log::insert([
            'data' => json_encode($data)
        ]);


        return $next($request);
    }
}
