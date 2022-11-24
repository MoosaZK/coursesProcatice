//jshint esversion: 6
const express = require("express");
const bodyparser = require("body-parser");
const request = require("request");
const https = require("https");
const app = express();

// local port
const localPort = 3000;

//for heroku to set port accordingly to its server
const port = process.env.PORT;
 
//below statment specifies the static folder for css and imgs
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));


app.get("/", (req,res) => {
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", (req,res) => {
    const body = req.body;
    const firstname = body.fname;
    const lastname = body.lname;
    const email = body.email;

    const data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields:{
                FNAME: firstname,
                LNAME: lastname  
            }
        }]
    };
    const jsonData = JSON.stringify(data);

    const url = "https://us21.api.mailchimp.com/3.0/lists/84c505acfb"

    const options= {
        method : "POST",
        auth: "moosazk:64cf59ef64317451a9f6d30812293504-us21"
    } 
    const request = https.request(url, options, (response)=>{
        if(response.statusCode === 200)
            res.sendFile(__dirname + "/success.html")
        else{
            res.sendFile(__dirname + "/failure.html")
        }
        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
    })
    request.write(jsonData);
    request.end();

});

app.post("/failure", (req,res) => {
    res.redirect("/");
})
app.listen(port || localPort, () => {
    console.log("Server is running at port: "+ port);
})

//API key
// 64cf59ef64317451a9f6d30812293504-us21
// 64cf59ef64317451a9f6d30812293504-us21

//list ID
//84c505acfb