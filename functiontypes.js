// Types of Functions in JS:
// 1.Function Declaration  2.Function EXpression(Named and Ananymous)  3.Arrow Functions  4.Call-back Functions  5.IIFE  6.Higher-Order Function

// 1.Function Declaration:
function f() {
    console.log("This is Function Declaration");
}
f();


// 2.Function Expression:
let func= function myFunc()
{
    console.log("This is Function Expression");
}
func();


// 3.Arrow Function:
let x= ()=>console.log("This is Arrow Function");
x();



// 4. IIFE: Immediately Invoking Function Expression:
(
    function()
    {
        console.log("This is iife");
    }
)();


// 6. Higher-Order Function:
// The Function that takes the other Function as a parameter is called as "Higher-Order Function".
// There are various built in HOFs, and some of the most common ones are map(), filter() and reduce().

function outer(inner)   //Here, outer if HOF and inner is Call-back function.
{
    inner();
}

outer(()=>console.log("Hello"));