
import { Router } from "express";
import {healthcheck, search} from "../controllers/healthcheck.controler.js"
const router =Router();


router.route('/').get(healthcheck).post(search);
export default router
