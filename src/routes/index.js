import pollRouter from "./pollRoutes.js";
import express from "express"


const router = express.Router()

router.use(pollRouter)

export default router
