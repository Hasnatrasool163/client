Assignment Management System

This is a full-stack application built with React for the frontend and Node.js for the backend. It allows users to post and view assignments. The project includes a basic client-server architecture with separate directories for the client and server.
Getting Started

To get started with this project, follow these steps:
Prerequisites

Ensure you have the following software installed:

    Node.js and npm (Node Package Manager)
    MariaDB or any other compatible MySQL database

Cloning the Repository

    Clone the repository to your local machine:

    bash

git clone https://github.com/Hasnatrasool/client.git

Navigate into the project directory:

bash

    cd client

Setting Up the Server

    Navigate to the server directory:

    bash

cd server

Install the server dependencies:

bash

npm install

Start the server:

bash

    node server.js

    The server will be running on port 5000 by default. Ensure that this port is not being used by another application.

Setting Up the Client

    Open another terminal window and navigate to the client directory:

    bash

cd client

Install the client dependencies:

bash

npm install

Start the client:

bash

    npm start

    The client application will be running on http://localhost:3000 by default.

Project Structure

    client/: Contains the React frontend application.
    server/: Contains the Node.js backend application.

Features

    Post Assignment: Users can post new assignments using a form.
    View Assignments: Users can view a list of assignments.

Database Setup

Make sure your database is set up correctly. You can check the structure of the assignments table using the following SQL command:

sql

DESCRIBE assignments;

Ensure that the table structure matches the expected schema:

    id (int, primary key, auto-increment)
    user_id (int, nullable)
    title (varchar, 255, nullable)
    description (text, nullable)
    file_link (varchar, 255, nullable)
    created_at (timestamp, default: current_timestamp())
    deadline (date, nullable)

Error Handling

If you encounter any issues, make sure to check the server and client logs for error messages. Common issues may include:

    Incorrect API endpoints
    Database connection issues
    Missing environment variables
