///USERS ROUTES -- ROUTER

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("users list");
});

router.get("/new", (req, res) => {
  res.send("users new form ");
});

router.get("/:id", (req, res) => {
  req.params.id;
  res.send(`Get user with the ID ${(req, params.id)}`);
});

module.exports = router;
