/* SCOPE */
// Default scope is our Windows object. (root scope)

// Root Scope (window)
var fun=5;

function funFunction(){
    //child scope
    var fun = "helooo";  //naming conflict. Redeclared in own scope
    console.log(1, fun);
}

function funerFunction(){
    //Child scope
    var fun="Byeee";    //naming conflict. Redeclared in own scope
    console.log(2, fun);
}

/* function funestFunction(){
    //Child scope
    fun="AHAAAA!";          //Not redeclaring. reassigned only. Decleration is don in parent scope.
    console.log(3, fun);
} */

console.log("window", fun);
funFunction();
funerFunction();
//funestFunction();


//Exercises
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}//a=3

//#2
var a = 0;
function q2() {
    a = 5;
} //a=5, reassigned
function q22() {
    alert(a);
}//a=0

//#3
function q3() {
    window.a = "hello";
}

function q32() {
    alert(a);
} //a="Hello"

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}//a still 1 but inside function a="test"

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);
// if still in parent scope.if statement doesnt create a new scope. a =2 changed to 5