const first = {
  name: "John",
  itmeList: ["1", "2", "3"],
  nestedObj: {
    n1: "n1 value"
  }
};

const second = {
  name: "John",
  itmeList: ["1", "2", "3"],
};

const third = first;

third.nestedObj.n1 = "name chnaged"
// console.log(first === second);
// console.log(first === third);
// console.log(first, third);

// 2
// for (var i = 0; i < 4; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }

// 3
for (var i = 0; i < 4; i++) {
  let printSequently = (i) => {
    setTimeout(() => {
      console.log(i);
    }, 0);
  };
  printSequently(i);  // it is an example of binding a varilabe with a function
}

// 3 : discuss the banner artitechture

// Ans:  configuration file : 
// [
//     {   
//         "enable": true/false, 
//         "order": 0/1/2/3(maintain hierarchy), 
//         "icon": "",
//         "title": "",
//         "onCancelClick" : () => {}
//     }, 
//     {   
//         "enable": true/false, 
//         "order": 0/1/2/3(maintain hierarchy), 
//         "icon": "",
//         "title": "",
//         "onCancelClick" : () => {}
//     },
//     {   
//         "enable": true/false, 
//         "order": 0/1/2/3(maintain hierarchy), 
//         "icon": "",
//         "title": "",
//         "onCancelClick" : () => {}
//     },
// ]
