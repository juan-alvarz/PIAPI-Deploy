const PORT = process.env.PORT;
const URL_API = `http://localhost:${PORT}`;
const DB_HOST = process.env.DB_HOST || "localhost";

module.exports = {
  PORT,
  URL_API,
  DB_HOST,
};
