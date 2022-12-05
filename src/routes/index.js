import pollRouter from "./pollRoutes.js";
import express from "express"
import choiceRouter from "./choiceRoutes.js";
import voteRouter from "./voteRoutes.js";


const router = express.Router()

router.use(pollRouter)
router.use(choiceRouter)
router.use(voteRouter)

export default router
