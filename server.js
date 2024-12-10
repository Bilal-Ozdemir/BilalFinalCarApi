const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 5000;


app.use(express.json());


const dataFilePath = path.join(__dirname, 'cars.json');


const readData = () => {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading data file:', err);
    return [];
  }
};


const writeData = (data) => {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error('Error writing data file:', err);
  }
};


if (readData().length === 0) {
  const seedData = [
    { id: 1, make: 'Toyota', model: 'Camry', year: 2022 },
    { id: 2, make: 'Honda', model: 'Civic', year: 2023 },
  ];
  writeData(seedData);
  console.log('Seeded initial data to cars.json');
}


app.get('/', (req, res) => {
  res.send('Welcome to the Car API!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
