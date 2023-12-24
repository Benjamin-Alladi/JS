let ar= [1,2,3];
let arr=ar;
ar.push(4)
arr.push(5);
console.log(ar+" "+ arr);

let [a,b,c,d,e]= ar;
console.log(a,b,c,d,e);

let na= [10,20,30,40,50,60];
let [m,n,o, , ,p]= na;
console.log(m,n,o,p);

let [...x]=na;
console.log(x);
console.log("after adding 100:\n", x, x===na);

let [f, ...s]= na;
console.log(f, s);

let narr= [1,2,[3,4]];
let [fv,sv,tv]= narr;
console.log(fv,sv,tv);

// Default values:
let [firstName = "Tobi", website = "CodeSweetly"] = ["Oluwatobi"];
console.log(firstName); // "Oluwatobi"
console.log(website); // "CodeSweetly"


