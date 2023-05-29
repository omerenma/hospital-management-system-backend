import express = require("express");
import dotenv = require("dotenv");
import cors = require("cors");
import {
  userRoute,
  appointmentRoute,
  diagnosisRoute,
  patientRoute,
  admission,
  doctorRoute,
  bookAppointment,
} from "./routes/index";
import { client } from "./database/database";

const app: express.Application = express();

dotenv.config();



client.connect(function(err) {
    if (err) {
      console.error('Database connection failed: ' + err);
      return;
    }
  
    console.log('Connected to database.');
  });

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello Elastic Bean Stalk");
});
app.get('/users', (req:express.Request, res:express.Response) => {
  res.json({
    message:"Get all users"
  })
})

app.get('/users/:id', (req:express.Request, res:express.Response) => {
  res.send(req.params)
})
app.use(express.json());
app.use(cors());
app.use("/users", userRoute);
app.use("/appointment", appointmentRoute);
app.use("/diagnosis", diagnosisRoute);
app.use("/patient", patientRoute);
app.use("/admission", admission);
app.use("/doctors", doctorRoute);
app.use("/book_appointments", bookAppointment);
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});

module.exports = app;
