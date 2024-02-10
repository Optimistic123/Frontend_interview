Polyfill for call, apply and bind
    1. we append the function on the context so that function can be called with context
    2. Make sure the callback should be able to get right context
    3. Make sure argument is right


Polyfill for Promise
    1. Promise.all  : 
        Takes an array of Promises as input and returns a single Promise, 
        This Promise resolves when all of the input Promises have resolved, or rejects if any of the input Promises reject.
    2. Promise.allSettled : 
        Take Promises in the array to settle (either resolve or reject), and then resolves with an array of objects representing the outcome of each Promise.