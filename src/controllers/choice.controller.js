import { choiceCollection } from "../database/index.js";

export async function postChoice(req, res) {
  const choiceData = res.locals.choiceData;

  try {
    await choiceCollection.insertOne(choiceData);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getChoice(req, res) {
  const { id } = req.params;

  try {
    const choiceList = await choiceCollection.find({ pollId: id }).toArray();
    res.status(200).send(choiceList);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
