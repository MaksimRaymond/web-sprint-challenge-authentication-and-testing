const db = require('./auth-model')

const checkUsernameExists = async(req, res, next) => {
    console.log(req.body.username)
    try{
        const [user] = await db.findBy({username: req.body.username})
        console.log(user)
        if(user){
            next({status: 422, message: "username not available"})
        } else {
            req.user = user
            next()
        } 
    } catch(err){
        next(err)
    }
}