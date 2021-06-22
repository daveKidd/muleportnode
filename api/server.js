const express = require('express');
const helmet = require('helmet');

const airlineRouter = require('./airlines/airlines-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/aa/', airlineRouter);

server.use("*", (req,res)=>{
    res.status(404).send("<span style='white-space: pre-line'>\n\r--Put your tray tables up and seats back in the full upright position because you have arrived at MulePort!🐴✈\n\r--Right now, MulePort only serves American Airlines, you can see all their flights here:\n\rhttps://muleportnode.herokuapp.com/aa/\n\r--You are also able to choose from the following destinations: LAX, SFO, and CLE\n\r--For example, to see all the flights to LAX type:\n\rhttps://muleportnode.herokuapp.com/aa/lax\n\r--We would like to thank you for visiting MulePort and hope you have a great rest of your day! 🙂\r\n</span>")
})

module.exports = server;
