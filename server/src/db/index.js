import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "sagaram",
  password: "Akshi@142",
  database: "sagaram_lace",
});