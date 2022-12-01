import express from "express";
import getPoll from "../controllers/poll.controller.js";


const pollRouter = express.Router();

pollRouter.get("/poll", getPoll);

export default pollRouter;
