"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Diagnosis_1 = require("../controller/Diagnosis");
const router = (0, express_1.Router)();
router.post('/', Diagnosis_1.createDiagnosis);
exports.default = router;
