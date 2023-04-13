"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const index_1 = require("./routes/index");
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/users', index_1.userRoute);
app.use('/appointment', index_1.appointmentRoute);
app.use('/diagnosis', index_1.diagnosisRoute);
app.use('/patient', index_1.patientRoute);
app.listen(5000, () => {
    console.log(`Express server running on port ${process.env.server}`);
});
module.exports = app;
