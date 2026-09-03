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
- **Database:** MySQL
- **Deployment:** Docker

## Database Design and Structure
1. **Entity-Relationship Diagram (ERD):**
- The relational database schema is designed to efficiently store and manage user data, inventory, and purchase records.
- [View ERD](./database/data-structure.png)

2. **Relationships:**
- Users → Orders: One-to-Many (A user can place multiple orders)
- Orders → Order Items: One-to-Many (An order can contain multiple item lines)
- Games → Order Items: One-to-Many (A game can appear in multiple order items)

## API Overview

### Public Endpoints (Accessible to Everyone)

| Method | Path             | Description               |
|--------|------------------|---------------------------|
| POST   | `/auth/login`    | User login                |
| POST   | `/auth/register` | User registration         |
| GET    | `/games`         | Fetch all available games |

### Endpoints for logged-in users

| Method | Path              | Description                                |
|--------|-------------------|--------------------------------------------|
| POST   | `/cart`           | Add a game to the shopping cart            |
| DELETE | `/cart/{gameId}`  | Remove a specific game from the cart       |
| POST   | `/cart/clear`     | Clear all items from the shopping cart     |
| POST   | `/checkout`       | Finalize the order and proceed to payment  |
| POST   | `/orders`         | Save a new order in the database           |
| GET    | `/orders`         | View personal order history                |


### Endpoints for admins

| Method | Path           | Description                              |
|--------|----------------|------------------------------------------|
| POST   | `/games`       | Add a new game to the store              |
| PUT    | `/games/{id}`  | Update existing game details             |
| DELETE | `/games/{id}`  | Remove a game from the store             |
| GET    | `/orders`      | View order history for all system users  |



## Installation

### 1. Clone the repository
```bash
git clone https://github.com/damian-pasek/Gameshop.git
cd Gameshop
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
Use Docker Compose to start the MySQL database container:

```bash
docker compose up -d

#to check if database is running use the following command:
docker ps
#container "gameshop-mysql" should be on the list
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
[Apache Maven](https://maven.apache.org/install.html)

Next step is to install dependencies and start the backend server:

```bash
#navigate to backend directory
cd backend

#install dependencies
mvn clean install

#start the backend server
mvn spring-boot:run

#the backend server will be active at http://localhost:8080
```
### 4. Frontend Setup

Open new terminal window and navigate to frontend directory:

```bash
cd frontend

#Verify Node Package Manager installation:
npm -v
```
If npm is not installed, download Node.js from here ([Node.js](https://nodejs.org/en/download)), and it will automatically install npm along with it

Next step is to install all frontend packages and to start the Vite development server:

```bash
#install frontend packages
npm install

#start Vite development server
npm run dev
```
The application should start at http://localhost:3000

### 5. Stopping the application
1. Pressing Ctrl+C in both terminal windows (backend, fronted) will stop the servers
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

