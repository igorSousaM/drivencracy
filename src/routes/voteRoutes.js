import express from "express";
import { getVote, postVote } from "../controllers/vote.controller.js";

const voteRouter = express.Router();

voteRouter.post("/choice/:id/vote", postVote)
voteRouter.get("/poll/:id/result", getVote)

export default voteRouter