
var users = {
  username:undefined,
  password:undefined
}


const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const hostname = 'localhost';
const port = '3000';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//  use Express Router to handle routes of app.  So when users request the app
//  from the web browser, we will serve the HTML file

app.get('/', function(req, res){
  res.sendfile('index.html');
});

//  When the user clicks the login button on the HTML page we will POST request
//  to server and get the response

app.post('/login', function(req, res){
  var user_name = req.body.user;
  var password = req.body.password;
  console.log('Username = ' +user_name+', password is '+password);
  res.end('done');
});

app.listen(port, hostname, function(){
  console.log(`Express Login Demo Server running at http://${hostname}:${port}/`);
});
