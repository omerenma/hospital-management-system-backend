"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const index_1 = require("./routes/index");
const database_1 = require("./database/database");
const app = express();
dotenv.config();
database_1.client.connect(function (err) {
    if (err) {
        console.error('Database client failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
});
database_1.client.end();
app.get("/", (req, res) => {
    res.send("Hello World");
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
app.listen(5002, () => {
    console.log(`Express server running on port 5002`);
});
module.exports = app;
