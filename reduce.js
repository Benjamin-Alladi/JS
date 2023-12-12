function func(a)
{
    let sum=0;
    for(let i=0;i<a.length;i++)
    {
        sum= sum+a[i];
    }

    return sum;
}

let r= func([1,2,3,4,5]);
console.log("Sum: "+ r);

let a=[1,2,3,4,5];
let res= a.reduce( 
function f(accumulator,v,i,a)
{
    accumulator+=v;
    return accumulator;
},0
)
console.log("Sum using reduce: "+ res);