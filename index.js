const express = require("express");
const app = express();
const path = require("path");
//this path is our package.

const port = 8080;

// Our code is in a situation where this code will work only if we run our server by staying inside the .js directory.
//otherwise our views will not be able to render.
app.set("view engine", "ejs");
//If we want to change this so that this doesn't happen, 
//we can define a way that our views folders are always found inside of EJS.
app.set("views",path.join(__dirname,"/views"));
//path.join is a function

app.get("/",(req,res) => {
    res.render("home.ejs");
    
});

// Instagram EJS
app.get("/ig/:username", (req , res ) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    // console.log(data);
    // To check data 
    if(data){
        res.render("instagram.ejs",{ data });
    }else{
        // for else we can create one file named as errors
        res.render("error.ejs");
    }
    
    // const followers = ["adam" , "shiva","steve","Shyama"]; 
    // let { username} = req.params;
    // res.render("instagram.ejs",{ username, followers });
});

app.get('/Hello',(req,res) => {
    res.send("hello");
});

// Parsing data to EJS 
app.get('/rolldice',(req,res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1 ;
    // res.render("rolldice.ejs",{ num : diceVal });
    //  or
    res.render("rolldice.ejs",{ diceVal });
});


app.listen(port,() => {
    console.log(`listening on port ${port}`);
});