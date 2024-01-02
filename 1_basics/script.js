/* FUNCTIONS */
// When you call a function with () calls the funciton, without brackets returns function itself 

//Function creations - method 1 - Declaring a function:
function sayHello(){
    console.log("Hello");
}
// sayHello(); Calling a function

//Funciton creations - method 2 - Function Expression
//Assigning to a variable, function doesnt have a name (Anonymous Funciton)

let sayBye=function(){
    console.log("Bye");
}
//or you can give a name like this:
let sayBye2=function functionName(){
    console.log("Bye");
}

//Passing a value via argument to function
function sing(song){
    console.log(song);
}

function multiply(a,b){
    console.log(a*b);
}

//Calling (invoking) a function
sayBye();
sayBye; //without parentheses it will return function itself
sing("Hollale");

//Function vs method
function thisIsAFunction(){}

const obj={
    thisIsAMethod:function(){}
}

//Accesing them is different
thisIsAFunction();
obj.thisIsAMethod();

/* DATA STRUCTURES - help us organize and store values better */

/* 1. ARRAYS */
const mixedList=['Tiger', 'Cat', 'Dog', 4, false];
//console.log(mixedList);

//Array of functions:
const functionList=[function apple(){console.log('Apple');}, function pear(){console.log('Pear');} ];
//functionList[0]();

//Nested Arrays:

const nestedArray=[['coffee', 'tea','water'],['cookies', 'donat', 'biscutis']];
//console.log(nestedArray[0][1]);

//shift - shifted to left
mixedList.shift();

//pop - the last item popped out
mixedList.pop();

//push - added to end another value.
mixedList.push('elephant');

//concat - concanitate - need to asing to a new variable to keep new concanitated array.
//console.log(mixedList.concat(['deer', 'bee']));

//Sorting
mixedList.sort();

//Array exercise:
const myArray=['Bananas', 'Apples', 'Oranges', 'Blueberries'];
myArray.shift();
myArray.sort();
myArray.push('Kiwi');
myArray.shift();
myArray.reverse();

// console.log(myArray);

const myArray2=['Banana', ['Apples', ['Oranges'],'Blueberries']];

// console.log(myArray2[1][1][0]);

/* 2. OBJECTS - collection of data. property: value*/

const user={
    name:'John',
    age:34,
    isMarried:true
}

//adding another property
user.favoriteFood="Pasta";

//you can add an array in object:object of array
user.spells=['abrakadabra', 'hokus pokus'];

//you can also do opposte. array of objects

/* LOOPS */
// 1. FOR LOOP
const todos=[
    'clean room','brush teeth', 'make your breakfast','study javascript'
];

for(let i=0; i<todos.length;i++){
    console.log(todos[i]+' '+i);
}
console.log(todos.length);


// 2. FOR EACH LOOP - New in EcmaScript 5

todos.forEach(function(value, index){console.log(value, index)});
//You can any name for callBack function, value and index. It does exaclty same as above for loop


//Or you can write the function seperately, same result, and you can use this function for other arrays, now reusable:
function logTodos(value, index){
    console.log(value, index);
}
todos.forEach(logTodos);




// 3. WHILE LOOP
let counterOne=0;
while(counterOne<10){
    console.log(counterOne);
    counterOne ++;
}

let reversedCounter=10;
while(reversedCounter>0){
    console.log(reversedCounter);
    reversedCounter--;
}

// 4. DO WHILE LOOP

let counterTwo = 10;
do{
    console.log(counterTwo);
    counterTwo--;
}while(counterTwo>0);