const express = require("express");
const path = require("path");
const { Server } = require("socket.io");
const http = require("http");
const cors = require("cors");
const e = require("express");

const app = express();
const PORT = 3000;
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

const rooms = {};

io.on('connection', (socket) => {
  console.log('Neue Verbindung:', socket.id);

  socket.on('createRoom', ({ roomId, userId, password }) => {
    if (roomId && userId) {
      if (rooms[roomId]) {
        console.log(`Client ${userId} wollte Raum ${roomId} erstellen, aber Raum existiert bereits.`);
        socket.emit('roomExists', { roomId });
        return;
      }
      socket.join(roomId);
      rooms[roomId] = { creator: userId, members: [socket.id], password: password }; 
      console.log(`Client ${userId} hat den Raum ${roomId} erstellt.`);   
      socket.emit('roomCreated', { roomId }); 
      emitRoomMembers(roomId);
     } else {
      console.error('Fehler: roomId oder userId fehlt (createRoom).');
    }
  });

  socket.on('joinRoom', ({ roomId, userId, password }) => {
    if (roomId && userId) {
      if (!rooms[roomId]) {
        console.log(`Client ${userId} wollte Raum ${roomId} beitreten, aber Raum existiert nicht.`);
        socket.emit('roomNotFound', { roomId }); 
        return;
      }
      if(rooms[roomId].password !== password){
        console.log(password);
        console.log(`Client ${userId} wollte Raum ${roomId} beitreten, aber falsches Passwort.`);
        socket.emit('passwordIncorrect', { roomId });
        return;
      }
      
      socket.join(roomId);
      rooms[roomId].members.push(socket.id); 
      console.log(`Client ${userId} ist dem Raum ${roomId} beigetreten.`);
      io.to(roomId).emit('userJoined', { roomId });
      emitRoomMembers(roomId);
    } else {
      console.error('Fehler: roomId oder userId fehlt (joinRoom).');
    }
  });

  socket.on('clearCanvas', (data) => {
    console.log('clearCanvas');
    console.log('clear Event wird gesendet an Raum:', data.roomId);
    if (!rooms[data.roomId]) 
    {
      console.log('Raum existiert nicht');
      return;
    }
    io.to(data.roomId).emit('doClearing', (data.roomId ));
    console.log('clear Event gesendet an Raum:', data.roomId);
  });

  socket.on('drawing', ({roomId, data}) => {
    io.to(roomId).emit('drawing', data);
  });


  socket.on('disconnect', () => {
    console.log('Ein Client hat die Verbindung getrennt:', socket.id);
    Object.keys(rooms).forEach((roomId) => {
      const room = rooms[roomId];
      console.log(room.members);
      if(room.members.includes(socket.id)) {
        console.log("Clients werden aktualisiert");
        rooms[roomId].members = room.members.filter((member) => member !== socket.id);
        emitRoomMembers(roomId);
        if(rooms[roomId].members.length === 0) {
          console.log('Raum wird gelöscht');
          delete rooms[roomId];
      }
    }
    });
  }); 
});

function emitRoomMembers(roomId) {
    io.to(roomId).emit('roomMembers', { members: rooms[roomId].members});
 
}


server.listen(PORT, () => {
  console.log(`✅ Server läuft auf: http://localhost:${PORT}`);
});