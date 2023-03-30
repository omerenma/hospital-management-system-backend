"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModel = void 0;
const database_1 = require("../database/database");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class UsersModel {
    addUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = database_1.client.connect();
                const checkEmail = `SELECT email FROM users WHERE email=($1)`;
                const query_email = yield (yield db_connection).query(checkEmail, [user.email]);
                if (query_email.rows.length > 0) {
                    throw new Error(`User with email: ${user.email},  already exist.`);
                }
                else {
                    const hash = bcryptjs_1.default.hashSync(user.password, 10);
                    const sql = 'INSERT INTO users (name, email, role, password) VALUES ($1, $2, $3, $4) RETURNING * ';
                    const result = yield (yield db_connection).query(sql, [user.name, user.email, user.role, hash]);
                    const response = result;
                    return response.rows[0];
                }
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    login(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = database_1.client.connect();
                const check_email = `SELECT email, password FROM users WHERE email = ($1)`;
                const query_email = yield (yield db_connection).query(check_email, [user.email]);
                if (query_email.rows.length > 0) {
                    const isMatch = yield bcryptjs_1.default.compare(user.password, query_email.rows[0].password);
                    if (isMatch) {
                        return query_email.rows[0];
                    }
                    throw new Error('Invalid credentials supplied');
                }
                throw new Error('User not found');
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    // Get all users
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = database_1.client.connect();
                const sql = `SELECT * FROM users`;
                const query = yield (yield db_connection).query(sql);
                return query.rows[0];
            }
            catch (error) {
                return error;
            }
        });
    }
    // Delete user
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = database_1.client.connect();
                const query_id = `SELECT id from users WHERE id =($1)`;
                const sql = yield (yield db_connection).query(query_id, [id]);
                if (sql.rows.length > 0) {
                    return sql.rows[0].id;
                }
                return sql.rows[0];
            }
            catch (error) {
                return error;
            }
        });
    }
    // UPDATE user
    editUser(id, name, email, role) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = database_1.client.connect();
                const query = `UPDATE users SET name, email, role WHERE id = ($1)`;
                const sql = yield (yield db_connection).query(query, [id, name, email, role]);
                if (sql.rows.length > 0) {
                    return sql.rows[0].id;
                }
                return sql.rows[0];
            }
            catch (error) {
                return error;
            }
        });
    }
    // Get Doctors
    getDoctors() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = database_1.client.connect();
                const sql = `SELECT * FROM users WHERE role = doctor`;
                const query = yield (yield db_connection).query(sql);
                return query.rows[0];
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.UsersModel = UsersModel;
