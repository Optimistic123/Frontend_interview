console.log("hello : ", name);
console.log("hello : ", firstName);
console.log("hello : ", secondName);

var name = "manish kumar";
let firstName = 'amish';
const secondName = 'kumar';

// // function nsme() {}
// let name = () => {};
// function abc() {
//   var a = 10;
// }
// console.log(a);

// sum(2, 2, 4)
//   .then((val) => console.log(val))
//   .catch((err) => console.log(err));

// function sum(...args) {
//   let argsArr = [...args];
//   let sum = 0;
//   for (let i = 0; i < argsArr.length; i++) {
//     sum += argsArr[i];
//   }
//   return new Promise((resolve, reject) => {
//     if (sum % 2 === 0) {
//       resolve(sum);
//     } else {
//       reject("this is odd value");
//     }
//   });
// }

// sum(2, 2, 3, 1,0,1)
//   .then((val) => console.log(val))
//   .catch((err) => console.log(err));

// let a = [10, 2, 3, 9, 9, 4, 8, 7, 10, 11];
// // console.log(a.secondMax())
// // => 9
// function getSecondMax(arr) {
//   let max = 0;
//   let secondMax = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   secondMax = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < max && arr[i] > secondMax) {
//       secondMax = arr[i];
//     }
//   }

//   return secondMax;
// }

// console.log(getSecondMax(a));

// Array.prototype.secondMax = function getSecondMax(arr) {
//   let max = 0;
//   let secondMax = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   secondMax = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < max && arr[i] > secondMax) {
//       secondMax = arr[i];
//     }
//   }

//   return secondMax;
// };

// console.log(a.secondMax(arr));

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Success1"), 3000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Success3"), 4000);
// });
// // myPromiseAll([p1, p2]).then(console.log).catch(console.log);

// function myPromiseAll(promises) {
//   let resolvedPromise = 0;
//   let responseArr = [];
//   return new Promise((resolve, reject) => {
//     promises.forEach((promise, ind) => {
//       promise.then((res) => {
//         resolvedPromise++;
//         responseArr[ind] = res;
//         if (resolvedPromise === promises.length) {
//           resolve(responseArr);
//         }
//       });
//       promise.catch((err) => reject(err));
//     });
//   });
// }

// myPromiseAll([p1, p2]).then(console.log).catch(console.log);
