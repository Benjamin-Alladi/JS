// Every time you open a web page, a session storage space is created.
// Data is stored in the form of Key, Value pairs. They are stored as strings.
// The page session is valid only for that particular tab.
// Closing a tab/window ends the session and clears objects in session storage.

// Methods: setItem(K,V)  getItem(K)  removeItem(K)  clear()  length()  key(index).

console.log(sessionStorage.length);

// Storing/Setting:
console.log("Storing/Setting:");

let x=1;
sessionStorage.setItem(x, x*x);

sessionStorage[2]=4;

sessionStorage.color="red";


// Retrival/Getting:
console.log("Retrival/Getting:");

let v=sessionStorage.getItem(x);
console.log("Value of 1: "+v+" "+ typeof v);

let val= sessionStorage[2];
console.log("Value of 2: "+val+" "+ typeof val);

let value= sessionStorage.color;
console.log("Value of color: "+value+" "+ typeof value);

let k= sessionStorage.key(0);
console.log("Key: "+k+" "+ typeof k);


// Removing:
console.log("Removing:");
console.log(sessionStorage+" "+ typeof sessionStorage);

sessionStorage.removeItem("color");
console.log("After removing color: "+ sessionStorage.getItem("color"));

console.log(JSON.stringify(sessionStorage)+" "+ typeof sessionStorage);

console.log(sessionStorage);

// Length:
console.log("Length: "+ sessionStorage.length);

// Clearing:
sessionStorage.clear();
console.log("After clearing, sessionStorage Length is: "+ sessionStorage.length);
