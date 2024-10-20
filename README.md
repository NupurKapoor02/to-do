# Todo Application

A simple and efficient Todo application built using **React** for the frontend, **Node.js** with **Express** for the backend, and **MongoDB Atlas** for the database. This app allows users to create, read, update, and delete tasks, along with setting due dates and times for each task.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the Application Locally](#running-the-application-locally)
- [API Endpoints](#api-endpoints)

## Features

- Create new tasks with a title, due date, and time.
- View all tasks in a list.
- Edit existing tasks, including title, date, and time.
- Mark tasks as completed (strikethrough).
- Delete tasks.
- Responsive design for better usability.

## Technologies Used

- **Frontend:** 
  - [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
  - [Axios](https://axios-http.com/docs/intro) - A promise-based HTTP client for making requests to the backend API.

- **Backend:**
  - [Node.js](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 engine.
  - [Express](https://expressjs.com/) - A minimal and flexible Node.js web application framework for building APIs.

- **Database:**
  - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - A cloud database service for MongoDB, providing scalability and flexibility.

## Installation

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A MongoDB Atlas account (for database)

### Clone the Repository

1. Open your terminal or command prompt.
2. Run the following command to clone the repository:

   ```bash
   git clone https://github.com/yourusername/todo-app.git
3. Navigate into the project directory
4. Set Up Backend
   1. Install the required packages

     ```bash
     npm install
      ```
   2. Open backend/server.js and update the MongoDB connection string with your MongoDB Atlas credentials.
   3. Start the backend server:
      ```bash
      npm start
      ```
   The backend will run on http://localhost:5000.
   
5. Set up Frontend
   1. Install the required packages
      ```bash
      npm install
      ```
   2. Start the application
      ```npm start```
   The backend will run on http://localhost:3000.

## API endpoints
| Method | Endpoint          | Description                                    |
|--------|-------------------|------------------------------------------------|
| GET    | /todos            | Get all todos                                  |
| POST   | /todos            | Create a new todo                              |
| PUT    | /todos/:id        | Update an existing todo                        |
| PATCH  | /todos/:id/toggle | Toggle completion status of a todo             |
| DELETE | /todos/:id        | Delete a todo                                  |

## Conclusion
This project demonstrates the implementation of a full-stack Todo application using modern web development technologies like React for the frontend, Node.js and Express for the backend, and MongoDB Atlas for the database. It provides a comprehensive way to manage tasks with features like task creation, editing, completion toggling, and deletion, while also allowing users to specify due dates and times for tasks.

By following the setup instructions and exploring the API endpoints, you can run and customize this project for your own use. This project showcases the power of building RESTful APIs with Express and managing state and user interactions with React, providing a solid foundation for further expansion and improvement.
