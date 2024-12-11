# BilalFinalCarApi

This is a simple Node.js API for managing cars with CRUD operations, it uses a `cars.json` file for data storage.

Here's the link for github repo `https://github.com/Bilal-Ozdemir/BilalFinalCarApi`

## Features
- **Create**: Add a new car to the `cars.json` file.
- **Read**: Retrieve all cars or fetch a specific car by ID.
- **Update**: Modify an existing car's details by ID.
- **Delete**: Remove a car from the file by ID.

## Technologies Used
- **Node.js**
- **Express.js**

---

## Getting Started

### Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) 
- [Git](https://git-scm.com/)

---

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Bilal-Ozdemir/BilalFinalCarApi.git
   cd BilalFinalCarApi

2. **Install Dependencies**:
   ```bash
   npm install
3. **Run the Server**:
   ```bash
   npm run dev
# API ENDPOINTS
## Create a Car
Endpoint: POST /api/cars
```bash
{
  "make": "Toyota",
  "model": "Corolla",
  "year": 2024
}

```
Response:
```bash
{
  "id": 1,
  "make": "Toyota",
  "model": "Corolla",
  "year": 2024
}
```
## Get all Cars
Endpoint: GET /api/cars
Response:
```bash
[
  {
    "id": 1,
    "make": "Toyota",
    "model": "Corolla",
    "year": 2024
  },
  {
    "id": 2,
    "make": "Honda",
    "model": "Civic",
    "year": 2023
  }
]


```

## Get a Car by ID
Endpoint: GET /api/cars/:id
Response (for /api/cars/1):
```bash
{
  "id": 1,
  "make": "Toyota",
  "model": "Corolla",
  "year": 2024
}


```
## Update a Car
Endpoint: PUT /api/cars/:id
```bash
{
  "make": "Honda",
  "model": "Accord",
  "year": 2025
}


```
Response:
```bash
{
  "id": 1,
  "make": "Honda",
  "model": "Accord",
  "year": 2025
}

```
## Delete a Car
Endpoint: DELETE /api/cars/:id
Response:
```bash
{
  "message": "Car deleted successfully",
  "car": {
    "id": 1,
    "make": "Toyota",
    "model": "Corolla",
    "year": 2024
  }
}
```




