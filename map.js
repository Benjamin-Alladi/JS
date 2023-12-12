function func(a)
{
    let r=[];
    for(let i=0;i<a.length;i++)
    {
        r.push(a[i]*a[i]);
    }

    return r;
}

let res= func([1,2,3,4,5]);
console.log("Result: "+ res);

let a=[1,2,3,4,5];
let result= a.map(function(v,i,a){ return v*v;});
console.log("Result using Map: "+ result);

let mp= a.map( (v,i,a)=> `${v}:${v*v}`);
console.log("Squaring using Map: "+ mp);

let kv= a.map( (x)=> `${x}:${x*x}` );
console.log("KV: "+ kv);
