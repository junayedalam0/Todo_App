import ReactDOM from 'react-dom/client';
import { TodoProvider } from './context/TodoContext';
import CategoryUI from './components/TodoApp/CategoryUI';
import TodoUI from './components/TodoApp/TodoUI';
import FilterUI from './components/TodoApp/FilterUI';
import './components/TodoApp/todo.css';

function App() {
  return (
    <TodoProvider>
      <div className="app-container">
        <h1>📝 Todo App</h1>

        {/* Category Manager */}
        <CategoryUI />

        {/* Filter Buttons */}
        <FilterUI />

        {/* Todo List + Add Todo */}
        <TodoUI />
      </div>
    </TodoProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
