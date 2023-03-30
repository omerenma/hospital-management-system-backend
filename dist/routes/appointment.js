"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Appointment_1 = require("../controller/Appointment");
const verifyTokens_1 = require("../middlewares/verifyTokens");
const router = (0, express_1.Router)();
router.post('/', verifyTokens_1.verifyToken, Appointment_1.createAppointment);
exports.default = router;
