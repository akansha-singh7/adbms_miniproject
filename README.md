# adbms_miniproject

npm init
npm i express mongoose

touch index.js
mkdir models

//make basic entry in index.js
Content:
const express = require("express");
const PORT = 3000;
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello World");
});

// server config
app.listen(PORT, () => {
  console.log(`Server started listening on port: ${PORT}`);
});

node index.js

mkdir public

add the index.ejs or index.html

npm i ejs

// in index.js : app.use(express.static('public'));

// in index.js : const ejs = require("ejs");

// in index.js : app.set("view engine", "ejs");


