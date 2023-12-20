console.log("Object prototype:");
// obj.__proto__: Object.Prototype
let obj={

}

console.log(Object.prototype);
console.log(obj.__proto__);

obj.__proto__.fn= "John";
Object.prototype.ln= "Doe";

console.log(Object.prototype);
console.log(obj.__proto__);

console.log(obj.__proto__ === Object.prototype);

console.log(obj.__proto__.__proto__ ,  Object.prototype.__proto__);
/*
let ob={

}
console.log(ob.fn+" "+ob.ln);
*/





console.log("Array prototype:");
// a.__proto__: Array.prototype
let a=[];

console.log(Array.prototype);
console.log(a.__proto__);

console.log(a.__proto__ === Array.prototype);

console.log(a.__proto__.__proto__);
console.log(Object.prototype);

console.log(a.__proto__.__proto__ === Object.prototype);

console.log(a.__proto__.__proto__.__proto__);
console.log(Object.prototype.__proto__);


console.log("Function prototype:");
// f.__proto__: Function.prototype
function f()
{

}

console.log(f.__proto__);
console.log(Function.prototype);
console.log(f.__proto__ === Function.prototype);

console.log(f.__proto__.__proto__);
console.log(Object.prototype);
console.log(f.__proto__.__proto__ === Object.prototype);


console.log(f.__proto__.__proto__.__proto__);
console.log(Object.prototype.__proto__);


