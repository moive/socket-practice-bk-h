import joi from 'joi';

export const configValidationSchema = joi
  .object({
    PORT: joi.number().default(3000),
    NODE_ENV: joi
      .string()
      .valid('development', 'production', 'test')
      .default('development'),
    CORS_ORIGINS: joi.string().required(),
  })
  .unknown(true);
