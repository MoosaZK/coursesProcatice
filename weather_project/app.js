const express = require("express");
const http = require("https"); 
const app = express();

const port = 3000;

app.get("/", (req,res)=>{

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Karachi&units=metric&appid=c6b27262e3c19fdabf70c48b9cf3f465";
    http.get(url,(resp) => {
        console.log(resp.statusCode);

        resp.on("data", (data) =>{
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            console.log("description: "+ description);
            res.write("<h1> Degree in Karachi:  </h>" + temp +"");
            res.write("\nDescription: " + description);
            res.send();

        })

    })

})


app.listen(port, () =>{
    console.log("server is runing on "+ port);
})