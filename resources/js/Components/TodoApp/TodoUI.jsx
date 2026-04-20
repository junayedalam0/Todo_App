import { useTodo } from "../../context/TodoContext";

export default function TodoUI() {
    const {
        visibleTodos,
        categories,
        input,
        setInput,
        categoryId,
        setCategoryId,
        addTodo,
        toggleTodo,
        startEdit,
        saveEdit,
        deleteTodo,
        softDelete,
        restoreTodo,
        editId,
        setEditId,
        editText,
        setEditText,
        editCategoryId,
        setEditCategoryId,
        filter,
    } = useTodo();

    return (
        <div>
            <div style={{ marginBottom: "20px" }}>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addTodo()}
                    placeholder="Add a todo..."
                />
                <select
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                >
                    <option value="">No Category</option>
                    {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                            {cat.name}
                        </option>
                    ))}
                </select>
                <button onClick={addTodo}>Add</button>
            </div>
            <h2>📋 My Todos</h2>
            {visibleTodos.length === 0 ? (
                <p>No todos found.</p>
            ) : (
                <ul className="todo-list">
                    {visibleTodos.map((todo) => (
                        <li key={todo.id}>
                            {editId === todo.id ? (
                                <>
                                    <input
                                        value={editText}
                                        onChange={(e) =>
                                            setEditText(e.target.value)
                                        }
                                    />
                                    <select
                                        value={editCategoryId}
                                        onChange={(e) =>
                                            setEditCategoryId(e.target.value)
                                        }
                                    >
                                        <option value="">No Category</option>
                                        {categories.map((cat) => (
                                            <option key={cat.id} value={cat.id}>
                                                {cat.name}
                                            </option>
                                        ))}
                                    </select>
                                    <button onClick={() => saveEdit(todo)}>
                                        Save
                                    </button>
                                    <button onClick={() => setEditId(null)}>
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <>
                                    <input
                                        type="checkbox"
                                        checked={todo.completed}
                                        onChange={() => toggleTodo(todo)}
                                    />
                                    <span
                                        style={{
                                            textDecoration: todo.completed
                                                ? "line-through"
                                                : "none",
                                        }}
                                    >
                                        {todo.title}
                                    </span>
                                    {todo.category && (
                                        <span className="category-badge">
                                            🏷 {todo.category.name}
                                        </span>
                                    )}
                                    <button onClick={() => startEdit(todo)}>
                                        ✏️
                                    </button>
                                    {filter === "delete" ? (
                                        <>
                                            <button
                                                onClick={() =>
                                                    restoreTodo(todo)
                                                }
                                            >
                                                Restore
                                            </button>
                                            <button
                                                onClick={() =>
                                                    deleteTodo(todo.id)
                                                }
                                            >
                                                🗑 Permanent Delete
                                            </button>
                                        </>
                                    ) : (
                                        <button
                                            onClick={() => softDelete(todo)}
                                        >
                                            Delete
                                        </button>
                                    )}
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
