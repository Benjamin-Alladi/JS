let o = {
    fn: "John",
    ln: "Doe",
    mn: "Smith",

    company: "Google",
    salary: "1Cr",
    location: "Silicon Valley",

    details: {
        age: 25,
        gender: "Male",
        email: "johndoe@gmail.com"
    }
};


// Keys must be variables:
let { fn, ln, mn, company, salary, location, details} = o;
console.log(fn, ln, mn, location, details);

let {c,b,a}= {a:10, b:20};
console.log(c,b,a);


let obj= {x:1, y:2};
let {...x}= obj;
obj.a=3;
x.z=100;
console.log(x, obj);

console.log("Clone: "+ JSON.stringify({...obj}));


//  Giving NEW NAMES to the variables:
let {language, n:author, series:books}= {n: "Kyle Simpson", series: "YDJS", language: "JS"};
// console.log(n, series, language);
console.log(author, books, language);

/*
const profile = {
    firstName: "Oluwatobi",
    lastName: "Sofela",
    website: "codesweetly.com"
};

const { firstName: forename, lastName: surname, website: onlineSite } = profile;

console.log(forename); // "Oluwatobi"
console.log(surname); // "Sofela"
console.log(onlineSite); // "codesweetly.com"
console.log(website); // "ReferenceError: website is not defined"

Note: const { firstName: forename } = profile is equivalent to const forename = profile.firstName.

*/