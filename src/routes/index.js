import pollRouter from "./pollRoutes.js";
import express from "express"
import choiceRouter from "./choiceRoutes.js";


const router = express.Router()

router.use(pollRouter)
router.use(choiceRouter)

export default router
