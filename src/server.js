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
app.get('/users', (req, res) => {
    res.json({
        message: "Get all users"
    });
});
app.get('/users/:id', (req, res) => {
    res.send(req.params);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW9DO0FBQ3BDLGlDQUFrQztBQUNsQyw2QkFBOEI7QUFDOUIsMENBUXdCO0FBRXhCLE1BQU0sR0FBRyxHQUF3QixPQUFPLEVBQUUsQ0FBQztBQUUzQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFLaEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtJQUMzRCxHQUFHLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDdkMsQ0FBQyxDQUFDLENBQUM7QUFDSCxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQW1CLEVBQUUsR0FBb0IsRUFBRSxFQUFFO0lBQzlELEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDUCxPQUFPLEVBQUMsZUFBZTtLQUN4QixDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQTtBQUVGLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsR0FBbUIsRUFBRSxHQUFvQixFQUFFLEVBQUU7SUFDbEUsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDdEIsQ0FBQyxDQUFDLENBQUE7QUFDRixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNoQixHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxpQkFBUyxDQUFDLENBQUM7QUFDN0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsd0JBQWdCLENBQUMsQ0FBQztBQUMxQyxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxzQkFBYyxDQUFDLENBQUM7QUFDdEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsb0JBQVksQ0FBQyxDQUFDO0FBQ2xDLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLGlCQUFTLENBQUMsQ0FBQztBQUNqQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxtQkFBVyxDQUFDLENBQUM7QUFDakMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSx1QkFBZSxDQUFDLENBQUM7QUFDL0MsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFBO0FBQ3JDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3hELENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xyXG5pbXBvcnQgZG90ZW52ID0gcmVxdWlyZShcImRvdGVudlwiKTtcclxuaW1wb3J0IGNvcnMgPSByZXF1aXJlKFwiY29yc1wiKTtcclxuaW1wb3J0IHtcclxuICB1c2VyUm91dGUsXHJcbiAgYXBwb2ludG1lbnRSb3V0ZSxcclxuICBkaWFnbm9zaXNSb3V0ZSxcclxuICBwYXRpZW50Um91dGUsXHJcbiAgYWRtaXNzaW9uLFxyXG4gIGRvY3RvclJvdXRlLFxyXG4gIGJvb2tBcHBvaW50bWVudCxcclxufSBmcm9tIFwiLi9yb3V0ZXMvaW5kZXhcIjtcclxuXHJcbmNvbnN0IGFwcDogZXhwcmVzcy5BcHBsaWNhdGlvbiA9IGV4cHJlc3MoKTtcclxuXHJcbmRvdGVudi5jb25maWcoKTtcclxuXHJcblxyXG5cclxuXHJcbmFwcC5nZXQoXCIvXCIsIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSA9PiB7XHJcbiAgcmVzLnNlbmQoXCJIZWxsbyBFbGFzdGljIEJlYW4gU3RhbGtcIik7XHJcbn0pO1xyXG5hcHAuZ2V0KCcvdXNlcnMnLCAocmVxOmV4cHJlc3MuUmVxdWVzdCwgcmVzOmV4cHJlc3MuUmVzcG9uc2UpID0+IHtcclxuICByZXMuanNvbih7XHJcbiAgICBtZXNzYWdlOlwiR2V0IGFsbCB1c2Vyc1wiXHJcbiAgfSlcclxufSlcclxuXHJcbmFwcC5nZXQoJy91c2Vycy86aWQnLCAocmVxOmV4cHJlc3MuUmVxdWVzdCwgcmVzOmV4cHJlc3MuUmVzcG9uc2UpID0+IHtcclxuICByZXMuc2VuZChyZXEucGFyYW1zKVxyXG59KVxyXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcclxuYXBwLnVzZShjb3JzKCkpO1xyXG5hcHAudXNlKFwiL3VzZXJzXCIsIHVzZXJSb3V0ZSk7XHJcbmFwcC51c2UoXCIvYXBwb2ludG1lbnRcIiwgYXBwb2ludG1lbnRSb3V0ZSk7XHJcbmFwcC51c2UoXCIvZGlhZ25vc2lzXCIsIGRpYWdub3Npc1JvdXRlKTtcclxuYXBwLnVzZShcIi9wYXRpZW50XCIsIHBhdGllbnRSb3V0ZSk7XHJcbmFwcC51c2UoXCIvYWRtaXNzaW9uXCIsIGFkbWlzc2lvbik7XHJcbmFwcC51c2UoXCIvZG9jdG9yc1wiLCBkb2N0b3JSb3V0ZSk7XHJcbmFwcC51c2UoXCIvYm9va19hcHBvaW50bWVudHNcIiwgYm9va0FwcG9pbnRtZW50KTtcclxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNTAwMFxyXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhgRXhwcmVzcyBzZXJ2ZXIgcnVubmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGFwcDtcclxuIl19