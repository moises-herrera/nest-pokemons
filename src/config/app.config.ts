export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongoDbUri: process.env.MONGO_DB_URI,
  port: process.env.PORT || 3001,
  pokemonDefaultLimit: parseInt(process.env.POKEMON_DEFAULT_LIMIT, 10) || 7,
});
