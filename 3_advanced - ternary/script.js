/*TERNARY OPERATOR*/
// condition ? (true)expression1 : (false)expression2

function isUserValid(bool){
    return bool;
} 

let answer = isUserValid(true) ? "You may enter" : "Access Denied";

//Same as:
let answer2 = function (){
    if(isUserValid(true))
        {
            return "You may enter";
        }
    else{
        return "Access Denied";
    }

}

console.log("Answer is: ", answer);
console.log("Answer2 is:  ", answer2());