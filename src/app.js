const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();
require("./db/conn")
const Register = require("./models/registers");
const uplaod = (__dirname, "../middleware/uploads");
const { response } = require("express");
const port = process.env.port || 3000;

const static_path = path.join(__dirname, "../public");

const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path))

app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
    res.render("index")
    //res.send("hello hii")
});

app.get("/register", (req, res) => {
    res.render("register");
})

app.get("/view", (req, res) => {
    res.render("view");

})

app.post("/register", async (req, res) => {
    try {
        console.log(req.body.carname);
        console.log(req.body.avatar);
        //res.send(req.body.carname)
        const registercar = new Register({
            carname: req.body.carname,
            price: req.body.price,
            kilometers: req.body.kilometers,
            yearofpurchase: req.body.yearofpurchase,
            owner: req.body.owner,
            fuel: req.body.fuel,
            transmission: req.body.transmission,
            rto: req.body.rto,
            insurance: req.body.insurance,
            condtion: req.body.condtion,
            avatar: req.body.avatar
           
        })
        if(req.file){
            register.avatar = req.file.path
        }

        const registerd = await registercar.save();
        res.status(201).render("index");


    } catch (error) {
        res.status(400).send(error);
    }
    //res.render("register");
})

// get data 
app.get("/viewrecords", async (req, res) => {
    try {
        const cardata = await Register.find();
        res.send(cardata);
    } catch (e) {
        res.send(e)

    }
})

// get by id 
app.get("/viewby/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const cardataid = await Register.findById(_id);
        console.log(cardataid);
        if (!cardataid) {
            return res.status(404).send();
        } else {
            res.send(cardataid);
        }
    } catch (e) {
        res.send(e)
    }
})




app.listen(port, () => {
    console.log(`server is runing at port no :${port}`);
})