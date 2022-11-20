// Using a for loop

let nums = [1,2,3,4,5];
let results = [];
for (let num of nums) {
    results.push(num * 2);
}
console.log(results);

// Using map()

const multByTwo = function(num) {
    return num * 2;
}
const mapResults = nums.map(multByTwo);
console.log(mapResults);

const newNum = nums.map(num => num * 2);
console.log(newNum);

*/
// With objects:
const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
  ];
  //const StudentsWithIds = students.map(student => [student.name, student.id]);
 // console.log(StudentsWithIds); // [ [ 'Mark', 1 ], [ 'Ariel', 2 ], [ 'Jason', 3 ] ]
 
 //  var result = students.map(student => ({ id: student.id, name: student.name }));
 /*>  
  [
    { id: 1, name: 'Mark' },
    { id: 2, name: 'Ariel' },
    { id: 3, name: 'Jason' }
  ]
  let obj2 = {...obj1, 'd': 4};
  */
 let ages = [32, 26, 28];
  const result = students.map(student => ({...student, 'age': ages }));
  console.log(result);

 
 /* const studentObjects = students.map(student => Object.entries(student));
  //works, shows arrays of arrays with key, value. 
  */