import { pollSchema } from "../models/poll.model.js"

export function validatePostPoll(req, res, next) {

    const body = req.body
    
    const {error} = pollSchema.validate(body, {abortEarly: false})

    if(error){
        const errors = error.details.map(detail => detail.message)
        return res.status(422).send(errors)
    }

    if(body.expireAt === undefined){
        body.expireAt = Date().split(" ").slice(1,5).join(" ")
    }

    res.locals.body = body

    next()
}
