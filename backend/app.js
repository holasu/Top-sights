const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var Client = require('node-rest-client').Client;
var client = new Client();


const app = express();
app.use(cors())


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());


app.post('/getlocations',(req,res)=>{

    const typeword=req.body.city;

    // direct way
    client.get("https://maps.googleapis.com/maps/api/place/textsearch/xml?query="+typeword+"post+offices&key=AIzaSyAa4X5wvSGbem4cOkxcUx-MXB8-QN3isYs", function (data, response) {
    res.json({msg:true,data:data})
    console.log(response)
});
 
})

app.listen(3001,()=>{
    console.log("listerning to 3001 port...***")
});