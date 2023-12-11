// SetTimeout(function,delay): It is an asynchronous function. It executes the call-back function when the timer expires.
//SetTimeout(function,delay)  is a closure.
// The first parameter of this method is a callback function that will be executed after delay milliseconds have passed.

// call-back function along with the timer attached to it:  stack -> Web API(Browser) -> After timer expires -> queue -> If stack is empty -> stack -> execute.

setTimeout(
    function f()
    {
        console.log("JavaScript");
    },2000
);

console.log("Hi");

var x=10;
setTimeout(()=>{ console.log("JS "+x);}, 2000);

function outer(){
    let a=100;
    setTimeout(function y(){    //It forms a closure.
        console.log("a: "+a, "x:",+x);
    },5000);
}

outer();

let n=16;
setTimeout(func,6000, 10,100);
function func(a,b)
{
    console.log(typeof a,a instanceof Array);
    console.log(`First Param: ${a} \t Second Param: ${b}`);
};


let v=10;

