new Promise(resolve => {
    for(let i =0; i< 100000; i++){
        resolve("I am a promise which resolve in for loop");
    }
}).then(res => console.log(res))

new Promise(resolve => {
    setTimeout(() => {
        resolve("I am a promise resolved in setTimeout");
    },0)
}).then((res) => console.log(res))