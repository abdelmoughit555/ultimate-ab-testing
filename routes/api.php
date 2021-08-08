<?php

use App\Http\Controllers\Shop\Expirement\ExpirementSession\ExpirementSessionController;
use App\Http\Controllers\Shop\Expirement\ExpirementTypeController;
use App\Http\Controllers\Shop\ProductController;
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


Route::middleware('verify.shopify')->group(function () {
    //products
    Route::get('/products', [ProductController::class, 'index']);
    //expirements type
    Route::get('/expirements-type', ExpirementTypeController::class);
    //expirement-session
    Route::post('/expirement-sessions', [ExpirementSessionController::class, 'store']);
});
