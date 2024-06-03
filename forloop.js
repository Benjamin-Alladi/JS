let obj={
    a:1,
    b:2,
    c:3,

    sum: function()
    {
        return this.a+ this.b+ this.c;
    }
}

console.log(obj+" "+ obj.a+" "+ obj.sum+" "+ obj.sum());

// FOR-IN loop:  for OBJECTS.
// let x;
console.log("for-in loop:");
for(let x in obj)   //keys.
{
    console.log(x+" "+obj[x]);  //keys and values.
}


// FOR-OF loop:
console.log("for-of loop:");
for( let x of Object.keys(obj))  //only for ITERABLES.
{
    console.log(x+" "+obj[x]);
}


let a=[10,20,"JS"];

for(let x of a)
{
    console.log(x);
}
for(let x in a)
{
    console.log(x+" "+a[x]);
}

