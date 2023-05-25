"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const dotenv = require("dotenv");
const pg_1 = require("pg");
dotenv.config();
const { POSTGRES_HOST, POSTGRES_DB, PGPORT, POSTGRES_DB_TEST, POSTGRES_USER, POSTGRES_PASSWORD, ENV, } = process.env;
exports.client = new pg_1.Pool({
//   host: process.env.RDS_HOSTNAME ,
//   user: process.env.RDS_USERNAME,
//   password: process.env.RDS_PASSWORD,
//   port: 5432
});
// client.connect(function(err) {
//     if (err) {
//       console.error('Database connection failed: ' + err.stack);
//       return;
//     }
//     console.log('Connected to database.');
//   });
//   client.end();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsMkJBQTBCO0FBRTFCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQixNQUFNLEVBQ0osYUFBYSxFQUNiLFdBQVcsRUFDWCxNQUFNLEVBQ04sZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDYixpQkFBaUIsRUFDakIsR0FBRyxHQUNKLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztBQUVILFFBQUEsTUFBTSxHQUFHLElBQUksU0FBSSxDQUFDO0FBQy9CLHFDQUFxQztBQUNyQyxvQ0FBb0M7QUFDcEMsd0NBQXdDO0FBQ3hDLGVBQWU7Q0FDZCxDQUFDLENBQUM7QUFFSCxpQ0FBaUM7QUFDakMsaUJBQWlCO0FBQ2pCLG1FQUFtRTtBQUNuRSxnQkFBZ0I7QUFDaEIsUUFBUTtBQUVSLDZDQUE2QztBQUM3QyxRQUFRO0FBRVIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZG90ZW52ID0gcmVxdWlyZShcImRvdGVudlwiKTtcclxuaW1wb3J0IHsgUG9vbCB9IGZyb20gXCJwZ1wiO1xyXG5cclxuZG90ZW52LmNvbmZpZygpO1xyXG5cclxuY29uc3Qge1xyXG4gIFBPU1RHUkVTX0hPU1QsXHJcbiAgUE9TVEdSRVNfREIsXHJcbiAgUEdQT1JULFxyXG4gIFBPU1RHUkVTX0RCX1RFU1QsXHJcbiAgUE9TVEdSRVNfVVNFUixcclxuICBQT1NUR1JFU19QQVNTV09SRCxcclxuICBFTlYsXHJcbn0gPSBwcm9jZXNzLmVudjtcclxuXHJcbmV4cG9ydCBjb25zdCBjbGllbnQgPSBuZXcgUG9vbCh7XHJcbi8vICAgaG9zdDogcHJvY2Vzcy5lbnYuUkRTX0hPU1ROQU1FICxcclxuLy8gICB1c2VyOiBwcm9jZXNzLmVudi5SRFNfVVNFUk5BTUUsXHJcbi8vICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LlJEU19QQVNTV09SRCxcclxuLy8gICBwb3J0OiA1NDMyXHJcbn0pO1xyXG5cclxuLy8gY2xpZW50LmNvbm5lY3QoZnVuY3Rpb24oZXJyKSB7XHJcbi8vICAgICBpZiAoZXJyKSB7XHJcbi8vICAgICAgIGNvbnNvbGUuZXJyb3IoJ0RhdGFiYXNlIGNvbm5lY3Rpb24gZmFpbGVkOiAnICsgZXJyLnN0YWNrKTtcclxuLy8gICAgICAgcmV0dXJuO1xyXG4vLyAgICAgfVxyXG4gIFxyXG4vLyAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBkYXRhYmFzZS4nKTtcclxuLy8gICB9KTtcclxuICBcclxuLy8gICBjbGllbnQuZW5kKCk7XHJcbiJdfQ==