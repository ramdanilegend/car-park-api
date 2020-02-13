const Joi = require("@hapi/joi");
const mongoose = require("mongoose");

const Park = mongoose.model(
  "Park",
  new mongoose.Schema({
    A: {
      type: Number,
      required: true,
      min: 300,
      max: 2000
    },
    B: {
      type: Number,
      required: true,
      min: 300,
      max: 2000
    },
    C: {
      type: Number,
      required: true,
      min: 300,
      max: 2000
    }
  })
);

function validatePark(park) {
  const schema = Joi.object({
    A: Joi.number()
      .min(1)
      .max(1024)
      .required(),
    B: Joi.number()
      .min(1)
      .max(2000)
      .required(),
    C: Joi.number()
      .min(1)
      .max(1024)
      .required()
  });

  return schema.validate(park);
}

exports.Park = Park;
exports.validate = validatePark;
