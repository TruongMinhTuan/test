var express = require('express');
var app = express();
var port = 3701;
const say = require('say')

//Template
app.set('views', __dirname + '/template');
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);
app.get("/", function(req, res){
    res.render("index");
});

//Socket
app.use(express.static(__dirname + '/public'));
var io = require('socket.io').listen(app.listen(port));
io.sockets.on('connection', function (socket) {
    socket.emit('message', { message: 'welcome to the chat' });
    socket.on('send', function (data) {
        io.sockets.emit('message', data);
        console.log('Name: '+data.username +' message: '+data.message);
        const say = require('say');              
        say.speak(data.message);
    });
});