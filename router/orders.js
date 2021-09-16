const express = require("express");
const router = express.Router();
const orders = require("../models/orders");

router.get("/", async (req, res) => {
  let result = await orders.findAll();
  res.send(result);
});

router.post("/", async (req, res) => {
  let result = await orders.create(req.body);
  res.send(result);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  let result = await orders.update(req.body, {
    where: {
      id: id,
    },
  });
  res.send(result);
});
router.get("/delete/:id", async (req, res) => {
  const { id } = req.params;
  let result = await orders.update({status : false}, {
    where: {
      id: id,
    },
  });
  res.send(result);
});

module.exports = router;
