const express = require("express");
const cors = require("cors");

const app = express();
const router=require("./app/routes/tutorial.routes");
const morgan=require('morgan');
// var corsOptions = {
//     original: "http://localhost:4000"
// };

app.use(cors());
app.use(morgan());
app.use(express.json());

app.use(express.urlencoded({extended: true}));

//Calling the connect() method
const db = require("./app/models");
db.mongoose.connect(db.url, {
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to the database!");
}).catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
})

app.get("/", (req,res) => {
    res.json({message: "Welcome to Sekhula application"});
});
app.use('/api/tutorials', router);

// app.use(function (req, res, next) {
//     res.status(404).send('!OOPs looks like the page you wanted doesnt exist ')
// });

// app.use(function (err, req, res, next) {
//     console.error(err.stack)
//     res.status(500).send('Something broke!')
// });

const PORT = process.env.PORT || 5000;



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});