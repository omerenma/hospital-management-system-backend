"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Patients_1 = require("../controller/Patients");
const verifyTokens_1 = require("../middlewares/verifyTokens");
const router = (0, express_1.Router)();
router.get('/', verifyTokens_1.verifyToken, Patients_1.getPatients);
router.get('/patient/:id', verifyTokens_1.verifyToken, Patients_1.getPatients);
router.post('/add', verifyTokens_1.verifyToken, Patients_1.createPatient);
router.put('/patient/:id', verifyTokens_1.verifyToken, Patients_1.editPatient);
router.delete('/patient/:id', verifyTokens_1.verifyToken, Patients_1.deletPatient);
exports.default = router;
