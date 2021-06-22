const express = require('express');
const helmet = require('helmet');

const airlineRouter = require('./airlines/airlines-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/aa/', airlineRouter);

module.exports = server;
