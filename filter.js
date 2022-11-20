/**    filter()
 
let nums = [1,2,3,4,5,6,7,8,9,10];
const evens = nums.filter(n => n % 2 === 0);
console.log(evens);   // [ 2, 4, 6, 8, 10 ]

let names = ['mike', 'jill', 'matt', 'jenny', 'Mira', 'Max'];
let myNames = names.filter(name => name.charAt(0) === 'm'||name.charAt(0) === 'M');
console.log(myNames); //  [ 'mike', 'matt', 'Mira', 'Max' ]


 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

const oldEnough = people.filter(person => person.age >= 21); 
console.log(oldEnough);   // [ { name: 'Michael', age: 23 } ]

const paul18 = people.filter(person => person.age == 18); 
console.log(paul18);   //  [ { name: 'Paul', age: 18 } ]

const paul = people.filter(p => p.name === 'Paul')[0]; 
console.log(paul);   //  [ { name: 'Paul', age: 18 } ]
*/
// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];
/*
const candidates = students.filter(student => {
  let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
  return strongSkills.length > 0;
});
console.log(candidates);
//>
gitpod /workspace/arrow-functions (main) $ node filter.js
[
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [ [Object], [Object], [Object] ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [ [Object], [Object], [Object] ]
  }
]
gitpod /workspace/arrow-functions (main) $ */

const has5yrExp = skill => skill.yrsExperience >= 5;
const hasStrongSkills = student => student.skills.filter(has5yrExp).length > 0
const candidates = students.filter(hasStrongSkills);
console.log(candidates);
const names = candidates.map(candidate => candidate.name);
console.log(names);


//>
/*
gitpod /workspace/arrow-functions (main) $ node filter.js
[
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [ [Object], [Object], [Object] ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [ [Object], [Object], [Object] ]
  }
]
[ 'Mark', 'Jason' ]
gitpod /workspace/arrow-functions (main) $ 
*/
