let ob={
    fn: "John",
    ln: "Doe",

    company: "Google",

    printName()
    {
        console.log(this.fn+" "+this.ln);
    }
}

Object.prototype.getName= function(){ return this.fn+" "+this.ln;};

let obj={
    fn: "Kyle",
    ln: "Simpson",

    company: "Facebook",
}



// Setting Prototype:

// 1. Using Object.create:
let nob= Object.create(ob);   //Here ob is the prototype for nob object.
console.log("nob:");
nob.printName();
console.log(nob.getName());


// 2. Function Constructor:
console.log("Function Constructor:");
function f(fn,ln)
{
    this.fn= fn;
    this.ln= ln;
}

// Every function has the prototype. When object is created using Function Constructor, JS Engine sets this prototype to the newly created object with the property __proto__.
f.prototype=  { greet(){ console.log(`Hi ${this.fn} ${this.ln}`);} };
console.log(f.prototype);

let fob= new f("Peter", "Wills");
console.log(fob.__proto__);
console.log(fob.__proto__=== f.prototype);
fob.greet();

// Adding Property:
fob.__proto__.company= "Amazon";
console.log("After Adding Property:");
console.log(fob.__proto__);
console.log(f.prototype);
console.log(fob.__proto__=== f.prototype);



// 3. Using __proto__:
let o1={
    fn: "John",
    ln: "Smith",

    __proto__: obj
}
console.log("o1:");

console.log(o1.getName());
console.log(o1.company);