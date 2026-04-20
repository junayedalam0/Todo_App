<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    
    public function index()
    {
        // with('category') → includes category name in response
        $todos = Todo::with('category')->get();
        return response()->json($todos);
    }

    
    public function store(Request $request)
    {
        $todo = Todo::create([
            'title'       => $request->title,
            'completed'   => false,
            'is_deleted'=>false,
            'category_id' => $request->category_id, // ← new
        ]);


        $todo->load('category');

        return response()->json($todo, 201);
    }

    
    public function update(Request $request, $id)
    {
        $todo = Todo::findOrFail($id);
        $todo->update([
            'title'       => $request->title,
            'completed'   => $request->completed,
            'category_id' => $request->category_id,
        ]);

        $todo->load('category');

        return response()->json($todo);
    }
    public function softDelete($id){
        $todo=Todo::findOrFail($id);
        $todo->update((['is_deleted'=>true]));
        return response()->json($todo);
    }
    public function restore($id){
        $todo=Todo::findOrFail($id);
        $todo->update((['is_deleted'=>false]));
        return response()->json($todo);
    }
    public function destroy($id){
        $todo=Todo::findOrFail($id);
        $todo->delete();
        return response()->json($todo);
        
    }
}
