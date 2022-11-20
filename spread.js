/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 
The spread operator is to copy an array,  
copy an object, or copy just  part of an array or object.  
***   [...this] or {...this} === copy this here!
*/
// No spread operator
let arr1 = [1,2,3];
let arr2 = arr1;
arr2.push(4);
console.log('Second array:', arr2);
console.log('First array:', arr1);

//Second array: [ 1, 2, 3, 4 ]
//First array: [ 1, 2, 3, 4 ]

// Copying an array
let arr3 = [4, 5, 6];
let arr4 = [...arr3];
arr4.push(7);
console.log(arr3);
console.log(arr4);
//  [ 4, 5, 6 ]
//  [ 4, 5, 6, 7 ]


// Copying an object
let obj1 = {'a': 1, 'b': 2, 'c': 3};
let obj2 = {...obj1, 'd': 4};
let obj3 = {...obj1, 'b': 8};
console.log(obj1);
console.log(obj2);
console.log(obj3);

// { a: 1, b: 2, c: 3 }
// { a: 1, b: 2, c: 3, d: 4 }
// { a: 1, b: 8, c: 3 }

// Copying only part of an array/object
let arr5 = [...arr1, {...obj1}, ...arr3, 'x', 'y', 'z'];
console.log(arr5);

// [ 1, 2, 3, 4, { a: 1, b: 2, c: 3 }, 4, 5, 6, 'x', 'y', 'z' ]