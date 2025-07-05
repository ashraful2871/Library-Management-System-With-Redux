# 📚 Minimal Library Management System

A lightweight and responsive Library Management System built with **React**, **Redux Toolkit Query**, and **TypeScript**. It allows users to manage books, perform CRUD operations, borrow books, and view borrowing summaries — all without authentication. Designed to demonstrate clean architecture, scalable state management, and seamless API integration.

---

## 🚀 Features

### 🔓 Public Access
- All routes are publicly accessible with no authentication layer.

### 📘 Book Management
- Display a table of books with key details: Title, Author, Genre, ISBN, Copies, Availability, and Actions.
- Perform full CRUD operations:
  - **Add Book**: Create a new book entry.
  - **Edit Book**: Update book details. If copies = 0, it is marked as unavailable.
  - **Delete Book**: Confirm and remove a book.
  - **Borrow Book**: Borrow a book via a dedicated form.

### 🔁 Borrowing Workflow
- Quantity and due date input.
- Validation to ensure quantity does not exceed available copies.
- Book marked unavailable if all copies are borrowed.
- Redirects to borrow summary on success.

### 📊 Borrow Summary
- Displays aggregated data of borrowed books.
- Fields include: Book Title, ISBN, and Total Quantity Borrowed.

### 🧩 Component Overview
- **Navbar**: Navigation links to all key routes.
- **Book Table**: List of all books with actions.
- **Footer**: Minimalist footer with project info or credits.

---

## 🗂️ Pages

| Route                | Description                          |
|----------------------|--------------------------------------|
| `/books`             | List all books                       |
| `/create-book`       | Add a new book                       |
| `/books/:id`         | View single book details             |
| `/edit-book/:id`     | Edit a specific book                 |
| `/borrow/:bookId`    | Borrow form for selected book        |
| `/borrow-summary`    | Aggregated borrow summary            |

---

## 🎨 UI & UX

- Minimal and clean design with Tailwind CSS
- Fully responsive across mobile, tablet, and desktop
- Clear call-to-actions and easy navigation
- Form validations and success/error feedback



## 🛠 Tech Stack

| Layer         | Technology                        |
|---------------|------------------------------------|
| Frontend      | React, TypeScript                 |
| State         | Redux Toolkit, RTK Query          |
| Backend       | Node.js, Express.js               |
| Database      | MongoDB with Mongoose             |
| Styling       | Tailwind CSS                      |

---

## 📦 Backend Overview

The backend follows an **MVC structure** with modular routing and controllers.

### Database Models

- **Book**
  - Fields: `title`, `author`, `genre`, `isbn`, `description`, `copies`, `available`
- **Borrow**
  - Fields: `bookId`, `quantity`, `dueDate`

### Features

- CRUD for books
- Borrow handling and validation
- Borrow summary aggregation (grouped by book)
- Global error handler
- Pagination for book listings

---

## 🔌 API Integration

- All API endpoints consumed via **Redux Toolkit Query**
- RTK Query handles caching, re-fetching, and loading states
- APIs are type-safe and adhere to RESTful practices

---

## 🧪 Installation

### Prerequisites

- Node.js v16+
- MongoDB (local or MongoDB Atlas)

### Clone the Repositories

```bash
git clone https://github.com/your-username/library-frontend.git
git clone https://github.com/your-username/library-backend.git
