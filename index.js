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
