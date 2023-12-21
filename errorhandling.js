
/*
try
{
    const a=10;
    a=10;
    console.log("a: "+ x);
}
catch(e)
{
    console.log("Error is:");

    // TypeError
    console.log(e.name+" "+e.message);
    // console.log(e.stack);
}

finally
{
    console.log("finally block executed");
}

*/


try {
    setTimeout(
        function f() {
            try {
                console.log(a);
            }
            catch (e) {
                console.log("Error: " + e.name);
            }
        }, 1000
    );
    console.log("try");
}
catch (e) {
    console.log(e.name);
}
finally {
    console.log("finally");
}