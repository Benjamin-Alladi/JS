function area(r)
{
    return Math.PI*r*r;
}

function circumference(r)
{
    return 2*Math.PI*r;
}

function diameter(r)
{
    return r+r;
}

function caclculate(arr, func)
{
    let res=[];
    for(let i=0;i<arr.length;i++)
    {
        res.push(func(arr[i]));
    }
    console.log("Result Array: "+ res);
}

let rad_arr= [2,4,6,8,10];
caclculate(rad_arr, area);

caclculate(rad_arr, diameter);

caclculate(rad_arr, circumference);