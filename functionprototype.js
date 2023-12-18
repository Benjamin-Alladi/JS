
// FUNCTION PROTOTYPES:
// 1. call()   2.apply()   3.bind()   4.toString()

// The call() method of Function instances calls the function with a given: 1.this value  2. comma-separated arguments.
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

