const express = require("express");
const path = require("path");
const app = express();
// const routes = require("./routes");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/pathology_db"

mongoose
    .connect(MONGODB_URI)
    .then(()=>console.log("connection to mongodb sucessful"))
    .catch(err => console.log(err))

// app.use(routes)

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));
}


app.get("/hello", (req, res)=>{
    res.json("hello world");
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname+"/client/build/index.html"))
})

const port = process.env.PORT || 5000;


app.listen(port, function() {
    console.log(`🌎 ==> Server now on port ${port}!`);
  });
  