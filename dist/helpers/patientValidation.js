"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.patientSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.patientSchema = joi_1.default.object({
    name: joi_1.default.string().required().min(6),
    residential_address: joi_1.default.string().email().exist().required(),
    room_admitted: joi_1.default.string().email().exist().required(),
    admission_no: joi_1.default.string().email().exist().required(),
    id_no: joi_1.default.string().email().exist().required(),
    phone_number: joi_1.default.string().email().exist().required(),
    next_of_kin_name: joi_1.default.string().email().exist().required(),
    next_of_kin_phone_no: joi_1.default.string().email().exist().required(),
    status: joi_1.default.string().email().exist().required(),
});
