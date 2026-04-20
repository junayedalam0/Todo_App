<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
</head>
<body>
    <h2>Login</h2>

    @if ($errors->any())
        <div style="color:red">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <form action="{{ route('login') }}" method="POST">
        @csrf

        <div>
            <label>Email:</label>
            <input type="email" name="email" value="{{ old('email') }}">
        </div>

        <div>
            <label>Password:</label>
            <input type="password" name="password">
        </div>

        <button type="submit">Login</button>
    </form>

    <a href="{{ route('register') }}">Create an account</a>
</body>
</html>
