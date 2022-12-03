import { choiceCollection } from "../database/index.js";

export default async function postChoice(req, res) {
  const choiceData = res.locals.choiceData;

  try {
    await choiceCollection.insertOne(choiceData)
    res.sendStatus(200)
  } catch (err) {
    console.log(err);
    res.sendStatus(500)
}
}
