/* CLOSURES */

/* const first=()=>{
    const greeting="Hi";
    const second = ()=>{
        const player='Boby';
        alert(greeting);
    }
    return second;
}

const newFunc=first();
newFunc(); */


//Children have access to the parent scope but parent dont have acces to children
//A function will be executed. It will never be execured again.
//But it is goind to remember that there are references to the child scope.
//So the child scope has acces to the parent scope. second function have acces to first function.
//first() dont have acces to player but second() have acces to greeting variable.

/* CURRYING */
//The process of converting a function 
//that takes multiple arguments into a function that takes the one at a time.
//function inside a function

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => (a * b);
console.log(curriedMultiply(3)(4)); //12

//Now you can do something useful like this:
const multuplyBy5 = curriedMultiply(5);
console.log(multuplyBy5(6)); //30

/* COMPOSE */
//Combining two function together where the output of one function is the input of the other. (serial)

const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;
compose(sum, sum)(5);//7

//Always consider -functional purity- to avaid - side effects- (this called determinizm and good practice to avaid bogs)


//EXERCISES
//#1 Create a one line function that adds adds two parameters
let addTwo = (x, y) => x + y;

//Closure: What does the last line return?
const addTo = x => y => x + y;
var addToTen = addTo(10);
addToTen(3);//13

//Currying: What does the last line return?
const sum1 = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
curriedSum(30)(1); //31

//Currying: What does the last line return?
const sum2 = (a, b) => a + b;
const curriedSum2 = (a) => (b) => a + b;
const add5 = curriedSum2(5);
add5(12); //17

//Composing: What does the last line return?
const compose1 = (f, g) => (a) => f(g(a));
const add_1 = (num) => num + 1;
const add_5 = (num) => num + 5;
compose(add_1, add_5)(10); //16

//What are the two elements of a pure function?
//1. DETERMINISTIC: Always produces the same results given the same inputs
//2. No Side Effects: It does not depend on any state, or data, change durring progam's execution. It must only depends on its input elements.
