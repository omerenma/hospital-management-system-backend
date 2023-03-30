"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Patients_1 = require("../controller/Patients");
const router = (0, express_1.Router)();
router.post('/', Patients_1.createPatient);
exports.default = router;
