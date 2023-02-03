const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mongodb = ("mongodb://127.0.0.1:12717/todolistDB");
const ejs = require("ejs");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

items = ["ashok" ,]; //put multiple values in array ashok is default 
const itemschema = {
    name: String
};

app.get("/", (req, res) => {
    var today = new Date();
    var options = {
        weekday: "long", //default
        month: "long",
        day: "numeric",
    }
    var day = today.toLocaleDateString("en-IN", options);
    res.render("list", { findday: day, newListItams: items });
});
app.post("/", function (req, res) {
    var item = req.body.itam
    items.push(item) //can't use more than 1 EJS item declearing it to once
    res.redirect("/") //redirect to home page
});

app.listen(7600, function () {
    console.log("server listening on localhost:" + 7600)
});

