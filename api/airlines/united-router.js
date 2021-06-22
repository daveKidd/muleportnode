const express = require('express');
const {checkUnitedDest} = require("./airlines-mw.js")
const fetch = require("node-fetch")

const router = express.Router();

router.get('/', (req, res) => {  
  try{
    fetch("http://mu.learn.mulesoft.com/united/flights")
      .then(flights => flights.json())
      .then(data => res.json(data));
  }catch(e){
    res.json(e.message)
  }  
});

router.get('/:dest',checkUnitedDest, (req, res) => {
  const {dest} = req.params
  const destUp = dest.toUpperCase()
  try{
    fetch(`http://mu.learn.mulesoft.com/united/flights/${destUp}`)
      .then(flights => flights.json())
      .then(data => res.json(data));
  }catch(e){
    res.json(e.message)
  }  
});

module.exports = router;
