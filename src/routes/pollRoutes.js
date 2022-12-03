import express from "express";
import { getPoll, postPoll } from "../controllers/poll.controller.js";
import { validatePostPoll } from "../middleware/pollValidation.middleware.js";

const pollRouter = express.Router();

pollRouter.post("/poll", validatePostPoll, postPoll);
pollRouter.get("/poll", getPoll);

export default pollRouter;
