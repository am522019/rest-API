const mongoose = require("mongoose");
const { isInteger } = require("lodash");
const { string } = require("@hapi/joi");

const favoites = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  card_id: {
    type: String,
    required: true,
  },
});

const Favorites = new mongoose.model("favoites", favoites);

exports.Favorites = Favorites;
