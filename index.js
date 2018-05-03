const express = require("express");
const path = require("path");


const app = express();

app.use(express.static(path.join(__dirname, "client/build")));

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
  