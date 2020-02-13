const express = require("express");
const mongoose = require("mongoose");

const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.set("view engine", "pug");

const routerParks = require("./routes/parks");

app.use("/api/parks", routerParks);

app.get("/", (req, res) => {
  res.render("home");
});

mongoose
  .connect("mongodb://localhost:27017/carpark", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log("conected to mongodb"))
  .catch(err => console.error("gagal connect", err));

app.listen(3500, (req, res) => {
  console.log("running on port 3500");
});
