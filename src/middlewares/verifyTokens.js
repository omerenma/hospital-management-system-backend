"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();
const verifyToken = (req, res, next) => {
    try {
        // Get token from headers
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!authHeader) {
            return res.status(401).json({ message: 'You are not authorized' });
        }
        const verify = jwt.verify(authHeader, process.env.TOKEN_SECRET);
        return req.info = verify;
    }
    catch (error) {
        return res.status(500).json({ error: 'something went wrong' });
    }
    next();
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZ5VG9rZW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVyaWZ5VG9rZW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUNoQyxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUE7QUFJbkMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFBO0FBTVIsTUFBTSxXQUFXLEdBQUcsQ0FBQyxHQUFhLEVBQUUsR0FBYSxFQUFFLElBQWtCLEVBQUUsRUFBRTtJQUM1RSxJQUFJO1FBQ0EseUJBQXlCO1FBQ3pCLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDL0MsTUFBTSxLQUFLLEdBQUcsVUFBVSxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDcEQsSUFBRyxDQUFDLFVBQVUsRUFBQztZQUNYLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUMsQ0FBQyxDQUFBO1NBQ25FO1FBQ0QsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFzQixDQUFTLENBQUE7UUFDbEYsT0FBTyxHQUFHLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQTtLQUcxQjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ1osT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxzQkFBc0IsRUFBQyxDQUFDLENBQUE7S0FDL0Q7SUFDRCxJQUFJLEVBQUUsQ0FBQTtBQUNWLENBQUMsQ0FBQTtBQWhCWSxRQUFBLFdBQVcsZUFnQnZCIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZG90ZW52ID0gcmVxdWlyZSgnZG90ZW52JylcclxuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJylcclxuaW1wb3J0IHtSZXF1ZXN0LCBSZXNwb25zZSwgTmV4dEZ1bmN0aW9ufSBmcm9tICdleHByZXNzJ1xyXG5pbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vaW50ZXJmYWNlL0RhdGEnXHJcblxyXG5kb3RlbnYuY29uZmlnKClcclxuXHJcbmludGVyZmFjZSBFeHRlbmRlZCBleHRlbmRzIFJlcXVlc3Qge1xyXG4gICAgaW5mbz86IERhdGFcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHZlcmlmeVRva2VuID0gKHJlcTogRXh0ZW5kZWQsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBHZXQgdG9rZW4gZnJvbSBoZWFkZXJzXHJcbiAgICAgICAgY29uc3QgYXV0aEhlYWRlciA9IHJlcS5oZWFkZXJzWydhdXRob3JpemF0aW9uJ11cclxuICAgICAgICBjb25zdCB0b2tlbiA9IGF1dGhIZWFkZXIgJiYgYXV0aEhlYWRlci5zcGxpdCgnICcpWzFdXHJcbiAgICAgICAgaWYoIWF1dGhIZWFkZXIpe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oe21lc3NhZ2U6ICdZb3UgYXJlIG5vdCBhdXRob3JpemVkJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHZlcmlmeSA9IGp3dC52ZXJpZnkoYXV0aEhlYWRlciwgcHJvY2Vzcy5lbnYuVE9LRU5fU0VDUkVUIGFzIHN0cmluZykgYXMgRGF0YVxyXG4gICAgICAgcmV0dXJuIHJlcS5pbmZvID0gdmVyaWZ5XHJcbiAgICAgXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe2Vycm9yOiAnc29tZXRoaW5nIHdlbnQgd3JvbmcnfSlcclxuICAgIH1cclxuICAgIG5leHQoKVxyXG59Il19