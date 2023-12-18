// FUNCTION PROTOTYPE PROPERTIES:
// 1.func.name   2.func.displayName   3. func.arguments   4. func.length

function func(a,b)
{
    console.log("1. Arguments: "+ JSON.stringify(func.arguments));
    console.log("2. Length: "+ func.length);
}

func(10,20);

console.log("3. Name: "+ func.name);

func.displayName = "MyFunction";

console.log("4. DisplayName: "+ func.displayName);

console.log("Name is: "+ func.name);
console.log(func);

console.log("toString():\n"+ func.toString());






