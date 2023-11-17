<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\User;
use Illuminate\Http\Request;
use PhpParser\Node\Stmt\TryCatch;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{


    public function register(Request $req){

        try {
            $req->validate([
                'name' => 'required|string',
                'email' => 'required|unique:users|email',
                'password' => 'required|min:8'
            ]);

            $user = User::create([
                'name' => $req->name,
                'email' => $req->email,
                'password' => bcrypt($req->password),
            ]);

            return response()->json([$user], 200);

        } catch (Exception $e) {
                return response()->json(['error'=> $e->getMessage()], 400);
        }

    }
    public function login(Request $request){
        $credentials = $request->only(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'user' => auth()->guard('api')->user(),
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 1000
        ]);
    }
    public function profile()
    {
        return response()->json(auth()->user());
    }

    public function logout(){
        auth()->logout();

        return response()->json(['msg'=> 'Se deslogeo correctamente']);
    }
    public function autenticar(Request $request){

        $token = $request->token;

        try {

            $user = JWTAuth::toUser($token);

            return response()->json(['message' => 'Token válido', 'status' => 200],200);

        } catch (\Tymon\JWTAuth\Exceptions\JWTException $e) {

            return response()->json(['error' => 'Token no válido'], 401);
        }

    }

}
