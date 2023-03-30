"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Appointment_1 = require("../controller/Appointment");
const router = (0, express_1.Router)();
router.post('/', Appointment_1.createAppointment);
exports.default = router;
