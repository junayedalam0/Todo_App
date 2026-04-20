import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const TODOS_URL = "/api/todos";
const CATEGORIES_URL = "/api/categories";

const TodoContext = createContext();

export function TodoProvider({ children }) {
    const [todos, setTodos] = useState([]);
    const [categories, setCategories] = useState([]);
    const [categoryId, setCategoryId] = useState("");

    const [input, setInput] = useState("");
    const [catInput, setCatInput] = useState("");

    const [editText, setEditText] = useState("");
    const [editId, setEditId] = useState(null);
    const [editCategoryId, setEditCategoryId] = useState("");

    const [showCategory, setShowCategory] = useState(false);
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        axios.get(TODOS_URL).then((res) => setTodos(res.data));
        axios.get(CATEGORIES_URL).then((res) => setCategories(res.data));
    }, []);

   


    // Category functions
    const addCategory = () => {
        if (!catInput.trim()) return;

        axios
        .post(CATEGORIES_URL, { name: catInput })
        .then((res) => {
            console.log(res.data);
            setCategories([...categories,res.data]);
            setCatInput("");
        });
    };

    
    const visibleCategories = categories.filter((cat) => {
        if (filter === "delete") return cat.deleted_at !== null;
        return cat.deleted_at === null;
    });

    const softDeleteCategory = (id) =>
        axios
            .delete(`${CATEGORIES_URL}/${id}`)
            .then(() =>
                setCategories(
                    categories.map((c) =>
                        c.id === id ? { ...c, deleted_at: true } : c,
                    ),
                ),
            );

    const restoreCategory = (id) =>
        axios
            .put(`${CATEGORIES_URL}/${id}/restore`)
            .then((res) =>
                setCategories(
                    categories.map((c) => (c.id === id ? res.data : c)),
                ),
            );

    const forceDeleteCategory = (id) =>
        axios
            .delete(`${CATEGORIES_URL}/${id}/force`)
            .then(() => setCategories(categories.filter((c) => c.id !== id)));


    // Todo functions
    const addTodo = () => {
        if (!input.trim()) return;
        axios
            .post(TODOS_URL, { title: input, category_id: categoryId || null })
            .then((res) => {
                setTodos([...todos, res.data]);
                setInput("");
                setCategoryId("");
            });
    };

    const toggleTodo = (todo) =>
        axios
            .put(`${TODOS_URL}/${todo.id}`, {
                ...todo,
                completed: !todo.completed,
            })
            .then((res) =>
                setTodos(todos.map((t) => (t.id === todo.id ? res.data : t))),
            );

    const startEdit = (todo) => {
        setEditId(todo.id);
        setEditText(todo.title);
        setEditCategoryId(todo.category_id || "");
    };

    const saveEdit = (todo) =>
        axios
            .put(`${TODOS_URL}/${todo.id}`, {
                title: editText,
                completed: todo.completed,
                category_id: editCategoryId || null,
            })
            .then((res) => {
                setTodos(todos.map((t) => (t.id === todo.id ? res.data : t)));
                setEditId(null);
            });

    // Soft delete & restore
    const softDelete = (todo) =>
        axios
            .put(`${TODOS_URL}/${todo.id}/delete`)
            .then((res) =>
                setTodos(todos.map((t) => (t.id === todo.id ? res.data : t))),
            );

    const restoreTodo = (todo) =>
        axios
            .put(`${TODOS_URL}/${todo.id}/restore`)
            .then((res) =>
                setTodos(todos.map((t) => (t.id === todo.id ? res.data : t))),
            );

    const deleteTodo = (id) =>
        axios
            .delete(`${TODOS_URL}/${id}`)
            .then(() => setTodos(todos.filter((t) => t.id !== id)));

    const visibleTodos = todos.filter((todo) => {
        if (filter === "active") return !todo.completed && !todo.is_deleted;
        if (filter === "completed") return todo.completed && !todo.is_deleted;
        if (filter === "delete") return todo.is_deleted;
        return !todo.is_deleted;
    });

    return (
        <TodoContext.Provider
            value={{
                todos,
                categories,
                input,
                setInput,
                categoryId,
                setCategoryId,
                editId,
                setEditId,
                editText,
                setEditText,
                editCategoryId,
                setEditCategoryId,
                catInput,
                setCatInput,
                filter,
                setFilter,
                addCategory,
                softDeleteCategory,
                restoreCategory,
                forceDeleteCategory,
                visibleCategories,
                addTodo,
                toggleTodo,
                startEdit,
                saveEdit,
                deleteTodo,
                softDelete,
                restoreTodo,
                visibleTodos,
                showCategory,
                setShowCategory,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
}

export const useTodo = () => useContext(TodoContext);
