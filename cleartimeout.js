// The global clearInterval() method cancels a timed, repeating action which was previously established by a call to setInterval().

// The clearTimeout(id) method clears a timer set with the setTimeout() method.
// To clear a timeout, use the id returned from setTimeout(), then you can to stop the execution by calling clearTimeout().

let pg= document.querySelector(".pg");
let id=setTimeout( () => { bgfunc();}, 3000);

console.log("id: "+id);
clearInterval(id);
console.log("Cleared the timer attached to setTimeout() function.");

function bgfunc()
{
    pg.innerHTML= new Date();
    document.body.style.backgroundColor= "red";
}


setTimeout( (msg) => { console.log("Message: "+msg);},
1000, 
"JavaScript");