"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Users_1 = require("../controller/Users");
const verifyTokens_1 = require("../middlewares/verifyTokens");
const router = (0, express_1.Router)();
router.post("/register", Users_1.signup);
router.post("/signin", Users_1.signin);
router.get("/getusers", verifyTokens_1.verifyToken, Users_1.getUsers);
router.get("/getuser/:id", verifyTokens_1.verifyToken, Users_1.getUserById);
router.get("/getdoctors", verifyTokens_1.verifyToken, Users_1.getDoctors);
router.delete("/user/:id", verifyTokens_1.verifyToken, Users_1.deleteUser);
router.put("/user", Users_1.editUser);
exports.default = router;
