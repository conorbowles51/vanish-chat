var { createServer } = require('http');
var { Server } = require('socket.io');

var httpServer = createServer();
var io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: "*"
  }
});

var connectedIds = []

io.on("connection", function(socket){
  socket.emit("setId", socket.id);
  connectedIds.push(socket.id);
  
  socket.on("sentMessage", function(data){
    socket.emit("addMessage", data);
    socket.to(data.recipient).emit("addMessage", data);
  });

  socket.on("getRandomId", function(){
    if(connectedIds.length < 2){
      socket.emit("getRandomId", "Nobody online!");
      return;
    }
    
    const ids = connectedIds.filter(id => id !== socket.id);
    var randomId = ids[Math.floor(Math.random() * ids.length)];
    socket.emit("getRandomId", randomId);
  })

  socket.on("disconnect", function(){
    connectedIds = connectedIds.filter(id => id !== socket.id);
  })
});

httpServer.listen(3000);