const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){

    let city_id = 862995;
    let key = "fed28687edb4a0383fc2f47bfd259bd9";
    let url = `https://api.openweathermap.org/data/2.5/weather?id=${city_id}&appid=${key}`;
  
    request(url, function(error, response, body){
        
        console.log(response);
        let data = JSON.parse(response.body);
        
        console.log(data.main.temp);

        let kelvintemp = data.main.temp;
        let celsiustemp = parse(kelvintemp-273);

        console.log(celsiustemp);
        
    });
});




app.listen(3000, function(){
    console.log("Server is running on port 3000");
});