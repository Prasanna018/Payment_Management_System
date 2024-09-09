const { Contributer } = require('../Db/Db')

const { Router } = require("express")
const Zod = require("zod")

const router = Router();


const listing = Zod.object({
    ContrubuterName: Zod.string(),
    PayedAmount: Zod.string()

})
router.post('/create-list', function (req, res) {
    const { success } = listing.safeParse(req.body);
    if (!success) {
        res.status(411).json({
            msg: "inputs are not valid"
        })
        return
    }

    Contributer.create({
        ContrubuterName: req.body.ContrubuterName,
        PayedAmount: req.body.PayedAmount
    })

    res.json({
        msg: "list added"
    })



})

module.exports = router;