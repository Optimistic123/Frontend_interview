const promiseAll = (promises) => {
    let outputs = [];
    let totalPromise = 0;

    return new Promise((resolve, reject) => {
        promises.forEach((promise, i) => {
            promise.then((res) => {
                outputs[i] = res;
                totalPromise++;
    
                if(totalPromise === promises.length) {
                    resolve(outputs);
                }
            })
            .catch(reject);
        })
    }) 
}

let slowPromise = new Promise((res, rej) => {
    setTimeout(() => res('slow one'), 4000);
})
let promises = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.reject('resolve'),
    slowPromise
]

promiseAll(promises).then(console.log);