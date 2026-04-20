<h2>Trashed Contacts</h2>

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
                <form action="{{ route('contacts.restore', $contact->id) }}" method="POST">
                    @csrf
                    <button type="submit">Restore</button>
                </form>

                <form action="{{ route('contacts.forceDelete', $contact->id) }}" method="POST" style="margin-top:5px;">
                    @csrf
                    @method('DELETE')
                    <button type="submit">Delete Permanently</button>
                </form>
            </td>
        </tr>
    @endforeach
</table>

<a href="{{ route('contacts.index') }}">Back to Contacts</a>
