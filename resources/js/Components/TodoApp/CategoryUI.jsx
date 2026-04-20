import { useTodo } from "../../context/TodoContext";

export default function CategoryUI() {
    const {
        showCategory,
        setShowCategory,
        visibleCategories,
        catInput,
        setCatInput,
        addCategory,
        softDeleteCategory,
        restoreCategory,
        forceDeleteCategory,
        filter,
    } = useTodo();

    return (
        <>
            <button onClick={() => setShowCategory(!showCategory)}>
                {showCategory ? "Hide Categories" : "Show Categories"}
            </button>

            {showCategory && (
                <div className="category-box">
                    <h3>🏷 Categories</h3>
                    <div style={{ marginBottom: "12px" }}>
                        <input
                            value={catInput}
                            onChange={(e) => setCatInput(e.target.value)}
                            onKeyDown={(e) =>
                                e.key === "Enter" && addCategory()
                            }
                            placeholder="New category name..."
                        />
                        <button onClick={addCategory}>Add Category</button>
                    </div>

                    {visibleCategories.length === 0 ? (
                        <p>No categories found.</p>
                    ) : (
                        <ul>
                            {visibleCategories.map((cat) => (
                                <li key={cat.id}>
                                    🏷 {cat.name}
                                    {filter === "delete" ? (
                                        <>
                                            <button
                                                onClick={() =>
                                                    restoreCategory(cat.id)
                                                }
                                            >
                                                Restore
                                            </button>
                                            <button
                                                onClick={() =>
                                                    forceDeleteCategory(cat.id)
                                                }
                                            >
                                                🗑 Permanent Delete
                                            </button>
                                        </>
                                    ) : (
                                        <button
                                            onClick={() =>
                                                softDeleteCategory(cat.id)
                                            }
                                        >
                                            Delete
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </>
    );
}
