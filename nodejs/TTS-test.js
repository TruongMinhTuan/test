var say = require('say');

say.speak('Hello, how are you', 'Cellos', 0.5, (err) => {
    if (err) {
        return console.error(err);
    }

    console.log('Text has been spoken.');
});