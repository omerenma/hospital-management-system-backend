"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDocotrSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createDocotrSchema = joi_1.default.object({
    //name:joi.string().required(),
    email: joi_1.default.string().email().exist().required(),
    sex: joi_1.default.string().required(),
    dob: joi_1.default.string().required(),
    phone_no: joi_1.default.string().required(),
    specialty: joi_1.default.string().required(),
    //id_doctor:joi.string().required()
});
