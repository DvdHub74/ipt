<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PeopleController;
use App\Http\Controllers\proofController;
use App\Http\Controllers\ResourceController;
use App\Models\People;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/






Route::post('/register',[AuthController::class, 'register']);
Route::post('/login',[AuthController::class, 'login']);

Route::middleware(['jwt.auth', 'custom-loger'])->group(   function(){
    Route::get('/json', [proofController::class , 'json']);
    Route::get('/profile', [AuthController::class , 'profile']);
    Route::get('/logout', [AuthController::class , 'logout']);
    Route::post('/autenticar', [AuthController::class , 'autenticar']);

    Route::prefix('data')->group(function () {
        Route::get('/people', [PeopleController::class, 'index']);
        Route::post('/people', [PeopleController::class, 'create']);
        Route::put('/people', [PeopleController::class, 'edit']);
        Route::delete('/people', [PeopleController::class, 'delete']);
    });
    Route::prefix('resource')->group(function () {
        Route::get('/logs', [ResourceController::class, 'logs']);
        Route::get('/ministrie', [ResourceController::class, 'ministrie']);
    });

});

Route::prefix('public')->group(function () {
    Route::get('/ministrie', [ResourceController::class, 'ministrie']);
});
