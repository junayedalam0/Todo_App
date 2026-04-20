import { useTodo } from "../../context/TodoContext";

export default function FilterUI() {
    const { filter, setFilter } = useTodo();

    return (
        <div className="filter-group">
            <label>
                <input
                    type="radio"
                    name="filter"
                    checked={filter === "all"}
                    onChange={() => setFilter("all")}
                />{" "}
                All
            </label>
            <label>
                <input
                    type="radio"
                    name="filter"
                    checked={filter === "active"}
                    onChange={() => setFilter("active")}
                />{" "}
                Active
            </label>
            <label>
                <input
                    type="radio"
                    name="filter"
                    checked={filter === "completed"}
                    onChange={() => setFilter("completed")}
                />{" "}
                Completed
            </label>
            <label>
                <input
                    type="radio"
                    name="filter"
                    checked={filter === "delete"}
                    onChange={() => setFilter("delete")}
                />{" "}
                Deleted
            </label>
            
        </div>
    );
}
