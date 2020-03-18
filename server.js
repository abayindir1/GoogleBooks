const express = require("express");
const mongoose = require("mongoose")

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes)

mongoose.connect("mongodb://localhost/googlebooksdb");

mongoose.connection.on("open", ()=>{
    console.log("Connection made")
}).on("error", (error)=>{
    console.log("Connection error:" + error)
})

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });