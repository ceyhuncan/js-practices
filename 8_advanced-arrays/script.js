/* ADVANCED ARRAYS */
const array = [1, 2, 10, 16, 20];

//FOREACH - ES6

//Ex:1
/* let myArray = [];
const newArray = array.forEach(
    (value, index) => {
        myArray[index] = array[index]; //or push
        console.log(value, index);
    });
    //typeOf(newArray) undifined
 */

//Ex:2
/* const double = []; //an empty array. we will fill it with push

const newArray = array.forEach((num) => { double.push(num * 2); });
console.log(double);
 */

/* MAP, FILTER, REDUCE (VERY IMPORTANT)  - No Side Effects, they are pure*/

//MAP 
//You always need to write return(for multiple statements) something otherwise you will get undifined for each element of array. 
//The difference from foreach, map returns as new array (stores the operation in another array, basically it transform the array and creates a new array(mapArray)) 
//Foreach doesnt return just executes what it has in function block, it opens to sideeffect,
//So prefer using map

//Re write Ex2 with map, gives the same result:
const mapArray = array.map((num) => { return num * 2; });

//Another thing is: if you have only one parameter and one return you can skip the paranthesis, return and curly braces(much nicer and cleaner compared to foreach):
const mapArray2 = array.map(num => num * 2);

//FILTER
//Similar syntax to map. it returns conditionaly and write to a new array

const filterArray = array.filter(num => num > 5); //writes only values greater than 5 into new array.

//REDUCE -Very Powerfull (You can do mapping and filtering with reduce)
//gets a parameneter acc(accumulator) also gets an value after function(default acc value)
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 0);



/* EXERCISES */
const arrayE = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

const userNames = [];
const newArray = arrayE.forEach(element => {
    userNames.push(`${element.username}!`);
});

//Create an array using map that has all the usernames with a "? to each of the usernames
const userNames2 = arrayE.map(element => `${element.username}?`);

//Filter the array to only include users who are on team: red
const userRed = arrayE.filter(element => element.team == 'red')

//Find out the total score of all users using reduce

const totalScore = arrayE.reduce((acc, element) => { return acc + element.score }, 0);

// (1), what is the value of i? --> array index
// (2), Make this map function pure: --> crerated a seperate Function, also no need alert and console

/* const arrayNum = [1, 2, 4, 5, 8, 9];
function print(num, i) {
    console.log(num, i);
    alert(num);
    return num * 2;
}
const newArray2 = arrayNum.map((num, i) => {
    print(num, i);
}); */

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const newList=arrayE.map((element)=>`${element.items}!`);




