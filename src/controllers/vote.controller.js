import { ObjectId } from "mongodb";
import {
  choiceCollection,
  pollsCollection,
  voteCollection,
} from "../database/index.js";

export async function postVote(req, res) {
  const { id } = req.params;

  try {
    let choice = await choiceCollection.findOne({ _id: new ObjectId(id) });

    if (!choice) {
      res.status(404).send("choice não encontrada");
    }

    await voteCollection.insertOne({
      createAt: dayjs().format("YYYY-MM-DD HH:MM"),
      choiceId: new ObjectId(id),
    });

    res.status(201).send("voto registrado");
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getVote(req, res) {
  const { id } = req.params;

  try {
    let poll = await pollsCollection.findOne({ _id: new ObjectId(id) });

    if (!poll) {
      res.status(404).send("poll nao encontrada");
    }

    const choiceList = await choiceCollection
      .find({ pollId: new ObjectId(id) })
      .toArray();

    const winner = countVote(choiceList);

    let response = {
      ...poll,
      result: {...winner},
    };
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

function countVote(arr) {
  const countMap = Object.create(null);

  for (let element of arr) {
    if (!countMap[element]) {
      countMap[element] = 1;
    } else {
      countMap[element] += 1;
    }
  }

  let maxVote = Math.max(Object.values(countMap));
  let maxVoteTitle = Object.keys(countMap).find(
    (key) => countMap[key] === maxVote
  );

  return { title: maxVoteTitle, votes: maxVote };
}
