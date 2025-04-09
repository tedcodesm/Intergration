import express from "express";
import { getProfile, login, logout, refreshToken, signup } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.post("/signup" , (req, res, next) => {
	console.log("Signup route hit!");
	console.log("Request body:", req.body);
	next();
}, signup );
router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh-token", refreshToken);
router.get("/profile",protectRoute, getProfile);


export default router