/*
let d= Date.now();
console.log("d: "+d);  //Date.now() returns the number of milliseconds since January 1, 1970.


// performance.now():  It returns value of time in milliseconds. It is the time elapsed since execution started.
console.log(performance.now()); 
let t1= performance.now();
console.log("t1: "+ t1);  //performance.now() returns a DOMHighResTimeStamp, which represents the time elapsed in milliseconds since the system's initialization.
for( let i=0;i<10;i++)
{
    console.log(i);
}
let t2= performance.now();
console.log("t2: "+ t2); 
console.log("Performance: "+ (t2-t1));

*/


//Creates a new empty DocumentFragment into which DOM nodes can be added to build an offscreen DOM tree.The DocumentFragment interface represents a minimal document object that has no parent.
// It is used as a lightweight version of Document that stores a segment of a document structure comprised of nodes just like a standard document.

// If we make changes to active Document object frequently, performance will decrease because of continuous reflow and repaint.
// Reflow happens when a browser recalculates the position and geometry of certain parts of a webpage, such as after an update on an interactive site.
// Repaint happens when a browser redraws a web page to show the visual updates resulting from a UI change, such as after an update on an interactive site.


// So we can create new Document Fragment object using createDocumentFragment(). This method returns the newly created Document object.Since the Document Fragment is in memory and not part of the main DOM tree, appending children to it does not cause page reflow.
// This increases the performance.

// So, append all the nodes to the DocumentFragment object and after all the changes, append this DocumentFragment to the active DOM tree.


// Case1:
let t1= performance.now();
for(let i=0;i<3;i++)
{
    let ele= document.createElement("p");
    ele.innerHTML= "Hi"+i;
    document.body.append(ele);
}
let t2= performance.now();
console.log("Case1 Performance: "+ (t2-t1));

// Case2:
let t3= performance.now();
let frag= document.createDocumentFragment();

for(let i=0;i<3;i++)
{
    let ele= document.createElement("p");
    ele.innerHTML="Hello"+i;
    frag.append(ele);
}
document.body.append(frag);
let t4= performance.now();
console.log("Case2 Performance: "+ (t4-t3));