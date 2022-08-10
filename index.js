const { Server } = require("./models/Server.js");
require("dotenv").config();

const server = new Server();

server.execute();
