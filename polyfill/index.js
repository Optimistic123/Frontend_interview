// TODO: Polyfill
/**
 * split
 * call, bind, apply
 */


function greet() {
    console.log(`Hello !!! ${this.name}`)
}

// let user = {
//     name : "Manish"
// }

let userArr = [{name: "Manish"} , {name: "Shanu"}]

// greet.call(user);


// make custom call
Function.prototype.customCall = function(context, args) {
    console.log("customcall:", this, context, args);
    
    // append the function to the object context
    context["greet"] = this;   //this refers to the function object on which the customCall method is being called. 
 
    console.log("result:", context);   // This allows us to later invoke the function within the context object's context.

    let result = context["greet"](args);
    delete context["greet"];    // we had modified context: given data => so delete the modficiation
    return result;
}

// greet.customCall(user);
// console.log("user:", user)


Function.prototype.customBind = function(context) {
    console.log("BIND:", this, context);

    const originalFunction = this;

    context["newgreet"] = originalFunction;

    console.log("BIND:", this, context);
    return  (...args) => {
        console.log("ARGS:", args);
        context["newgreet"](...args);
    }
}

function greet() {
    console.log(`Hello !!! ${this.name}`)
}
let user = {
    name : "Manish"
}
let bindedFun = greet.customBind(user);
bindedFun("MAMIHS", "SHAJ");

// Function.prototype.customBind = function(context) {

//     context["newgreet"] = this;
//     return function(...args) {
//         console.log("ARGS:", args)
//         context["newgreet"](...args);
//     }
 
// };

// function greet() {
//     console.log(`Hello !!! ${this.name}`)
// }

// let user = { name: "John" }; // Define the user object with a name property

// let bindedFun = greet.customBind(user);
// bindedFun("manish", "sdsf"); // Output: Hello !!! John

// ? in above customBind function have two definition one with arrow function and one with normal function [which works well and why?]

// TODO : Promise.allSettled
function cutomPromiseAllSettled (promises) {
    return new Promise((resolve, reject) => {
        const resultPromise = [];
        let settledPromiseCount = 0;
        promises.forEach((promise, index) => {
            promise.then((result) => {
                resultPromise[index] = res;
            }).catch((err) => {
                resultPromise[index] = res;
            }).finally(() => {
                settledPromiseCount++;
                if(settledPromiseCount == promises.length) {
                    resolve(resultPromise);
                }
            })
        });
        
    });
}