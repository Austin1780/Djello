const express = require("express");
const router = express.Router();
const { List } = require("../models");

router.post("/new", async (req, res) => {
  const newList = await List.create({
    title: "example title",
    boardId: req.body.boardId
  });

  res.json(newList);
});

module.exports = router;
