function errorFunction () {
    throw "some error";
}

function inner1ExceptionHandling () {
    try {
        errorFunction ()
    } catch (e) {
        console.log(e)
    } finally {
        console.log('do your final stuff in inner1function')
    }
}

function outerExceptionError () {
    try {
        inner1ExceptionHandling()
    } catch (e) {
        console.log(e)
    } finally {
        console.log('do your final stuff')
    }
}
/* outerExceptionError() */


// string is mutible
// let word = 'hello';
// word[1] = 'm';
// console.log(word)

// const names = ['h','hello'];
// names[1][1] = m;
// console.log(names);

// Promise.resolve('2')
// .then(res =>  errorFunction())
// .catch(err => console.log)
// .then(() => console.log('2'))