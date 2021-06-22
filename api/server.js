const express = require('express');
const helmet = require('helmet');

const aaRouter = require('./airlines/aa-router.js');
const unitedRouter = require('./airlines/united-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/aa/', aaRouter);
server.use('/united/', unitedRouter);

server.use("*", (req,res)=>{
    res.status(404).send("<span style='white-space: pre-line;font-family:arial'>\n\r--Put your tray tables up and seats back in the full upright position because you have arrived at MulePort!🐴✈\n\r--Right now, MulePort only serves American Airlines and United, you can see all their flights here:\n\r\thttps://muleportnode.herokuapp.com/aa/\n\r\thttps://muleportnode.herokuapp.com/united/\n\r--You can choose from the following destinations on American Airlines: LAX, SFO, and CLE\n\r--And the following destinations on United: LAX, SFO, CLE, PDX, and PDF\n\r--For example, to see all the flights to LAX on American Airlines type: https://muleportnode.herokuapp.com/aa/lax\n\r--To see United flights to PDX type: https://muleportnode.herokuapp.com/united/pdx \n\r--We would like to thank you for visiting MulePort and hope you have a great rest of your day! 🙂\r\n</span>")
})

module.exports = server;
