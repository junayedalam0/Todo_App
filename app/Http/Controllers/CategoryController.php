<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    // GET /api/categories — list all active categories
    public function index()
    {
        return response()->json(Category::whereNull('deleted_at')->get());
    }

    // GET /api/categories/trashed — list only deleted categories
    public function trashed()
    {
        return response()->json(Category::onlyTrashed()->get());
    }

    // POST /api/categories — create new category
    public function store(Request $request)
    {
        $category = Category::create([
            'name' => $request->name,
        ]);

        return response()->json($category->fresh());
    }

    // DELETE /api/categories/{id} — soft delete
    public function destroy($id)
    {
        $category = Category::findOrFail($id);
        $category->delete();

        return response()->json($category);
    }

    // PUT /api/categories/{id}/restore — restore soft deleted category
    public function restore($id)
    {
        $category = Category::withTrashed()->findOrFail($id);
        $category->restore();

        return response()->json($category);
    }

    // DELETE /api/categories/{id}/force — permanently delete category
    public function forceDelete($id)
    {
        $category = Category::withTrashed()->findOrFail($id);
        $category->forceDelete();

        return response()->json(['message' => 'Category permanently deleted']);
    }
}
