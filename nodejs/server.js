// Bước 1: Import module http
var http = require('http');
const say = require('say')
const prompt = require('prompt')
// Bước 2: Khởi tạo server

var server = http.createServer(function(request, response){
   // Biến request: là biến lưu trữ thông tin gửi lên của client
   // Biến response: là biến lưu trữ các thông tin trả về cho client
    
   // Thiết lập Header
   response.writeHead(200, {
       "Context-type" : "text/plain"
   });
    // Show thông tin
 
   // Kết thúc
   response.end();

});
     
prompt.start();
startSpeak();

function startSpeak() {
    prompt.get(['message'], (error, result)=> {
        say.speak(result.message, '', 5.0, ()=> {
            if(result.message == 'exit') process.exit()
            startSpeak()
        })
    })
}
// Bước 3: Lắng nghe cổng 3000 thì thực hiện chương trình
server.listen(3000, function(){
   console.log('Connected Successfull!');
});

