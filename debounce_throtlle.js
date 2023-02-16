// ! Debounce
// debounce function take a function as args and return a function which is 
// called after a certain dealy if there is no more action within that delay

let debounce = (fn, delay) => {
    let timer;

    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(args);
        }, delay)
    }
}

const printNum = (num) => {
    console.log(`NUM : ${num}`)
};

let numtoPrint = debounce(printNum,1000);
numtoPrint(20);                                      // ! called initaily
setTimeout(() => numtoPrint(1001),1001);             // ! called after delay end initaily
setTimeout(() => numtoPrint(950),950);               // ! called before delay end initaily
setTimeout(() => numtoPrint(800),800);               // ! called before delay end initaily
// setTimeout(() => numtoPrint(1008),1008);
// setTimeout(() => numtoPrint(2000),2000);


// !Throttle

// ? take care of lastrun(delay - last time function kab run hua tha) 
// ? lastFun ( last executable function: gen the func callmade after the delay end)

function throttle(functionToExec, delay = 1000) {

    let lastRun; 
    let lastFunc;

    return (...args) => {
        // check last run
        if(!lastRun) {
            functionToExec(...args);
            lastRun = Date.now();
        } else {
            clearTimeout(lastFunc);

            lastFunc = setTimeout(() => {
                if(Date.now() - delay >= 0){
                    functionToExec(...args);
                    lastRun = Date.now();
                }
            }, delay - (Date.now() - lastRun))
        }
    }
}