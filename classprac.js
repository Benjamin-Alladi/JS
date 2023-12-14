/*
class Addition
{
    a=10;
    b=20;

    // Private member.
    #c=30; 
}

let ob= new Addition();
console.log("Sum: "+(ob.a+ob.b));
*/

class Addition{
    a=10;
    b=20;
    // Private member.
    #sum;

    constructor(x,y)
    {
        console.log("Constructor is invoked");
        this.a=x;
        this.b=y;
        console.log(this.a+" "+this.b);
    }

    // Method:
    getsum()
    {
        return this.a+this.b;
    }

    // Setter:
    set setData(arr)
    {
        this.a= arr[0], this.b=arr[1];
    }

    // Getter:
    get getData()
    {
        this.#sum= this.a+this.b;
        return [this.a, this.b, this.#sum];
    }

    #pvtmethod()
    {
        console.log("Private Method is invoked and this cant be accessed outside the class");
    }
}

let ob= new Addition(2,3);
console.log("Sum is: "+ ob.getsum());

ob.setData=[1,2];
console.log("After setting the data using Setter: "+ ob.getData);

// ob.#pvtmethod(); This will give error as private method can't be accessed from outside of the class.

// Adding Variable:
ob.nvar=10;
console.log(ob);

// Adding Function:
ob.nfunc= (x)=>x*x;
console.log(ob);
console.log(ob.nfunc(4));




