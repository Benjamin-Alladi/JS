let a=[1,2,"a","b","c","JavaScript","a",new String("str"), {v:10, n:"JS"}];

console.log(typeof a);
console.log( Array.isArray(a));
console.log(a instanceof Array);

console.log("Length: "+ a.length);

/*
// ADDING elements: push() at end, unshift() at start, splice() at specified index

a.push("Java");
console.log(a);

a.unshift("start");
console.log(a.toString());

a.splice(3,0,"Three");
console.log(a.toString());


// DELETING elements: pop() last, shift() first, splice() at specified index
console.log(a.toString());

console.log(a.pop() +"\t"+ a.toString());
console.log(a.shift() +"\t"+ a.toString());
console.log(a.splice(3,2) +"\t" + a.toString());
*/




/*
// Searching:
// indexOf() and includes() to search primitives:
console.log(a.indexOf("a") +" "+ a.lastIndexOf("a")+ " "+ a.indexOf("Hi"));
console.log(a.includes(1)+" "+ a.includes("Hi"));

console.log("searching objects: "+ a.indexOf(new String("str"))+" "+ a.includes("str"));   // doesn't work for OBJECTS.
console.log(a.indexOf( {v:10, n:"JS"}) +" "+ a.includes( {v:10, n:"JS"}));   // doesn't work for OBJECTS.

// use CALL-BACK function to search reference type elements:
let ind= a.find(
function(x)
{ 
    return x=="str"
}
);
console.log("ind: "+ ind);


let i= a.find(
    function(x)
    {
        return x.v== 10 && x.n== "JS";
    }
);
console.log("i: "+ i);
*/

console.log( a.join("*") );

let s="Hi,Hello,JS";
let sa= s.split(",");
console.log(sa +" "+ typeof sa);
console.log( s instanceof String );

// Concatenation of 2 Arrays:
console.log(a.concat(a));
console.log(a+a);

