Here’s a professional and clean `README.md` file tailored for your **Category Management Module** (React + Spring Boot + MySQL):

---

```markdown
# 📦 Category Management Module

This project is a Category Management Module developed using **React.js** for the frontend and **Spring Boot** for the backend. It allows admins to manage product categories efficiently with full CRUD operations.

## 🎥 Project Demo

You can watch the demo video by clicking the link below:

[Watch the Demo Video](https://github.com/omdhembre2442/CategoryMangement/blob/03f8ef1ef2335db3f7356b63caf6f2cea27dcc32/frontend/public/assets/AddProduct.mp4)

---

## 🚀 Features

- 🔍 View all categories (with active/inactive status)
- ➕ Add new category
- ✏️ Edit category details
- 🚫 Deactivate a category
- 🕒 Track created and modified date/time
- 📁 REST API integration
- 🧭 React Router-based navigation

---

## 🛠️ Tech Stack

| Layer        | Technology     |
| ------------ | -------------- |
| Frontend     | React.js, Bootstrap |
| Backend      | Spring Boot (Java) |
| Database     | MySQL |
| API Testing  | Postman |

---

## 📷 Screenshots

| Dashboard | Add Category | Edit Category |
|----------|--------------|---------------|
| ![Dashboard](https://raw.githubusercontent.com/omdhembre2442/CategoryMangement/main/frontend/public/assets/Dashboard.png) | ![Add](screenshots/add.png) | ![Edit](screenshots/edit.png) |

---

## 📂 Project Structure

```bash
├── backend
│   └── src/main/java/com/example/category
│       ├── controller
│       ├── model
│       ├── repository
│       └── service
├── frontend
│   └── src
│       ├── components
│       │   ├── CategoryDashboard.js
│       │   ├── AddCategoryForm.js
│       │   └── EditCategoryForm.js
│       └── App.js
```


## 📦 Installation

### 🔧 Backend

```bash
cd backend
# Import to IDE like IntelliJ or Eclipse
# Setup MySQL DB & update application.properties
./mvnw spring-boot:run
```

### 🌐 Frontend

```bash
cd frontend
npm install
npm start
```

---

## 🔗 API Endpoints

| Method | Endpoint                   | Description              |
|--------|----------------------------|--------------------------|
| GET    | /category/getCategory      | Fetch all categories     |
| GET    | /category/getCat/{id}      | Fetch category by ID     |
| POST   | /category/add              | Add new category         |
| PUT    | /category/{id}/update      | Update category          |
| PUT    | /category/deactivate/{id}  | Deactivate category      |
| DELETE | /category/delete/{id}      | Delete category          |

---

## 📄 End User Instructions

- Navigate to the home page to view all categories
- Use "Add Category" button to create a new one
- Click "Edit" to modify an existing category
- Click "Deactivate" to disable a category
- Created/Modified date and time are shown at the bottom of each card
