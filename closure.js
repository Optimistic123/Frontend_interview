// Closures capture the lexical scope in which they are created
// closure : binding a variable with the function which in not in their scope
// : > prevent reinitilaziation of that variable : preserving the state between call
// : > hence we can preserv the value of variable between render/multiple call of a function

// ? example : [debounce, throttle, memoization, currying ...]


// ! NOTE: write in this way
  /**
   * 1.'callbacks can access `this`
   * 2. uses arguments of latest invocation
   */
    
// TODO [Debounce]

const debounce = (callback, delay) => {
  let timerId; // here we have to track the latest function call made between an interval : stop the prev call and initialize the recent call

  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
};

// TODO [Throttle]

const throttle = (callback, delay) => {
  let lastRun; // here we have to track the last time when function was called : [so to stop the call of the same function within some time interval]
  let timerId;

  return (...args) => {
    if (!lastRun) {
      // callback.call(this, ...args);   // call tahe args as elem not list so destructure
      callback.apply(this, args);     // apply take args as list so no destructure
      lastRun = Date.now();
    } else {
      timerId = setTimeout(() => {
        if (Date.now() - lastRun > delay) {
          clearTimeout(timerId);
          // callback.call(this, ...args);
          callback.apply(this, args);
          lastRun = Date.now();
        }
      }, delay - (Date.now() - lastRun));
    }
  };
};


// TODO [currying]

const currying = (args) => {
    // where a function is transformed to take multiple arguments one at a time
    // return a function : so that we can take mutliplt args when making multiple function call and in last we can return the result when func is invoked
    let totalArgs = [...args]  // initialize args list [this will be attached with returned function and will collect all the args given];
    let result = 0;  // taking example of sum 
    const helper = (...args2) => {
        // where to stop and return the result
        if(args2.length == 0) {
           return result; 
        } else {
            totalArgs.psuh(...args2);
            // perform any opertaion 
            return helper
        }
    }
    return helper;
}

// TODO [memoization]  : we wrap our main function inisde a function and return the main function 

const memoization = (fn) => {
    let argsMap = {}; //store the args and value corresponding to that
    // function for oor requirement 

    return (...args) => {
        let cacheArgs = JSON.stringify(args);
        if (!argsMap[cacheArgs]) {
            argsMap[cacheArgs] = fn(...args);
        } 
        return argsMap[cacheArgs];
    }
}
