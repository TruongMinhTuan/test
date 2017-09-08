
const say = require('say')
const prompt = require('prompt')
var yargs = require('yargs');

var argv = yargs.argv;

if (typeof argv.i == "undefined"){
   console.log('try -i ');
}
else{
    console.log(argv.i);
    say.speak(argv.i, 'Kathy', 0.75, (err) => {
        if (err) {
            return console.error(err);
        }
    
        console.log('Text has been spoken.');
    });
      prompt.start()

}


