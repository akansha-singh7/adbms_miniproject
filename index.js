const express = require("express");
const ejs = require("ejs");
const PORT = 3000;
const app = express();


app.use(express.static('public'));
app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.send("Hello World");
});

// server config
app.listen(PORT, () => {
  console.log(`Server started listening on port: ${PORT}`);
});
