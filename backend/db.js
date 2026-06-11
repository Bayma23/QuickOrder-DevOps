const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.POSTGRES_USER || "admin",
  host: "db",
  database: process.env.POSTGRES_DB || "quickorder",
  password: process.env.POSTGRES_PASSWORD || "admin123",
  port: 5432,
});

module.exports = pool;