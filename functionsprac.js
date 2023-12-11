function func(a)
{
    return a+a;
};
let a=2;
console.log("Double of "+a+" is: "+func(2));

// Default parameter: At Last.
function sum(a,b,c=10)
{
    return a+b+c;
};
console.log("Sum is: "+ sum(2,4));


// var-args or rest                                                                                                                                                                                                                                                          : MUST specify at LAST.
function f(...x)
{
    let t=0;
    for (let i = 0; i < x.length; i++) {
        t+=x[i];
    }

    return t;
};
console.log("Total is: "+ f(1,2,3));


// arguments: It is an object.
function g()
{
    console.log(arguments);
};
g(1,2,3);


// Assigning NAMED-FUNCTIONS:
let s= function square(x)
       {
          return x*x;
       } 
console.log(s(10));

// Assigning ANANYMOUS-FUNCTIONS:
let c= function cube(x)
       {
          return x*x*x;
       }
console.log(c(10));
