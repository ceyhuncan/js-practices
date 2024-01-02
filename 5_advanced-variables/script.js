const player="Boby";
let experience=100;
let levelUp=true;

console.log("first value", levelUp);
// if(experience>90){
//    let levelUp=false;
//     console.log("inside of if",levelUp );
// }
// console.log("outside of if",levelUp );

/* in a function */
function check(){
    if(experience>90){
        let levelUp=false;
         console.log("inside of if",levelUp );
     }
     console.log("outside of if",levelUp );
}
check();
console.log("outside of function",levelUp );