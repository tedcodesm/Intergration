import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import Coupon from "../models/coupon.model.js";
import { stripe } from "../lib/stripe.js";
import { checkoutSuccess, createCheckoutSession } from "../controllers/payment.controller.js";
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.post("/create-checkout-session",protectRoute,createCheckoutSession)
router.post("/checkout-success",protectRoute,checkoutSuccess)


export default router