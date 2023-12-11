let a=[1,2,3,10,12,16,100];

let m= a.map(
    function(value,index,a)
    {
        return ` ${value}:${value**2} `;
    }
);

console.log("m:\n"+ m);

// Arrow Function:

let ma= a.map( (v,i,a) => v**2 );
console.log("ma:\n"+ ma);

let mpa= a.map( 
    function(v,i,a)
    {
        return { v: v*v};
    }
);
console.log("mpa:\n");
for( let x of mpa)
{
    console.log(x);
};