console.log(Date());
console.log(new Date());

let d= new Date(2023, 10, 16, 10,30,30);   // y,m,d,h,min,s
console.log("Date: "+ d);
console.log(d.toString());
console.log(d.toDateString());

let y= d.getFullYear(), m=d.getMonth(), date=d.getDate(), h=d.getHours(), min=d.getMinutes(), s=d.getSeconds(), ms=d.getMilliseconds();
console.log(y+" "+ m+" "+date+" "+h+" "+min+" "+s+" "+ms);
// console.log("Time: "+ d.getTime());


let dt= new Date();
console.log(dt);
dt.setFullYear(2003), dt.setMonth(3), dt.setDate(14), dt.setHours(5), dt.setMinutes(12), dt.setSeconds(12), dt.setMilliseconds(12);
console.log(dt.toString());
console.log(dt.toDateString());