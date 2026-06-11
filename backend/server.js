const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "QuickOrder API funcionando!"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP"
  });
});

const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}
app.get("/pedidos", async (req, res) => {

  try {

    const resultado = await pool.query(
      "SELECT * FROM pedidos"
    );

    res.json(resultado.rows);

  } catch (erro) {

    res.status(500).json({
      erro: erro.message
    });

  }

});


module.exports = app;