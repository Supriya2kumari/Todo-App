# 🛠️ CRUD API with Node.js, Express, and MongoDB

This is a simple RESTful API that demonstrates CRUD operations for two entities: **Products** and **Todos**. The project follows a clean structure using **Model**, **Controller**, **Routes**, and a central **Server** file.

---

## 🚀 Features

- ✅ Create a new Product / Todo
- 📄 Read all Product / Todo
- ✏️ Update an existing Product / Todo
- ❌ Delete a Product / Todo
- 🔁 RESTful endpoints
- 🧱 MVC-based folder structure

---

---

## 🧰 Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB (via Mongoose)
- **Environment Variables**: dotenv

---

## 🧪 API Endpoints

### ✅ Todos

| Method | Endpoint        | Description       |
|--------|-----------------|-------------------|
| GET    | `/api/todos`    | Get all todos     |    |
| POST   | `/api/todos`    | Create a new todo |
| PATCH    | `/api/todos/:id`| Update a todo by ID    |
| DELETE | `/api/todos/:id`| Delete a todo     |

---

## ⚙️ Setup Instructions

1. **Clone the repo**
```bash
git clone https://github.com/Supriya2kumari/Todo-App
cd Todo-App