{/* <input type="text">
<div>
    <b>Default : </b><span id="default"></span>
</div>
<div>
    <b>Debounce : </b> <span id="debounce"></span>
</div>
<div>
    <b>Throttle : </b>  <span id="throttle"></span>
</div>

let input = document.querySelector('input');
let defaultText = document.getElementById('default');
let debounceText = document.getElementById('debounce');
let throttleText = document.getElementById('throttle'); */} 

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
};


const updateDebounceText = debounce((text) => {
    debounceText.textContent = text;
})

const updateThrottleText = throttle((text) => {
    throttleText.textContent = text;
})

input.addEventListener("input", (e) => {
    defaultText.textContent = e.target.value;
    updateDebounceText(e.target.value);
    updateThrottleText(e.target.value);
})