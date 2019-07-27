const express = require("express");

//creates an express aplication
const app = express();
//makes the application listen the specified port

//listen to GET commands
app.get("/", (request, response) => {
  response.send("Olá Mundo");
});

app.listen(3004);
