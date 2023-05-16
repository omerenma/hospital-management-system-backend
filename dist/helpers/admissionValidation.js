"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.admissionSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.admissionSchema = joi_1.default.object({
    admission_date: joi_1.default.string().required(),
    discharged_date: joi_1.default.string().required(),
    patients_id: joi_1.default.string().required()
});
