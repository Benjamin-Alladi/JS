var a=1;

{
    var b=10;
    let c;
    const d=20;
    console.log(a+" "+b+" "+c+" "+d+" "+e);

    c=30;
    var e=40;
    let f=50;

    const g=60;
}

// let and const variables:
// These are declared in block. So these are hoisted in Block Scope but not in Global Scope.
// console.log(c+" "+d+" "+f+" "+g);

// var variables declared inside a block are hoisted in Global Scope.
// But if var variables are declared inside a function, then they are Function Scoped because functions have separate Local Scope in JS.
console.log(a+" "+b+" "+e);
