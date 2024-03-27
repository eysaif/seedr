const Joi = require("joi");

const imageSchema = Joi.object({
  imageOrignalUrl: Joi.string().required(),
  name: Joi.string().required(),
});

module.exports = {
  imageSchema,
};
