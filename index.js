"use strict";



// FUNCTIA REDUCE!!!!!!!

// const arr = ['spray','limit','elite','exuberant','destruction','present'];

// reduce(arr, 'elite')

// function reduce(a, b, c) { 

//   if(typeof c == 'string') {  
//     stop(a, b, c)
//   } else if(typeof b == 'string') {
//     stop(a, b)
//   } else {
//     let obj = a.reduce((acc, current, index) => {
//       return {...acc, [index]: current};
//     },{});
//     console.log(obj);
//   }

// }


// function stop(array,b,c) {
//   if(typeof c == 'string') {
//     let d = array.indexOf(b)
//     let f = array.indexOf(c)
//     let arr2 = array.slice(d, f + 1);
//     let obj = arr2.reduce((acc, current, index) => {
//       return {...acc, [index]: current}
//     }, {})
//     console.log(obj)
//   } else {
//     let d = array.indexOf(b)
//     let arr2 = array.slice(0, d + 1);
//     let obj = arr2.reduce((acc, current, index) => {
//       return {...acc, [index]: current}
//     }, {})
//     console.log(obj)
//   }
// }





// FUNCTIA FIND    !!!!!!!!!!!!!

// const arr = [
//   { id: 0, name: 'spray' },
//   { id: 1, name: 'limit' },
// ];


// function finder (target) { 
//   let personValue = [];

//   if(typeof target == 'number') {
//     personValue = arr.find((item) => item.id === target)
//     console.log(personValue);
//   } else {
//     personValue = arr.find((item) => item.name === target)
//     console.log(personValue);
//   }
  
// }

// finder('limit')




// FUNCTIA CONCAT  !!!!!!!!

// const arr1 = ['spray', 'limit', 'elite'];
// const arr2 = ['exuberant', 'destruction'];
// const arr3 = ['present'];
// let arr4 = [1]

// function concat(...a) {
//   let arrConcat = [];

//   for(let i = 0; i < a.length; i++) {
//     arrConcat = arrConcat.concat(a[i])
//   }
//   console.log(arrConcat)
// }

// concat(arr3,arr2);






const arr1 = ['spray', 'limit', 'elite'];
const arr2 = ['exuberant', 'destruction'];
const arr3 = ['present'];



function concat(...a) {
  let arrConcat = [];
  for(let i = 0; i < a.length; i++) {
    arrConcat = arrConcat.concat(a[i])
  }
  return arrConcat
}
// Result: ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']


let index = 'index'
let label = 'label'

function reduce(array) {
  let newArray = {}
  for(let i = 0; i < array.length; i++) {
    if(i % 2 == 0 && i != 0 ) {
      newArray = {...{[index]: i, [label]: array[i]}}
    }
  }
  
  return newArray

}
// Result: [{ index: 2, label: 'limit' }, { index: 4, label: 'destruction' }]



function find(array) {
  if(array.label.length > 5) {
    console.log(array)
  }

}
// Result { index: 4, label: 'exuberant' }



// const pipe = find(reduce(concat(arr1,arr2,arr3)));