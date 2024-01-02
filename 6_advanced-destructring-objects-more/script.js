/* DESTRUCTRING ???*/

/* const obj={
    player:'boby',
    wizardLevel:100,
    isLevelUp:true
}

//instead of this:
const player = obj.player;
const wizardLevel=obj.wizardLevel;
let isLevelUp=obj.isLevelUp;

// we can destructure like this (object property order is important)

//??????
const {player2, wizardLevel2}=obj;
let {isLevelUp2}=obj;

 */

/* DYNAMIC OBJECT */
/* 
const player = "John Snow";

obj2 ={
    [player]:"hello",
    [3+1]: "total"
}
console.log(obj2); */

/* Object Properties */
//No need to use = sign to asign field variables to object properties if they have same name.
/* 
const a="Simon";
const b=true;
const c={};

const obj={
    a,
    b,
    c
} */

/* TEMPLATE STRINGS */
//instead of doing this way:
const personName='Sally';
const age=35;
const pet = "cat";
//const greeting = "Hello "+ personName+" how is your " + pet+ "?";

//user template strings with backticks `` (above the tab key in mac)

//const greetingBest = `Hello ${personName} you seem to be ${age-10} old. What a lovely ${pet}`;

/* DEFAULT ARGUMENTS */
//you can asign scope variables, it will work even you commented the variables above
function greeting(personName= '', age=34, pet='cat'){
    return greetingBest = `Hello ${personName} you seem to be ${age-10} old. What a lovely ${pet}`;

}

//console.log(age);//this is parent variable. not same as inside function(scope variable)

/* VARIABLES CONT. SYMBOLS */
//Not much used. It is used to crate a unique variables as object properties.
let sym1=Symbol();
let sym2=Symbol('abc');
let sym3=Symbol('abc');
console.log((sym2===sym3)); 
// returns false

/* ARROW FUNCTIONS */

//Traditional way:

function sum(x,y){
    return x+y;
};

//Re write as arrow function:
const sum2=(x,y)=>x+y;

