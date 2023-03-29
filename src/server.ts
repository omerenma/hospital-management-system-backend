import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import {userRoute, appointmentRoute, diagnosisRoute, patientRoute} from './routes/index'
const app:express.Application = express();


dotenv.config();
app.use(express.json())

app.use(cors())
app.use('/users', userRoute)
app.use('/appointment', appointmentRoute)
app.use('/diagnosis', diagnosisRoute)
app.use('/patient', patientRoute)


app.listen(3000 ,() => {
    console.log(`Express server running on port ${process.env.server}`)
})

module.exports = app