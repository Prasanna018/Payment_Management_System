const express = require("express")
const app = express();
const bodyParser = require("body-parser");
app.use(express.json())
app.use(bodyParser.json());
const UserRoute = require('./Routes/UserRoute')
const AdminRoute = require('./Routes/AdminRoute')

app.use('/User', UserRoute);

app.use(AdminRoute);

















// -----------listing port ------------
app.listen(3000, function (err) {
    if (err) {
        console.log(err)
    }
    console.log("server is running on port 3000")

})