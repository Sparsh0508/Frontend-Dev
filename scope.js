//globle scope
var a = 10;
function test() {
    //function scope
    var b = 20;
    console.log(a); //10
    console.log(b); //20
}

test();
console.log(a); //10
//console.log(b); //Error: b is not defined


//function scope
function demo() {
    var c = 30;
    console.log(c); //30
}

demo();
//console.log(c); //Error: c is not defined


//block scope
if (true) {
    let d = 40;
    console.log(d); //40
}

//console.log(d); //Error: d is not defined


//Lexical scope
function outer() {
    let e = 50;
    function inner() {
        console.log(e); //50
    }
    inner();
}

outer();
//console.log(e); //Error: e is not defined