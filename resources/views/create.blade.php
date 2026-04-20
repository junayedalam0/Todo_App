@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Contact Us</h1>

    @if(session('success'))
        <div style="color: green;">
            {{ session('success') }}
        </div>
    @endif

    <form action="{{ route('contact.store') }}" method="POST">
        @csrf

        <div>
            <label>Email:</label>
            <input type="email" name="email" value="{{ old('email') }}">
            @error('email')
                <div style="color: red;">{{ $message }}</div>
            @enderror
        </div>

        <div>
            <label>Message:</label>
            <textarea name="message">{{ old('message') }}</textarea>
            @error('message')
                <div style="color: red;">{{ $message }}</div>
            @enderror
        </div>

        <button type="submit">Send</button>
    </form>
</div>
@endsection