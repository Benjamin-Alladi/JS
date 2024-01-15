/*
We can summarize the rules for determining this from a func‐
tion call’s call-site, in their order of precedence. Ask these questions
in this order, and stop when the first rule applies:

1. new:
Is the function called with new (new binding)? If so, this is the
newly constructed object.
var bar = new foo()

2. Explict Binding:
Is the function called with call or apply (explicit binding), even
hidden inside a bind hard binding? If so, this is the explicitly
specified object.
var bar = foo.call( obj2 )

3.Implicit Binding:
Is the function called with a context (implicit binding), otherwise
known as an owning or containing object? If so, this is that con‐
text object.
var bar = obj1.foo()

4. Default Binding and Mode:
Otherwise, default the this (default binding). If in strict mode,
pick undefined, otherwise pick the global object.
var bar = foo()

strict mode: "this substitution" doesn't happen. So, "this" value is undefined or null.
non-strict mode: "this substitution" happens. So, "this" value is globalObject(window).

5. Arrow Functions:
The value of "this" inside the Arrow Function is determined by "Enclosing Lexical Context".
*/


console.log(this); // refers to global object i.e. window in case of browser
// global object differs based on runtime environment


function x() {
    // "use strict";
    // the below value depends on strict/non-strict mode
    console.log(this);
    // in strict mode - refers to global window object
    // in non-strict mode - undefined
}
x();

// 💡 Notes:
// On the first go feels like `this` keyword in global space and inside function behaves same but in reality it's different.
// The moment you make JS run in strict mode by using: "use strict" at the top, `this` keyword inside function returns `undefined` whereas global space will still refers to global window object


// `x` key below is a method as per terminology
const obj = {
    a: 10,
    x: function () {
        console.log(this); // {a: 10, x: f()}
        console.log(this.a); // 10
    }
}
obj.x(); // value of `this` is referring to current object i.e. `obj`


const student = {
    name: 'Alok',
    printName: function () {
        console.log(this.name);
    }
}
student.printName(); // Alok

const student2 = {
    name: 'Kajal',
}
// student2.printName(); // throw error

// how to re-use printName method from `student` object
student.printName.call(student2); // Kajal
// Above `call` method is taking the value of `this` keyword
// So, Inside `printName` method value of `this` is now `student2` object

// So, call, bind and apply is used to set the value of this keyword.


const ob= {
    a: 10,
    x: () => {
        console.log(this); // window object
        // Above the value of `this` won't be obj anymore instead it will be enclosing lexical context i.e. window object in current scenario.
    }
}
ob.x();

const ob2 = {
    a: 10,
    x: function () {
        const y = () => {
            console.log(this);
            // Above the value of `this` will be obj2 as function y's enclosing lexical context is function `x`.
        };
        y();
    }
}
ob2.x();