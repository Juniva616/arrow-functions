// Destructuring arrays
let ages = [30,26,27];
//let mary = ages[0];
//let john = ages[1];
//let pete = ages[2];
let [mary, john, pete] = ages;

console.log(mary, john, pete);
//> 30 26 27

// Destructuring objects
let jobs = {
    mike: 'dev',
    jill: 'design',
    paul: 'acc',
};
let {mike, jill, paul} = jobs;
console.log(mike, jill, paul);
//> dev design acc

// Destructuring subsets

let lang = ['eng', 'ger', 'ukr', 'jap','fren'];
let [JohnNative, JohnSecond] = lang;
console.log(JohnNative, JohnSecond);
//> eng ger

let [, , maryNative, marySecond] = lang;
console.log(maryNative, marySecond);
//> ukr jap - to skip two first parameters, put two commas

let languages = {
    first: 'english',
    second: 'ukrainian',
    tretiy: 'polish',
    chvert: 'japanese',
};
let {first, tretiy} = languages;
console.log(first, tretiy);
//> english polish

// Using rest parameter syntax
let fruits = ['apple', 'banana', 'peach', 'pear', 'mango'];
let [mine,your, ...other] = fruits;
console.log(mine,your);
console.log(...other);
//> apple banana
//> peach pear mango

let language = {
    raz: 'english',
    dva: 'ukrainian',
    tri: 'polish',
    chtiri: 'japanese',
};
let {raz, dva, ...vest} = language;
console.log(raz, dva);
console.log(vest);
//> english ukrainian
//> { tri: 'polish', chtiri: 'japanese' }



