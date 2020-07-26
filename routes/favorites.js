const express = require("express");
const router = express.Router();
const favorites = require("../models/favorites");
const { post } = require("./users");
const auth = require("../middleware/auth");

/* router.post("/my-favorites", auth, async (req, res) => {
  let fav = new favorites({ 
    user_id: req.body.user_id,
    card_id: req.body.card_id,
  });

  post = await fav.save();
  res.send(post);
}); */
