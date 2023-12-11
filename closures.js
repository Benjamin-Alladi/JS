// Closure: Closure is a function bundled together with the refernce to its sorrounding(Lexical Environment).
// It has access to all variables declared in its surrounding environment.
// It is an inner function having access to the scope of its parent.

function outer()
{
    let x=10;
    function inner()
    {
        console.log("Inner: "+x);
    }
    inner();
}

outer();


function o()
{
    let x=100;
    function i()
    {
        console.log("I: "+x);
    }

    return i;
}

let r=o();
r();