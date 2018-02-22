const express = require("express");
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");
const { User, Board, List, Card } = require("./models");

const morgan = require("morgan");
const morganToolkit = require("morgan-toolkit")(morgan);

app.use(morganToolkit());

app.use(bodyParser.json());

app.get("/", async (req, res) => {
  const boards = await Board.findAll({
    where: { userId: 1 },
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

const api = require("./routers");

app.use("/api", api);

app.listen(3001, () => {
  console.log("Now listening...");
});
