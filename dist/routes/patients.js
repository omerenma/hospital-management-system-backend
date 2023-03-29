"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const patients_1 = require("../controller/patients");
const router = (0, express_1.Router)();
router.post('/', patients_1.createPatient);
exports.default = router;
