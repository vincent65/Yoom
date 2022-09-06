//backend server usingn lightweight framework like express JS

const express = require("express");
const app = express();
const server = require("http").Server(app);
//uuid so that each room has unique id 
const { v4: uuidv4 } = require("uuid");
//use the view folder for pages
app.set("view engine", "ejs");


//Video Chat and Audio communication and streaming
//socket.io import; allows to do real time communication between web clients and servers
const io = require("socket.io")(server);
//PeerJS allows us to implement  WebRTC: real time communication via API
const {ExpressPeerServer} = require("peer");
const peerServer = ExpressPeerServer(server, {
    debug: true,
});
app.use("/peerjs", peerServer);


//ExpressJS Backend pages
//access the css 
app.use(express.static("client_side"));
//redirect user to distinct room 
app.get("/", (req, res) => {
    res.redirect(`/${uuidv4()}`);
});
//add a view for each distinct room and pass the roomId parameter; makes unique url
app.get("/:room", (req, res) => {
    res.render("room", { roomId: req.params.room });
});
  

//listen for a join-room event and send user to the room
io.on("connection", (socket)=>{
    socket.on("join-room", (roomId, userId)=>{
        socket.join(roomId);
        socket.to(roomId).broadcast.emit("user-connected", user-Id);
    });
});

server.listen(3000);

