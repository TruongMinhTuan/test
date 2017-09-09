var express = require('express');
var app = express();

app.use(express.static('public'));

//app.get('/index.htm', function (req, res) {
//   res.sendFile( __dirname + "/" + "index.htm" );
//})

app.get('/say', function (req, res) {

   // Chuan bi output trong dinh dang JSON
   response = {
       mess:req.query.mess,
       first_name:req.query.first_name,
       last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
var url = window.location.host;

var server = app.listen(8000,url, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Ung dung Node.js dang lang nghe tai dia chi: http://%s:%s", host, port)

})