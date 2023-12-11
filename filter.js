
function func(a)
{
    let res=[];
    for(let i=0;i<a.length;i++)
    {
        if(a[i]>=18)
        {
            res.push(a[i]);
        }
    }
    console.log("Result: "+res);
}

func([18,25,12,16]);


let a=[12,16,18,20,25];

/*
a.filter(
 function(value,index,a)
{
    console.log(value,index,a);
});
*/

let sol= a.filter( function f(value,index,a){ return a[index]>=18;});
console.log("Solution: "+ sol);

let r= a.filter((x)=> {return x>=18;});
console.log("Result: "+r);