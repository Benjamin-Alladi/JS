// FACTORY FUNCTION: creates an object and return it.
console.log("Factory Function:");
function create(f,s){

    let ob={
        a:1,
        b:2,
        c:f,
        d:s,

        square: function(x)
        {
            return x*x;
        }
    }

    return ob;
}

let obj= create(3,4);
console.log(obj+" "+ obj.a+"\n"+ obj.square+"\n"+ obj.square(10));

// Adding:
obj.e=10;
obj.cube= function(x)
{
    return x**3;
}
console.log(obj+" "+ obj.cube(10));

// Deleting:
delete obj["e"];
delete obj.cube;
console.log(obj);



// CONSTRUCTOR FUNCTION: use the fuction as Constructor to initialise and create objects.
console.log("Cunstructor Function:");
function createobj(x,y)  //use "this" and "=".
{

    this.a=x,
    this.b=y,

    this.sum= function()
    {
        return this.a+ this.b;
    }
}

let ob= new createobj(1,2);
console.log(ob+" "+ ob.a+ " "+ ob.sum+" "+ ob.sum());
