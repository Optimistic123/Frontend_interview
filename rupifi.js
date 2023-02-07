// Import stylesheets

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

const log = (x) => console.log(x);

// Question Starts Here 👇

log('Start');

fetch('https://jsonplaceholder.typicode.com/todos/1').then(() => log('Fetch'));

setTimeout(() => log('Timer'), 0);

// Promise.resolve()
//   .then(() => log('Promise-1'))
//   .then(() => log('Promise-1.1'));

// Promise.resolve().then(() => log('Promise-2'));

log('End');


// start
// end
// Promise-1
// Promise-1.1
// Promise-2
// Fetch 
// Timer
// ----------------------------------------


// Import stylesheets
// import './style.css';

// // Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

// const expectedResult = [
//   'Parent',
//   'Child 1',
//   'Child 11',
//   'Child 111',
//   'Child 12',
//   'Child 2',
//   'Child 31',
//   'Child 32',
// ];

// const data = {
//   id: 'id1',
//   children: [
//     {
//       id: 'id2',
//       children: [
//         {
//           id: 'id3',
//           children: [
//             {
//               id: 'id4',
//               children: [],
//               text: 'Child 111',
//             },
//           ],
//           text: 'Child 11',
//         },
//         {
//           id: 'id5',
//           children: [],
//           text: 'Child 12',
//         },
//       ],
//       text: 'Child 1',
//     },
//     {
//       id: 'id6',
//       children: [],
//       text: 'Child 2',
//     },
//     {
//       id: 'id7',
//       children: [
//         {
//           id: 'id8',
//           text: 'Child 31',
//         },
//         {
//           id: 'id9',
//           children: [],
//           text: 'Child 32',
//         },
//       ],
//     },
//   ],
//   text: 'Parent',
// };

// ////

// function getHierText(data) {
//   let result = [];
//   // all key;
//   // let allKey = Object.keys(data);
//   // if (allKey.includes('text')) result.push(data['text']);
//   if (data['text']) {
//     result.push(data['text']);
//   }

//   // for (let key in data) {
//   //   if(Array.isArray(data[key]) && key === 'children') {
//   //     for (let i = 0; i < data[key].length; i++) {
//   //       let childResult = getHierText(data[key][i]);
//   //       result.push(...childResult);
//   //     }
//   //   }
//   // }

//   if (Array.isArray(data['children'])) {
//     for (let i = 0; i < data['children'].length; i++) {
//       let childResult = getHierText(data['children'][i]);
//       result.push(...childResult);
//     }
//   }
//   return result;
// }
// let answer = getHierText(data);

// function compareAnsAndInput(answer, expectedResult) {
//   // for (let i = 0; i < answer.length; i++) {
//   //   if(answer[i] !== expectedResult[i]) return false;
//   // }
//   // return true;

//   return answer.toString() === expectedResult.toString();
// }

// console.log(compareAnsAndInput(answer, expectedResult));
