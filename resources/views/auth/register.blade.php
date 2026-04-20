<!DOCTYPE html>
<html>
<head>
    <title>Register</title>
</head>
<body>
    <h2>Register</h2>

    <form action="{{ route('register') }}" method="POST">
        @csrf
        
        <div>
            <label>Name:</label>
            <input type="text" name="name" value="{{ old('name') }}">
            @error('name') <span style="color:red">{{ $message }}</span> @enderror
        </div>

        <div>
            <label>Email:</label>
            <input type="email" name="email" value="{{ old('email') }}">
            @error('email') <span style="color:red">{{ $message }}</span> @enderror
        </div>

        <div>
            <label>Password:</label>
            <input type="password" name="password">
            @error('password') <span style="color:red">{{ $message }}</span> @enderror
        </div>

        <div>
            <label>Confirm Password:</label>
            <input type="password" name="password_confirmation">
        </div>

        <button type="submit">Register</button>
    </form>
    
    <a href="{{ route('login') }}">Already have an account? Login</a>
</body>
</html>