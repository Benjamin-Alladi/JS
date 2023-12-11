let a=[1,2,3,4,5,6];

let sum= a.reduce(
    function(prev, value,index,a)
    {
        return prev+value;
    }
);

console.log(sum);

let s= a.reduce( (total,value,i,a) => total+value);
console.log(s);