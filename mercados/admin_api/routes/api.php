<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\PermisoController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
    Route::get('me', 'me');
});

Route::group([
    'middleware' => 'api'
], function ($router) {
    Route::resource('permiso', PermisoController::class)->only([
        "index", "show","store", "destroy"
    ]);
    Route::post('permiso/{id}', [PermisoController::class, 'update']);

    Route::resource('role', RoleController::class)->only([
        "index", "show","store", "destroy"
    ]);
    Route::post('role/{id}', [RoleController::class, 'update']);

    Route::put('role/{id}/update-status', [RoleController::class, 'updateStatus']);

    Route::resource('user', UserController::class)->only([
        "index", "show","store", "destroy"
    ])->names('admin.user');
    Route::post('user/{id}', [UserController::class, 'update'])->name('admin.user.edit');
});