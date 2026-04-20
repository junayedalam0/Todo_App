@if(session('success'))
    <div style="background: #d4edda; color: #155724; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
        {{ session('success') }}
    </div>
@endif

<form action="{{route('ticket.store') }}" method="POST">
    @csrf

    <label>Type:</label>
    <select name="type">
        <option value="General">General Inquiry</option>
        <option value="Feature">Feature Request</option>
        <option value="Bug">Report a Bug</option>
    </select>
    
    <label>Browser Version:</label>
    <input type="text" name="browser_section" placeholder="Only for bugs...">
    
    @error('browser_section')
        <div style="color:red">{{ $message }}</div>
    @enderror

    <label>Message:</label>
    <textarea name="message"></textarea>

    <button type="submit">Submit</button>
</form>
