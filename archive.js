let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: { maths: 'Harry', english: 'Joan', cad: 'Paul' },
        results: { maths: 90, english: 75, cad: 87 },
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths', 'english', 'art'],
        teacher: { science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon' },
        results: { science: 93, maths: 95, english: 80, art: 95 },
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: { science: 'Iris', maths: 'Harry', art: 'Simon' },
        results: { science: 63, maths: 79, art: 95 },
    }
];

const averagePoints = (arr, subject) => {
    let total = 0;
    let counter = 0;
    for (let i in students) {
        if (students[i].subjects.includes(subject)) {
            total = total + students[i].results[subject];
            counter++;
        }
        else {
            console.log();
        }
    }
    return total / counter;
}

let averageMarks = averagePoints(students, 'english');
console.log(averageMarks);
console.log('is AverageMarks for this subject.');

console.log('Below there are some code for array and object iteration. ');

const returnMultiLines = () => (
    `<p>
    Array values are accessed by their index in the array in square brackets.
Object values are accessed by their property (key) names using dot notation.
    </p>`
)

console.log(returnMultiLines());
for (let key in students) {
    console.log(students[key]); 
    let pairs = Object.entries(students[key]);
       console.log('---------');

    for (let pair of pairs){
        if (pair[0] === 'results') {
      console.log(pair[1], 'is a', pair[0]);
      for (let i in pair[1]){
        console.log(pair[1][i]);
    }
}
    }
}
/* The result is:
gitpod /workspace/arrow-functions (main) $ node run.js

77.5
is AverageMarks for this subject.
Below there are some code for array and object iteration. 
<p>
    Array values are accessed by their index in the array in square brackets.
Object values are accessed by their property (key) names using dot notation.
    </p>
{
  name: 'John',
  subjects: [ 'maths', 'english', 'cad' ],
  teacher: { maths: 'Harry', english: 'Joan', cad: 'Paul' },
  results: { maths: 90, english: 75, cad: 87 }
}
---------
{ maths: 90, english: 75, cad: 87 } is a results
90
75
87
{
  name: 'Emily',
  subjects: [ 'science', 'maths', 'english', 'art' ],
  teacher: { science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon' },
  results: { science: 93, maths: 95, english: 80, art: 95 }
}
---------
{ science: 93, maths: 95, english: 80, art: 95 } is a results
93
95
80
95
{
  name: 'Adam',
  subjects: [ 'science', 'maths', 'art' ],
  teacher: { science: 'Iris', maths: 'Harry', art: 'Simon' },
  results: { science: 63, maths: 79, art: 95 }
}
---------
{ science: 63, maths: 79, art: 95 } is a results
63
79
95
gitpod /workspace/arrow-functions (main) $ 
*/