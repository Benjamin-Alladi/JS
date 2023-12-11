console.log('External JS');


// LET, VAR and CONST:
let a,b;
a=10,b=12;
console.log(a+b);
// no redeclaration and block-scope for let.
// let a=12;   

var c=12;
console.log("c is: "+c);

// redeclaration and global-scope for var.
var c=20;
console.log("c is:"+c);

const x=1;
console.log("x is: "+x);

numb=100;
console.log("numb is: "+numb);

// let : local-scope and no redeclaration.
//const: local-scope, no redeclaration and re-assignment.
// var: global-scope and redeclaration.


// PRIMITIVE TYPES:
var y=1;
console.log("y is of type "+typeof y+" and value is "+y); //number

var y="Hello";
console.log("y is of type "+ typeof y +" and value is "+y); //string

var y=true;
console.log("y is of type "+typeof y+" and value is:"+y);  //boolean

var y=null;
console.log("y is of type "+ typeof y+" and value is "+y); //null

let n;
console.log(n); //undefined

// REFERENCE TYPES:

var y=[1,2,"Hi"];
console.log("y is of type "+typeof y+" and value is: "+y);  //array

// FUNCTIONS :
function myFunc()
{
    console.log("myFunc is of type "+typeof myFunc +" and value is: "+myFunc);   //function  
}

// calling function
myFunc();

var ob={1:"Hi", 2:"Hello", 3:"JS"}  //object
console.log("ob is of type "+typeof ob +" and value is: "+ob);




// Equality:
console.log(1=="1"); // VALUE based comparison.
console.log((1 != "1"));

// Strict Euality:
console.log((1 === "1"))
console.log((1 !== "1"));  // VALUE and TYPE based comparison.


