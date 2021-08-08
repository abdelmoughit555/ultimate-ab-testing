<?php

use App\Http\Controllers\ScriptTagController;
use Illuminate\Support\Facades\Route;

Route::get('/login', function () {
    if (auth()->user()) {
        return redirect()->route('home');
    }
    return view('login');
})->name('login');

Route::get('/', function () {
    return view('welcome');
})->middleware(['verify.shopify'])->name('home');

Route::get('/scripttag', [ScriptTagController::class, 'index']);
