const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Server started , / page</h1>");
});

app.get("/home", (req, res) => {
  res.send("<h1>Hello , you are at /home</h1>");
});

app.get("/products/:productId", (req, res) => {

  const id = req.params.productId;
  console.log(id);

  res.send(`<h1>Extracting product id from url</h1>
    <h2>Product id : ${id}</h2>`);
});

app.listen(3001, () => {
  console.log("server started at http://localhost:3001");
});
