const users = require("./routes/users");
const favorites = require("./routes/favorites");

const auth = require("./routes/auth");
const cards = require("./routes/cards");
const express = require("express");
const app = express();
const http = require("http").Server(app);
const mongoose = require("mongoose");
const cors = require("cors");
//in real server to remove 8&19 sen
mongoose
  .connect("mongodb://localhost/my_rest_api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use(cors());
app.use(express.json());

app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/cards", cards);
/* app.use("/api/favorites", favorites); */

const port = 3900;
http.listen(port, () => console.log(`Listening on port ${port}...`));
