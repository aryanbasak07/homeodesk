const { log } = require("console");
const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
require("./db/conn");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const template_partials_path = path.join(__dirname, "../templates/partials");
// console.log(path.join(__dirname, "../public"));

app.use(express.static(static_path)); //it'll check index.html h ya nai otherwise fir niche check krega aur niche jo maaine likha h use pass kra dega.
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(template_partials_path);

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/register", (req, res) =>{
    res.render("register");
});

app.get("/login", (req, res) => {
    res.render("login");
});


app.listen(port, () => {
    console.log(`Server is running successfully on port ${port}`);
});
