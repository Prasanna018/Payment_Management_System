

const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://prasannagaikwad0018:2doX0XmcSRolWdrI@cluster0.zemrf.mongodb.net/fintech")

const Admin = new mongoose.Schema({
    AdminName: String,
    Password: String
})


const Users = mongoose.Schema({
    UserName: String,
    Password: String
})

const Contributers = mongoose.Schema({
    ContrubuterName: String,
    PayedAmount: String

})

const admin = mongoose.model("Admin", Admin);
const users = mongoose.model("Users", Users)
const Contributer = mongoose.model("Contributer", Contributers)

module.exports = {
    admin,
    users,
    Contributer
}