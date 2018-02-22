const express = require("express");
const router = express.Router();
const { Board } = require("../models");

router.get("/", async (req, res) => {
  const boards = await Board.findAll({
    where: { userId: req.user.id },
    include: [{ model: List, include: [{ model: Card }] }]
  });

  res.json({
    user: {
      id: req.user.id,
      username: req.user.username
    },
    boards: boards
  });
});

router.post("/new", async (req, res) => {
  const newBoard = await Board.create({
    title: "example board",
    userId: req.body.userId
  });
  res.json(newBoard);
});

module.exports = router;
