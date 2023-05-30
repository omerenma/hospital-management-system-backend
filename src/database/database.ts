const dotenv = require("dotenv");
import { Pool } from "pg";
import pg = require('pg')

dotenv.config();

const {
  POSTGRES_HOST,
  POSTGRES_DB,
  PGPORT,
  POSTGRES_DB_TEST,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  ENV,
} = process.env;

export const client = new pg.Pool({
  host:process.env.RDS_HOSTNAME,
  user:process.env.RDS_USERNAME,
  password:process.env.RDS_PASSWORD,
  port:5432,
  connectionTimeoutMillis:60000
})

client.connect(err => {
if(err) {
console.log(`Database connection failed: ${err.message}`)
}
console.log('Database connection extablished successfully')
})



