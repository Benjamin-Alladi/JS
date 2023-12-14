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
        },

        // Getter:
        get getData()
        {
            let r=[this.a,this.b,this.c,this.d];
            return r;
        },

        // Setter:
        set setData(arr)
        {
            this.a= arr[0];
            this.b= arr[1];
            this.c= arr[2];
            this.d= arr[3];
        }
    }

    return ob;
}

let obj= create(3,4);
console.log(obj+"\n"+ obj.a+"\n"+ obj.square+"\n"+ obj.square(10));
console.log("Using get property: "+ obj.getData);
obj.setData= [1,10,100,1000];
console.log("After setting using Setter: "+ obj.getData);

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

    this.a=x;
    this.b=y;

    this.sum= function()
    {
        return this.a+ this.b;
    };

    Object.defineProperty(createobj.prototype, 'setData', {set: function(arr) { this.a=arr[0]; this.b=arr[1]; }});
    Object.defineProperty(createobj.prototype, 'getData', {get: function() { return this.a +' '+ this.b }});
}

let ob= new createobj(1,2);
console.log(ob+" "+ ob.a+ " "+ ob.sum+" "+ ob.sum());

console.log(ob.getData);

ob.setData= [10,100];
console.log("After Setting Using setter in prototype : "+ ob.getData);
