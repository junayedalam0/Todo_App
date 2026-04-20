<!DOCTYPE html>
<html>
<head>
    <title>URL Shortener</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body class="container mt-5">

    <h2 class="mb-4">Shorten Your URL</h2>

    <form action="{{ route('shorten.store') }}" method="POST">
        @csrf
        <div class="mb-3">
            <label for="original_url" class="form-label">Enter URL:</label>
            <input type="url" name="original_url" id="original_url" class="form-control" placeholder="https://example.com" required>
        </div>
        <button type="submit" class="btn btn-primary">Shorten</button>
    </form>

    @if(session('short_url'))
        <div class="alert alert-success mt-4">
            <strong>Your short link:</strong>
            <a href="{{ session('short_url') }}" target="_blank">{{ session('short_url') }}</a>
        </div>
    @endif

</body>
</html>
