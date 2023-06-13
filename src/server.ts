import express = require("express");
import dotenv = require("dotenv");
import cors = require("cors");
import pg  = require('pg')
import {
  userRoute,
  appointmentRoute,
  diagnosisRoute,
  patientRoute,
  admission,
  doctorRoute,
  bookAppointment,
} from "./routes/index";
import { client, client_dev } from "./database/database";
import { sequelize } from "./database/sequelize";

dotenv.config();

const app: express.Application = express();

app.use(express.json());
app.use(cors());

client.connect((err) => {
  if(err){
    console.log('Connection error: ', err.message)
    return
  }
  console.log('DB connection established successfully!')
})
//client_dev.end()

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello Elastic Bean Stalk");
});


app.use("/users", userRoute);
app.use("/appointment", appointmentRoute);
app.use("/diagnosis", diagnosisRoute);
app.use("/patient", patientRoute);
app.use("/admission", admission);
app.use("/doctors", doctorRoute);
app.use("/book_appointments", bookAppointment);
app.all("*", (req:express.Request, res:express.Response) => {
  res.status(404).send('Not Found')
})
const port = 5005
app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});

module.exports = app;
