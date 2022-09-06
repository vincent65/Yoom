//backend server usingn lightweight framework like express JS

const express = require("express");
const app = express();
const server = require("http").Server(app);
//uuid so that each room has unique id 
const { v4: uuidv4 } = require("uuid");
//use the view folder for pages
app.set("view engine", "ejs");
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
  
server.listen(3000);

