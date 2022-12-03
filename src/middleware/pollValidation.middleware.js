import { pollSchema } from "../models/poll.model.js"
import dayjs from "dayjs"

export function validatePostPoll(req, res, next) {

    const body = req.body
    
    const {error} = pollSchema.validate(body, {abortEarly: false})

    if(error){
        const errors = error.details.map(detail => detail.message)
        return res.status(422).send(errors)
    }

    if(body.expireAt === undefined){
        body.expireAt = dayjs().add(30, "day").format("YYYY-MM-DD HH:MM")
    }

    res.locals.body = body

    next()
}
