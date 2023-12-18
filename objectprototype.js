let ob={
    fn: "John",
    ln: "Doe",

    company: "Google",

    printName()
    {
        console.log(this.fn+" "+this.ln);
    }
}

ob.printName();

// protype object:
console.log(ob.__proto__);
console.log(Object.getPrototypeOf(ob));

console.log("Object prototype: "+ Object.prototype);
console.log(Object.prototype===ob.__proto__);

// Adding properties and methods to prototype:
Object.prototype.getName= function(){ return this.fn+" "+this.ln;};
console.log(ob.getName());

// When this obj is created JS Engine sets the Object.prototype to which we added the getName() method.
let obj={
    fn: "Kyle",
    ln: "Simpson",

    company: "Facebook",
}
console.log("obj name: "+ obj.getName());

// Printing Object.prototype and obj.__proto__
console.log(Object.prototype);
console.log(obj.__proto__);
console.log(Object.prototype=== obj.__proto__);

obj.__proto__.func= function(){ console.log("Hi "+ this.fn);};

obj.func();
ob.func();

console.log("ob proto:");
console.log(ob.__proto__);

console.log("obj proto: ");
console.log(obj.__proto__);


console.log(ob.__proto__===obj.__proto__);
