<h2>Contacts</h2>

@if(session('success'))
    <div class="alert alert-success">{{ session('success') }}</div>
@endif

<table border="1" cellpadding="8">
    <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Actions</th>
    </tr>
    @foreach($contacts as $contact)
        <tr>
            <td>{{ $contact->name }}</td>
            <td>{{ $contact->email }}</td>
            <td>
                <form action="{{ route('contacts.destroy', $contact->id) }}" method="POST">
                    @csrf
                    @method('DELETE')
                    <button type="submit">Delete</button>
                </form>
            </td>
        </tr>
    @endforeach
</table>

<a href="{{ route('contacts.trash') }}">View Trash</a>
