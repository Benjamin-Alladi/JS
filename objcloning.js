// 1. Iteration 2. assign()  3.spread

// 1.Iteration:

let s={
    a:1,
    b:2,
    c:3,

    sum: function()
    {
        return this.a+ this.b+ this.c;
    }
}

let d={};
for(let x in s)
{
    d[x]=s[x];
}

console.log(d);


// 2.assign():
let src={x:10};
let dest=Object.assign({},s,src);
console.log(dest);


// 3.spread:
let dobj={...s, ...src};
console.log(dobj);