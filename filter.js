let ages=[18,17,26,16,35,100];

let voters= ages.filter(
    function(value,index,ages)
    {
        // return index%2==0;
        // return index%2==1;
        return value>=18;
    }
);

console.log(voters);

// Arrow Function:
let v= ages.filter((v,i,a) => v>=18);

console.log(v);