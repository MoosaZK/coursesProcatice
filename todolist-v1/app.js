const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
 
app.set('view engine', 'ejs');
var items = [];
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", (req,res) =>{
    
    var today = new Date();
    var day = "";
    
    var options = {
        day : "2-digit",
        weekday : "long",
        month :  "short"
    }
    if(today.getDay() === 6 || today.getDay() === 0){
        day = "Weekend";
        //the file should be inside the "view" folder
        // res.render("list", {typeOfDay: day});
    }
    else{
        day = "Weekday";
        // res.render("list", {typeOfDay: day});
    }
    var vday = today.toLocaleDateString("en-US",options);
    res.render("list", {anotherDate: vday,typeOfDay: day, newListItems: items});

});

app.post("/", (req,res) => {
    var item = req.body.newItem;
    // res.send(item);
    items.push(item);
    //this redirect will trigger the above app.get function
    res.redirect("/");
})


app.listen(port, () => {
    console.log("Server runing at port " + port);
});
