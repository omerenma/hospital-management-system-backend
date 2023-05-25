"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const index_1 = require("./routes/index");
const app = express();
dotenv.config();
app.get("/", (req, res) => {
    res.send("Hello Elastic Bean Stalk");
});
app.use(express.json());
app.use(cors());
app.use("/users", index_1.userRoute);
app.use("/appointment", index_1.appointmentRoute);
app.use("/diagnosis", index_1.diagnosisRoute);
app.use("/patient", index_1.patientRoute);
app.use("/admission", index_1.admission);
app.use("/doctors", index_1.doctorRoute);
app.use("/book_appointments", index_1.bookAppointment);
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Express server running on port ${port}`);
});
module.exports = app;
