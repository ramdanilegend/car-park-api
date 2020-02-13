const express = require("express");
const router = express.Router();
const { Park, validate } = require("../models/park");

router.get("/", async (req, res) => {
  const park = await Park.find();
  const parks = {
    parks: park
  };
  res.send(parks);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let park = new Park({
    A: req.body.A,
    B: req.body.B,
    C: req.body.C
  });

  park = await park.save();
  res.send(park);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const park = await Park.findByIdAndUpdate(
    req.params.id,
    {
      A: req.body.A,
      B: req.body.B,
      C: req.body.C
    },
    { new: true }
  );

  res.send(park);
});

module.exports = router;
