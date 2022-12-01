import { pollsCollection } from "../database/index.js";


export async function getPoll(req, res) {
  try {
    let lista = await pollsCollection.find().toArray();
    res.status(200).send(lista)
} catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}


export async function postPoll(req, res) {
  
  const body = res.locals.body

  try{
    await pollsCollection.insertOne(body)
    res.sendStatus(201)
  }catch(err){
    console.log(err)
    res.sendStatus(500)
  }
}
