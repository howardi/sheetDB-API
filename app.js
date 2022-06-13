const express = require('express');
const bodyParser = require('body-parser');
const sheetdb = require('sheetdb-node');
const client = sheetdb({ address: 'weeysdqz9r61l' });

const app = express();
const Port = 3004;
// middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.post("/", (req, res)=>{
    const fName = req.body.fName;
    const lName = req.body.lName;
    const email = req.body.email;
    // Adds single row
client.create({ First_Name: fName, Last_Name: lName, Email: email }).then(function(data) {
    res.sendFile(`${__dirname}/success.html`);  
  }, function(err){
    res.sendFile(`${__dirname}/failure.html`);  
  });
})

app.get('/', (req, res)=>{
  res.sendFile(`${__dirname}/index.html`);    
})
app.listen(Port, function(){
    console.log(`server running on port ${Port}`)
}) 

//https://sheetdb.io/api/v1/weeysdqz9r61l 