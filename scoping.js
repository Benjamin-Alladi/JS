// scope: 1.funcion-scope   2.block-scope    3.global-scope

// let and const are hoisted in different memory.
// let and const have block-scope. var has global-scope.

// 1.BLOCK-SCOPE:
// let z=12;
function f()
{
    var x=10;   //function-scoped.
    let y=100;
    console.log(x+" "+y+" "+z);
}

// f();
// console.log(y);  


let x=10;  // block-scoped but it is in script.
var y=1;
{
    let x=100;   // block-scoped.
    console.log(x+" "+y);
    var y=12;
}
console.log(x+" "+y);