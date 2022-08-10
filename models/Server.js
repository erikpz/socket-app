const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const path = require("path");
const cors = require("cors");
const { Sockets } = require("./Sockets");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = http.createServer(this.app);
    this.io = new socketio.Server(this.server);
  }

  middlewares() {
    this.app.use(express.static(path.resolve(__dirname, "../public")));
    this.app.use(cors());
  }

  setSockets() {
    this.sockets = new Sockets(this.io);
  }

  execute() {
    this.middlewares();
    this.setSockets();
    this.server.listen(this.port, () =>
      console.log(`Server running at port ${this.port}`)
    );
  }
}

module.exports = { Server };
