// importando bibliotecas e arquvios
const database = require("./db");
const Cliente = require("./models/cliente");

// criando o servidor
const express = require("express");
const app = express();
const port = 9443;
const bobyParser = require("body-parser");

//setar os valores da view w engine
app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);
app.use(bobyParser.json());
app.use(express.urlencoded({ extended: true }));

// definir rotas
app.get("/", (req, res) => {
  res.send("Bem vindo ao cadastro de cliente!");
});
app.get("/cadcliente", function (req, res) {
  res.render("formCliente");
});

// iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando{port}`);
});

(async () => {
  try {
    const resultado = await database.sync();
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
})();
