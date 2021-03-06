const express = require("express");
const mongoose = require("mongoose")

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

app.use(routes)

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://user1:password1@ds359298.mlab.com:59298/heroku_3qb4dcfr";
mongoose.connect(MONGODB_URI);


mongoose.connection.on("open", ()=>{
    console.log("Connection made")
}).on("error", (error)=>{
    console.log("Connection error:" + error)
})

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });