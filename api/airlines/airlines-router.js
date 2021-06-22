const express = require('express');
const db = require("../../data/dbConfig.js")

const router = express.Router();

router.get('/', (req, res) => {
  db('flights')
    .then(allFlights => {
      res.json(allFlights);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

router.get('/:dest', (req, res) => {
  const { dest } = req.params
  const destUp = dest.toUpperCase();

  db('flights').where("toAirport", destUp)
    .then(airports => {
      res.json(airports);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to retrieve airlines:' + err.message });
    });
});

module.exports = router;
