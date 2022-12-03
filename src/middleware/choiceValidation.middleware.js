import { choiceSchema } from "../models/choiceSchema.model.js";

export default function validatePostChoice(req, res, next) {
  const choiceData = req.body;

  const { error } = choiceSchema.validate(choiceData, { abortEarly: false });

  if(error){
    const errors = error.details.map(detail => detail.message)
    return res.status(422).send(errors)
  }

  res.locals.choiceData = choiceData

  next();
}
