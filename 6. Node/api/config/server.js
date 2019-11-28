import express from "express";
import database from "../src/database";
import bodyParser from "body-parser";

const PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/produtos", (req, res, next) => {
  console.log("Middleware 1");
  next();
});

app.get("/produtos", (req, res, next) => {
  res.send(database.getProducts());
});

app.get("/produtos/:id", (req, res, next) => {
  res.send(database.getProduct(req.params.id));
});

app.post("/produtos", (req, res) => {
  const produto = database.saveProduct({
    nome: req.body.nome,
    preco: req.body.preco
  });
  res.send(produto);
});

app.put("/produtos/:id", (req, res) => {
  const produto = database.saveProduct({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco
  });
  res.send(produto);
});

app.delete("/produtos/:id", (req, res) => {
  const produto = database.deleteProduct(req.params.id);
  res.send(produto);
});

app.listen(PORT, () => {
  console.log(`Running Server in port ${PORT}`);
});
