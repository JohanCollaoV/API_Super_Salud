import { Router } from "express";
import { get_profesionales } from "../controller/profesionales.controller.js";


const router = Router();

router.get('/profesionales/get_profesionales', get_profesionales);

export default router