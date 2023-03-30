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
                    const sql = 'INSERT INTO users (username, email, email_status, password) VALUES ($1, $2, $3, $4) RETURNING * ';
                    const result = yield (yield db_connection).query(sql, [user.name, user.email, user.issent, hash]);
                    const response = result;
                    return response.rows[0];
                }
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    verifyUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = database_1.client.connect();
                const sql = 'INSERT INTO verify (username, email, token) VALUES ($1, $2, $3) RETURNING * ';
                const result = yield (yield db_connection).query(sql, [user.username, user.email, user.token]);
                const response = result;
                return response.rows[0];
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.UsersModel = UsersModel;
