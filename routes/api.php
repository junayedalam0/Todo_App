<?php

use App\Http\Controllers\TodoController;
use App\Http\Controllers\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::get('/categories',        [CategoryController::class, 'index']);
Route::post('/categories',       [CategoryController::class, 'store']);
Route::delete('/categories/{id}', [CategoryController::class, 'destroy']); // soft delete
Route::put('/categories/{id}/restore', [CategoryController::class, 'restore']);
Route::delete('/categories/{id}/force', [CategoryController::class, 'forceDelete']);


Route::get('/todos', [TodoController::class,'index']);
Route::post('/todos', [TodoController::class,'store']);
Route::put('/todos/{id}',[TodoController::class,'update']);
Route::put('/todos/{id}/delete',[TodoController::class,'softDelete']);
Route::put('/todos/{id}/restore',[TodoController::class,'restore']);
Route::delete('/todos/{id}',[TodoController::class,'destroy']);

Route::put('/todos/{id}/completed',[TodoController::class,'clearCompleted']);