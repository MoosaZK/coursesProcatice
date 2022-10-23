const express = require("express");
const http = require("https"); 
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}))
const port = 3000;

app.get("/", (req,res)=>{

    res.sendFile(__dirname + "/index.html")

})

app.post("/", (req,res) => {
    const city = req.body.cityName;
    const apiKey = "c6b27262e3c19fdabf70c48b9cf3f465"
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=" + apiKey;
    
    http.get(url,(resp) => {
        console.log(resp.statusCode);

        resp.on("data", (data) =>{
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imgUrl= "http://openweathermap.org/img/wn/" + icon + "@2x.png" 

            console.log("description: "+ description);
            res.write("<h1> Degree in "+ city +":  " + temp +" </h1>");
            res.write("<br> Description: " + description);
            res.write("<img src=" + imgUrl +">")
            res.send();

        })

     })

})


app.listen(port, () =>{
    console.log("server is runing on "+ port);
})