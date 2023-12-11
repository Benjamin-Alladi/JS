let ob=
{
    1:1, 2:4,3:9,4:16,

    square: function(x)
    {
        return x**2;
    },
    5:25

}
console.log("object is: "+ob);

// Accessing using BRACKET and DOT:
console.log(ob[5]);

let x=6;
console.log(ob.square(x));  //calling method of object.

// Object Methods:

console.log("Keys:\n"+Object.keys(ob));   //keys of object.
console.log("Values:\n"+ Object.values(ob));  //values of object.
console.log("Entries:\n"+ Object.entries(ob));  //Entries of object.
console.log(typeof Object.keys(ob)+" "+ typeof Object.values(ob)+" "+ typeof Object.entries(ob));


// ADDING:
ob[10]=100;  //adding variable to object.
console.log(ob);

delete ob[10];  //deleting variable from object.
console.log(ob);

delete ob.square;  //deleting method from object.
console.log(ob);

ob.draw=function()  //Adding method to object.
{
    console.log("drawing");
}
console.log(ob);
ob.draw();


// Getters and Setters:  These are properties but not functions.
console.log("Getters and Setters:");
let obj={
    a:1,
    b:10,
    c:100,

    square: function(x)
    {
        return x*x;
    },

    get getData()
    {
        console.log("Getter.");
        return this.a+" "+this.b+" "+this.c;
    },

    set setData(x)
    {
        console.log("Setter.");

        if(x.length>=3)
        {
            this.a= x[0];
            this.b=x[1];
            this.c= x[2];
        }

    },
};

console.log(obj);

obj.d=1000;

obj.cube= function(x)
{
    return x*x*x;
};

console.log(obj);

delete obj.d;
delete obj.cube;

console.log(obj);

console.log(obj.getData);

obj.setData= [1,2,3];
console.log(obj);

