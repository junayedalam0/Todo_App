# 📝 Todo App

A full‑stack **Todo Application** built with **React (Vite)** for the frontend and **Laravel** for the backend.  
It supports categories, todos, soft delete/restore, and polished UI for task management.

---

## 🚀 Features
- ✅ Add, edit, and delete todos
- 🏷 Manage categories (create, soft delete, restore, permanent delete)
- 🔄 Soft delete & restore functionality for both todos and categories
- 🎨 Modern React UI with Context API for state management
- ⚡ Backend powered by Laravel REST API
- 🗄 MySQL database integration

---

## 📂 Project Structure

Todo_App/
├── backend/ (Laravel)
│   ├── app/Http/Controllers/
│   ├── routes/api.php
│   └── database/migrations/
├── frontend/ (React + Vite)
│   ├── src/context/TodoContext.jsx
│   ├── src/components/
│   └── src/App.jsx
---

## 🛠 Tech Stack
- **Frontend:** React, Vite, Context API, Axios
- **Backend:** Laravel, PHP
- **Database:** MySQL
- **Styling:** CSS (modern, clean UI)

---

## ⚙️ Installation

### Backend (Laravel)
```bash
cd backend
composer install
php artisan migrate
php artisan serve

```
### Frontend (React + Vite)
```bash
cd frontend
npm install
npm run dev

```

🔗 API Routes
Categories
GET /api/categories → List categories

POST /api/categories → Add category

DELETE /api/categories/{id} → Soft delete category

PUT /api/categories/{id}/restore → Restore category

DELETE /api/categories/{id}/force → Permanent delete

Todos
GET /api/todos → List todos

POST /api/todos → Add todo

PUT /api/todos/{id} → Update todo

PUT /api/todos/{id}/delete → Soft delete todo

PUT /api/todos/{id}/restore → Restore todo

📸 Preview
Categories management with add/restore/delete

Todo list with filters (All, Active, Completed, Deleted)

🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.

📜 License
This project is licensed under the MIT License.

