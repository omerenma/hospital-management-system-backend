import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import {userRoute, appointmentRoute, diagnosisRoute, patientRoute, admission, doctorRoute, bookAppointment } from './routes/index'
const app:express.Application = express();


dotenv.config()
app.get("/", (req:Request, res:Response) => {
    res.send("Hello World")
})
app.use(express.json())
app.use(cors())
app.use('/users', userRoute)
app.use('/appointment', appointmentRoute)
app.use('/diagnosis', diagnosisRoute)
app.use('/patient', patientRoute)
app.use('/admission', admission)
app.use('/doctors', doctorRoute)
app.use('/book_appointments', bookAppointment)

app.listen(process.env.server ,() => {
    console.log(`Express server running on port ${process.env.server}`)
})

module.exports = app