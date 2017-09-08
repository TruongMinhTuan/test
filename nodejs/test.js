const say = require('say')
const prompt = require('prompt')

//say.speak('Hello World')

prompt.start()

startSpeak()

function startSpeak() {
    prompt.get(['message'], (error, result)=> {
        say.speak(result.message, '', 5.0, ()=> {
            if(result.message == 'Goodbye') process.exit()
            startSpeak()
        })
    })
}