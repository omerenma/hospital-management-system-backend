"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const dotenv = require("dotenv");
const pg = require("pg");
dotenv.config();
const { POSTGRES_HOST, POSTGRES_DB, PGPORT, POSTGRES_DB_TEST, POSTGRES_USER, POSTGRES_PASSWORD, ENV, } = process.env;
exports.client = new pg.Pool({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: 5432,
    connectionTimeoutMillis: 60000
});
exports.client.connect(err => {
    if (err) {
        console.log(`Database connection failed: ${err.message}`);
    }
    console.log('Database connection extablished successfully');
});
