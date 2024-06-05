// Accessing:
// Returns HTMLCollection.
document.getElementById();
document.getElementsByClassName();
document.getElementsByTagName();


// document.querySelector() returns the first HTML element object.
document.querySelector("#pg1");
document.querySelector(".box");
document.querySelector("div");

// document.querySelectorAll() returns all the HTML element objects.
document.querySelectorAll("#pg1");
document.querySelectorAll(".box");
document.querySelectorAll("div");




// Get or Setting the content of HTML object elements:
ele.innerHTML;    //get or set inner-content of HTML element. rendering
ele.outerHTML;    // get or set total HTML element ie content + TAG.It is also used for replacing HTML element with new element.
//The innerHTML property captures the HTML contents of an element. In contrast, the outerHTML property captures the HTML that represents the element itself and its content.

ele.innerText;   // get or set the inner-content of HTML element in the form of STRING. If there is any child element inside ele then it doesn't return tag. It only returns inner-text of ele and child ele inside it. It DOESN'T PRESERVE the extra-spacing,tags of inner-elements and hidden elements.
ele.outerText;   //The outerText property of the HTMLElement interface returns the same value as HTMLElement.innerText. When used as a setter it replaces the whole current node with the given text (this differs from innerText, which replaces the content inside the current node).

ele.textContent;   // same as innerText. It PRESERVES extra-spacing, hidden elements but DOESN'T PRESERVE tags of inner-elements.


// creating a new child Element:
let child= document.createElement("h1");   // creating an HTML child element.
let text=document.createTextNode(" <b>Hi</b> ");  // Creates a new Text node and specify the content.
child.append(text);                        //append or prepend the the specified element to newly created child element.
child.append(text);                        //append or prepend the Node to newly created child element
parent.append(child);  parent.prepend(child);   // append the child element to the parent element.


let ch= document.createElement("p");
ch.innerHTML= "<b style='font-sze:30px'> Hello </b> ";
parent.insertAdjacentElement("where",what);  // "beforebegin",ch  or  "afterbegin",ch  or  "beforeend",ch  or "afterend",ch.


// removing an element:
element.remove();   // removes the element from HTML DOM.

p.removeChild(c);   // removes the Node from parent element.
c.parentElement.removeChild(c);



// Events:
// In JS, EVENTS can be defined as actions that occur because of user input and they generate a response as output.

// Reactiong TO events using HTML event attributes.
//  attribute="eventHandler()".
// Ex: <button onclick="myFunction()" >Click me!</button>

// Some more HMTL event attributes:  ondblclick="myFunction()", onload="mtFunction()", onunload="mtFunction()",onfocus="myFunction(this)", oninput="upperCase()", onchange="upperCase()",
//  onmouseup="myFunc()", onmousedown="myFunc()", onmouseout="myFunc()", onmouseover="myFunc()", onloadstart="myFunction()".

// The onchange event occurs when the value of an HTML element is changed.This event is similar to the oninput event. 
// The difference is that the oninput event occurs immediately after the value of an element has changed, 
// while onchange occurs when the element loses focus, after the content has been changed.


// EventTarget Interface:
// This is top-level interface:  EventTarget -> Node -> Element.
// EventTarget has 3 methods. They are 1. addEventListener()  2. removeEventListener()  3. dispatchEvent().


// 1. addEventListener():
event_target.addEventListener(event_type, Listener);
// Ex:  ele.addEventListener("click", myFunction());


// 2. removeEventListener():
ele.removeEventListener(event_type, listener);
// Ex:  ele.removeEventListener("mouseover", mouseOverFunc);

/*
Common Types of Events

*Mouse Events:
1. click: Triggered when an element is clicked.
2. dblclick: Triggered when an element is double-clicked.
3. mousedown: Triggered when a mouse button is pressed down on an element.
4. mouseup: Triggered when a mouse button is released over an element.
5. mouseover: Triggered when the mouse pointer enters an element.
6. mouseout: Triggered when the mouse pointer leaves an element.
7. mousemove: Triggered when the mouse pointer moves over an element.
8. focusin
9. focusout

*Keyboard Events:
10. keydown: Triggered when a key is pressed down.
11. keyup: Triggered when a key is released.
    keypress: Triggered when a key is pressed (deprecated, use keydown or keyup).
12. input
13. change

*Form Events:
14. submit: Triggered when a form is submitted.
15. change: Triggered when the value of an element changes (e.g., input, select).
16. focus: Triggered when an element gains focus.
17. blur: Triggered when an element loses focus.

*Window Events:
18. load: Triggered when the entire page has loaded, including all dependent resources such as stylesheets and images.
19.unload: Triggered when the entire page has finished
20. resize: Triggered when the browser window is resized.
21. scroll: Triggered when the user scrolls the content of an element or the window.

*Document Events:
22. DOMContentLoaded: Triggered when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
23. readystatechange: Triggered when the readyState attribute of a document has changed.
*/


