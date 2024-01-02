// includes
('Helooo'.includes('o')); // returns true
// includes in arrays
const animals=['horse', 'cat', 'dog', 'goose', 'snake'];
animals.includes('cat'); // returns true
//exponantial operator ** (same as math.pow)
const squareOfX= (x)=>x**2;

//String Padding: Ading space to strings
'Turtle'.padEnd(10);
'Turtle'.padStart(10);

//Trailing comas in functions
//you can leave coma at the end of last parameter

//OBJECT value entries keys // Similar to array functions.
//With this way you behave obj like array and can use foreach, map and other functions
let obj={
    username0:"Santa",
    username1:"Robby",
    username2:"Grinch",
}
Object.keys(obj).forEach((key, index)=>{
    console.log(key, obj[key]);
})

Object.values(obj).forEach((value)=>{
    console.log(value);
})

Object.entries(obj).forEach(value=>{
    console.log(value);}
)

Object.entries(obj).map(value=>{
    return value[1] + value[0].replace('username', '');
})

//Flat - Flattens the nested arrays.

const array=[1, 2, [3, [4, 5]]];
array.flat(1);

// Flat can also clean up the data
const entries = [1, ,4,5, , , , 6, ];
entries.flat();

//flatMap??
const animals2=animals.flat(entries=>entries+ 'dog');

//trimming the gaps in a string
const userEmail1='     john@gmail.com';
const userEmail2='holahola@hotmail.com     ';
userEmail1.trimStart();
userEmail2.trimEnd();

//From entries - Transfer into an object
const userProfiles=[['player', 34], ['cleaner', 24],['plumber', 33]];
Object.fromEntries(userProfiles);



//Async and Await 

