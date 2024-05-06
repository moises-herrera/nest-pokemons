import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  MONGO_DB_URI: Joi.required(),
  PORT: Joi.number().default(3000),
  POKEMON_DEFAULT_LIMIT: Joi.number().default(6),
});
