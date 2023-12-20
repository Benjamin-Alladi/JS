// Currying is a process in functional programming that transforms a function with multiple arguments into a sequence of nesting functions that takes only one parameter.
// Function Currying can be achieved using 1. Closures and   2. bind() method.
function getSum(x,y)
{
    console.log("Sum is: "+ x+y);
}

getSum(1,2);

function sum(x)
{
    return function(y)
    {
        console.log("Sum is: "+ x+y);
    }
}

let f=sum(1);
f(2);


function multiply(x,y)
{
    return x*y;
}

console.log("Product is: "+ multiply(2,3));

console.log("Double of 6 is: "+ multiply(2,6));
console.log("Double of 10 is: "+ multiply(2,10));

console.log("Triple of 6 is: "+ multiply(3,6));
console.log("Triple of 10 is: "+ multiply(3,10));

function mul(x)
{
    return function(y)
    {
        return x*y;
    }
}

let double= mul(2);
console.log("Double of 6 is: "+ double(6));
console.log("Double of 10 is: "+ double(10));

let triple= mul(3);
console.log("Triple of 6 is: "+ triple(6));
console.log("Triple of 10 is: "+  triple(10));

