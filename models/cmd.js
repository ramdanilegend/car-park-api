const Joi = require("@hapi/joi");
const mongoose = require("mongoose");

const Cmd = mongoose.model(
  "Cmd",
  new mongoose.Schema({
    cmd: {
      type: Number,
      required: true,
      min: 0,
      max: 1
    }
  })
);

function validateCmd(cmd) {
  const schema = Joi.object({
    cmd: Joi.number()
      .min(0)
      .max(1)
      .required()
  });

  return schema.validate(cmd);
}

exports.Cmd = Cmd;
exports.validate = validateCmd;
