import { pollsCollection } from "../database/index.js";


export async function getPoll(req, res) {
  try {
    let pollList = await pollsCollection.find().toArray();
    res.status(200).send(pollList)
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
