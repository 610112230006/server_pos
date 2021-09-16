const express = require("express");
const router = express.Router();
const products = require("../models/products");

router.get("/", async (req, res) => {
  let result = await products.findAll();
  res.send(result);
});

router.post("/", async (req, res) => {
  let result = await products.create(req.body);  
  res.send(result)
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  let result = await products.update(req.body, {
    where: {
      id: id
    }
  });
  res.send(result)
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  result = await products.destroy({
    where: {
      id: id
    }
  })
  res.send('ok')
});


module.exports = router;
