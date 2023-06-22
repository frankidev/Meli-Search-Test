const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());

app.get("/", async (req, res) => {
  const { query } = req.query;

  const { data } = await axios.get(
    `https://api.mercadolibre.com/sites/MLA/search?q=:${query}`
  );

  if (query) {
    const busqueda = data.results.filter((item) => {
      return item?.title?.toLowerCase().includes(query.toLowerCase());
    });
    res.json({ busqueda: busqueda });
    console.log(busqueda);
  }
});

app.listen(5000, () => console.log("server is waiting"));
