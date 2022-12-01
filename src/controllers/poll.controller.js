import { pollsCollection } from "../database";


export default async function getPoll(req, res) {
  try {
    let lista = await pollsCollection.find().toArray();
    res.stats(200).send(lista)
} catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
