<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    //
    protected $fillable = ['title','completed','is_deleted','category_id'];

    public function category(){
        return $this->belongsTo(Category::class);
    }
}
