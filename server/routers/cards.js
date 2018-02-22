const express = require("express");
const router = express.Router();
const { Card } = require("../models");

router.post("/new", async (req, res) => {
  const newCard = await Card.create({
    title: "example title",
    description: "example description",
    listId: req.body.listId
  });

  res.json(newCard);
});

module.exports = router;
