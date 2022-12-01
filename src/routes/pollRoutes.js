import express from "express";
import { getPoll, postPoll } from "../controllers/poll.controller.js";
import { validatePostPoll } from "../middleware/poll.middleware.js";

const pollRouter = express.Router();

pollRouter.post("/poll", validatePostPoll, postPoll);
pollRouter.get("/poll", getPoll);

export default pollRouter;
