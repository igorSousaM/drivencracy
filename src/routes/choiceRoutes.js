import express from "express";
import {getChoice, postChoice} from "../controllers/choice.controller.js";
import validatePostChoice from "../middleware/choiceValidation.middleware.js";

const choiceRouter = express.Router();

choiceRouter.post("/choice", validatePostChoice, postChoice)
choiceRouter.get("/poll/:id/choice", getChoice)

export default choiceRouter
