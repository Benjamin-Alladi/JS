// setinterval(function,interval): When using the JavaScript function setInterval(), you can specify a callback function to be executed for each interval.


// f() is invoked for every Interval.
/*
setInterval( function f(){
    console.log("Hi");
},1000);
*/

/*
setInterval(func,1000);
function func()
{
    let d=new Date();
    console.log(d.getHours()+":"+ d.getMinutes()+":"+ d.getSeconds());
};
*/

var x=1;
setInterval( ()=>{console.log("Hi "+ x++);}, 1000);
