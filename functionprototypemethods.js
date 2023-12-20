// FUNCTION PROTOTYPE METHODS:
// 1. call()   2.apply()   3.bind()   4.toString()

// call() method takes the refernce to this as the first parameter and the remaining comma-separated parameters are the parameters passed to the function on which call() is invoked.
// apply() : first parameter is the reference to this and second parameter is Array to pass the parameters to the function on which apply() is invoked.

// *** Both call() and apply() directly invoke the function. But bind() method returns the copy of the function which can be invoked.
// They differ in how they handle arguments passed to the function.
/*
let ob={
    fn: "John",
    ln: "Doe",

    print: function f()
    {
        console.log("Method as Property");
        console.log(this.fn+" "+this.ln);
    },
}
// ob.print();
ob.print.call(ob);


let obj={
    fn: "Kyle",
    ln: "Simpson"
}
// Making ob's method to refer obj
ob.print.call(obj);
*/


let ob={
    fn: "John",
    ln: "Doe"
}

let f= function()
{
    console.log(this.fn+" "+this.ln);
}

let obj= {
    fn: "Kyle",
    ln: "Simpson"
}

f.call(ob);
f.call(obj);

let fn= function(city,state)
{
    console.log(this.fn+" "+this.ln+" from"+" "+city+" "+state);
}

// Function.prototype.call() method:
fn.call(ob,"Hyderabad","Telangana");
fn.call(obj, "Silicon Valley","California");

// Function.prototype.apply() method:
f.apply(ob);
f.apply(obj);

fn.apply(ob,["Hyderabad","Telangana"]);
fn.apply(obj,["Silicon Valley","California"]);


// Function.prototype.bind() method:
console.log("bind():");
let fc= f.bind(ob);
fc();

let fnc1= fn.bind(ob,"Hyderabad","Telangana");
fnc1();
let fnc2= fn.bind(ob);
fnc2("Hyderabad","Telangana");



