const express = require('express'); 
const app = express();

const PORT = 8080
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });   

app.get('/', function (req, res) {
  res.send('Hello World')
})

const petsData = require('./Data.js');

app.get('/api/v1/pets', function (req, res) {
  const petNames = petsData.map((pet) => pet.name);
 
  res.send(petNames)
})

app.get('/api/v1/pets/:name', function (req, res) {
  const petName = req.params.name;
  const foundPet = petsData.find((pet) => pet.name === petName);
  res.send(foundPet)
})

app.get('/api/v1/pets/owner', function (req, res) {
  const ownerName = req.query.owner;
   const pet = petsData.find((pet) => pet.owner === ownerName);
   res.send(pet);
})