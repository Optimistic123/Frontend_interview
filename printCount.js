// using setInterval
let printCountsetInterval = (count) => {
    let intervalId = setInterval(() => {
        console.log(count);
        count--;
        if(count == 0) {
            clearInterval(intervalId);
        }
    },1000);
};
// printCountsetInterval(10);


// using setTimeout
let printCountSetTimeout = (count) => {
    let timeoutId = setTimeout(function printCount() {
        console.log(count);
        count--;
        if(count > 0) {
            setTimeout(printCount,1000);
            clearTimeout(timeoutId);
        };
    },1000);
}

printCountSetTimeout(10);