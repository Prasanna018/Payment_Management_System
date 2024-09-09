const { Router } = require("express")
const router = Router();

const { users, Contributer } = require("../Db/Db.js")
const jwt = require("jsonwebtoken")
const Zod = require("zod")
const jwt_secrete = "12345ptg";
const userMiddleware = require('../Middleware/usersMiddleware.js');

// ---------------//
const userBody = Zod.object({
    UserName: Zod.string(),
    Password: Zod.string()
})

router.post('/sign-in', async function (req, res) {
    const { success } = userBody.safeParse(req.body);
    if (!success) {
        res.status(411).json({
            msg: "inputs are wrong"
        })
        return
    }
    const validUsername = await users.findOne({
        UserName: req.body.UserName
    })
    if (validUsername) {
        res.status(402).json({
            msg: "Username is already taken"
        })
        return
    }
    const token = jwt.sign({
        UserName: req.body.UserName

    }, jwt_secrete)
    users.create({
        UserName: req.body.UserName,
        Password: req.body.Password
    })
    res.json({
        msg: "User created ",
        token: token
    })

})

const loginbody = Zod.object({
    UserName: Zod.string(),
    Password: Zod.string()
})

router.post('/login', userMiddleware, async function (req, res) {
    const { success } = loginbody.safeParse(req.body);

    if (!success) {
        res.status(411).json({
            msg: "inputs are wrong"
        })
    }

    const user = await users.findOne({
        UserName: req.body.UserName,
        Password: req.body.Password
    })

    if (user) {
        const token = jwt.sign({
            UserName: req.body.UserName
        }, jwt_secrete)

        res.json({
            msg: "you are logged",
            token: token
        })
    }

})


router.get('/view', function (req, res) {
    Contributer.find({});

})
module.exports = router;
















