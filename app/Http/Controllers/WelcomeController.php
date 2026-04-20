<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WelcomeController extends Controller
{
    public function greet()
    {
        $name = 'Junayed';
        return view('greeting',compact('name'));
    }
}
