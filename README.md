# Course Selling App

This is a backend application for a course selling platform built with Node.js, Express.js, MongoDB, and Mongoose. It provides APIs for managing courses, user authentication using JWT, input validation using Zod, and multiple databases for admins, users, and courses.

## Features

- **User Authentication:** JWT-based authentication system for secure user login and access control.
- **Admin Operations:** Allows admins to perform CRUD operations on courses from any API development tool.
- **User Purchases:** Users can purchase courses and view their purchased courses.
- **Input Validation:** Zod library is used for input validation to ensure data integrity.
- **Multiple Databases:** Separate databases for admins, users, and courses for better data management.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Zod

## Installation

1. Clone the repository

2. Install dependencies

 ```  npm install```

3. Run the backend locally

 ``` nodemon index.js```


## Routes

### Admin Routes:

- POST /admin/signup: Creates a new admin account.
- POST /admin/signin: Logs in an admin account.
- POST /admin/courses: Creates a new course.
- GET /admin/courses: Returns all courses.

### User Routes

- POST /users/signup: Creates a new user account.
- POST /users/signin: Logs in a user account.
- GET /users/courses: Lists all courses.
- POST /users/courses/:courseId: Purchases a course.
- GET /users/purchasedCourses: Lists purchased courses.
