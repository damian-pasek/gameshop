# Gameshop

## Overview

A full-stack web application for an online video game store. 
It provides shopping cart functionalities, order processing, and administrative capabilities for 
managing inventory, tailored based on user roles (Customer vs. Administrator). 

## Table of contents

1. [Features](#features)
2. [Technology Stack](#technology-stack)
3. [Database Design and Structure](#database-design-and-structure)
4. [API Overview](#api-overview)
5. [Installation](#installation)
6. [Default Credentials](#default-credentials)


## Features

### Customer Role
* **Browsing & Search:** Interactive game catalog with real-time text search and tag-based filtering.
* **Product Details:** Detailed product view displaying pricing, description, stock availability and tags.
* **Shopping Cart:** Add, remove, update quantities, or clear cart items dynamically.
* **Checkout System:** Seamless checkout process to place orders.
* **Order History:** Personal order dashboard with itemized purchase history.

### Administrator Role
* **Inventory Management:** Full CRUD operations (Create, Read, Update, Delete) for games.
* **Global Order Management:** Overview and tracking of all customer orders across the platform.

## Technology Stack
- **Frontend:** React, TypeScript, Vite, Axios
- **Backend:** Java, Maven, Spring Boot
- **Database:** PostgreSQL
- **Deployment:** Docker

## Database Design and Structure
The relational database is designed to efficiently store and manage user data, inventory, and purchase records.

2. **Relationships:**
- Users → Orders: One-to-Many (A user can place multiple orders)
- Orders → Order Items: One-to-Many (An order can contain multiple item lines)
- Games → Order Items: One-to-Many (A game can appear in multiple order items)

## API Overview

The frontend communicates with the Spring Boot backend at `http://localhost:8080`.

### Authentication

| Method | Path             | Description |
|--------|------------------|-------------|
| POST   | `/auth/login`    | Authenticate a user|
| POST   | `/auth/register` | Register a customer|

### Games

| Method | Path          | Description |
|--------|---------------|-------------|
| GET    | `/games`      | Fetch all games |
| GET    | `/games/{id}` | Fetch a game by ID |
| POST   | `/games`      | Add a new game |
| PUT    | `/games/{id}` | Replace an existing game's details |
| PATCH  | `/games/{id}` | Partially update an existing game |
| DELETE | `/games/{id}` | Delete a game |

### Orders

| Method | Path      | Description |
|--------|-----------|-------------|
| GET    | `/orders`  | Fetch all orders with their order items |
| POST   | `/orders`  | Create an order from the submitted user ID and item list |




## Installation

### 1. Clone the repository
```bash
git clone https://github.com/damian-pasek/gameshop.git
cd gameshop
```

### 2. Docker setup
Make sure you have docker and docker compose installed on your system:

```bash
docker --version
docker compose version
```
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Starting the Database
While in the database directory, use Docker Compose to start the PostgreSQL database container:

```bash
cd database

docker compose up -d
```
To check if database is running you can use the following command:

```bash
docker ps
#container "gameshop-db" should be on the list
```

### 3. Backend Setup
Check if Java 25 is installed on your system:
```bash
java -version
```
- [Oracle JDK 25](https://www.oracle.com/pl/java/technologies/downloads/#java25)

Apache Maven 3+ is required to build the application. Verify maven installation by running:
```bash
mvn -v
```
- [Apache Maven](https://maven.apache.org/install.html)

Next step is to install dependencies and start the backend server:

```bash
#navigate to backend directory from the root directory
cd backend

#install dependencies
mvn clean install

#start the backend server
mvn spring-boot:run
```
The backend server will be active at http://localhost:8080

### 4. Frontend Setup

Verify Node Package Manager installation:
```bash
npm -v
```
If npm is not installed, download Node.js from here ([Node.js](https://nodejs.org/en/download)), and it will automatically install npm along with it.

Open new terminal window in the root directory and navigate to frontend:
```bash
cd frontend
```

The next step is to install all frontend packages and to start the Vite development server:

```bash
#install frontend packages
npm install

#start Vite development server
npm run dev
```
The application should start at http://localhost:3000

### 5. Stopping the application
1. Pressing Ctrl+C in both terminal windows (backend, frontend) will stop the servers
2. In the root directory stop and remove the database container:
```bash
docker compose down
#This will stop and remove the container, but the data will be preserved thanks to the mounted volume.
```

If you want to remove the database data completely (including the volume), you can run:
```bash
docker compose down -v
```

## Default Credentials

| Role  | Username | Password |
|-------|----------|----------|
| admin | admin    | haslo    |
| user  | user     | haslo    |
| user  | user2    | haslo    |