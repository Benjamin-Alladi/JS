// Function Declaration:
function f() {
    console.log("This is Function Declaration");
}
f();


// Function Expression:
let func= function myFunc()
{
    console.log("This is Function Expression");
}
func();


// Arrow Function:
let x= () =>  console.log("This is Arrow Function");
x();



// iife: Immediately Invoking Function Expression:
(
    function()
    {
        console.log("This is iife");
    }
)();