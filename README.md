# TaskMasterAPI 🚀

Welcome to **TaskMasterAPI**! 🎯 This project, maintained by [ankitadhara28](https://github.com/ankitadhara28), is a lightweight task management API built with **Node.js** and **Express**. It provides powerful features for managing tasks, including adding, deleting, editing, filtering, and sorting tasks by priority.

---

## 🌟 **Table of Contents**  
- [Project Overview](#project-overview)  
- [Features](#features)  
- [Installation](#installation)  
- [Usage](#usage)  
  - [API Endpoints](#api-endpoints)  
- [Technologies Used](#technologies-used)  
- [Contributing](#contributing)  
- [License](#license)  

---

## 📜 **Project Overview**  

**TaskMasterAPI** is designed for efficient task management. It allows users to create, edit, delete, filter, and sort tasks by priority effortlessly using API endpoints. Perfect for developers looking for a simple task management backend!

---

## ✨ **Features**  
- Add tasks with customizable text and priority  
- View all tasks  
- Sort tasks by priority (low-to-high or high-to-low)  
- Edit task text or priority  
- Delete tasks  
- Filter tasks by priority  

---

## 🔧 **Installation**  

1. Clone the repository:  
   ```bash
   git clone https://github.com/ankitadhara28/TaskMasterAPI.git
2. Navigate to the project directory:
   cd TaskMasterAPI
3.Install dependencies:
   npm install
4.Start the server:
   npm start


## 🚀 **Usage**
  '''Base url :
     http://localhost:3000
API Endpoints :
Add Task: /task/add?taskId={id}&text={taskText}&priority={priority}
Get All Tasks: /tasks
Sort Tasks by Priority: /tasks/sort-by-priority
Edit Task Priority: /tasks/edit-priority?taskId={id}&priority={newPriority}
Edit Task Text: /tasks/edit-text?taskId={id}&text={newText}
Delete Task: /tasks/delete?taskId={id}
Filter Tasks by Priority: /tasks/filter-by-priority?priority={priority}
⚙️ Technologies Used
Node.js: JavaScript runtime
Express: Web framework for building APIs
CORS: Enables cross-origin requests
🤝 Contributing
Contributions are welcome! If you would like to contribute:

Fork the repository.
Create a new branch:
'''bash
   Copy
Edit
   git checkout -b feature/your-feature-name
Make your changes and commit them:
  bash
  Copy
Edit
  git commit -m "Add your message here"
Push to your branch:
  bash
  Copy
Edit
  git push origin feature/your-feature-name
Create a pull request.


📜 License
This project is licensed under the MIT License.

Thank you for checking out TaskMasterAPI! Feel free to reach out if you have any questions or feedback. 😊



