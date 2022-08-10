class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }

  socketEvents() {
    this.io.on("connection", (socket) => {
      console.log("a user connected");
      /* this.io.emit("msg-from-server", { msg: "Hello from server" }); */
      socket.on("msg-from-client", (data) => {
        console.log(data);
      });
    });
  }
}

module.exports = { Sockets };
