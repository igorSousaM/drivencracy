import express from "express";
import postChoice from "../controllers/choice.controller.js";
import validatePostChoice from "../middleware/choiceValidation.middleware.js";

const choiceRouter = express.Router();

choiceRouter.post("/choice", validatePostChoice, postChoice)

export default choiceRouter
