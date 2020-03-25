const express = require("express");
const app = express();



app.get("/api", (req, res) => {
  return res.status(200).json("back end de pe");
});

app.listen(3333);
console.log("Servidor rodando na porta 3333");
