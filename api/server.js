const express = require('express');
const helmet = require('helmet');

const airlineRouter = require('./airlines/airlines-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/aa/', airlineRouter);

server.use("*", (req,res)=>{
    res.status(404).send("--Put your tray tables up and seats back in the full upright position because you have arrived at MulePort! 🐴✈\n\n--Right now, MulePort only serves American Airlines, you can see all their flights here:\n\n https://muleportnode.herokuapp.com/aa/ \n\n--You are also able to choose from the following destinations: LAX, SFO, and CLE \n\n--For example, to see all the flights to LAX type:\n\n https://muleportnode.herokuapp.com/aa/lax \n\n--We would like to thank you for visiting MulePort and hope you have a great rest of your day! 🙂")
})

module.exports = server;
