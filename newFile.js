const { app } = require(".");

// definir rotas
app.get("/", (req, res) => {
    res.send("Bem vindo ao servidor cliente!);");
});
