"use strict";
const Sequelize = require('sequelize');
const dbSequelize = require('../database/sequelize');
const sequelize = new Sequelize(dbSequelize.DB, dbSequelize.USER, dbSequelize.PASSWORD, {
    host: dbSequelize.HOST,
    dialect: dbSequelize.dialect,
    operatorsAliases: false,
    pool: {
        max: dbSequelize.pool.max,
        min: dbSequelize.pool.min,
        acquire: dbSequelize.pool.acquire,
        idle: dbSequelize.pool.idle
    }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
module.exports = db;
