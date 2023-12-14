// class declarations are not hoisted. That means that you must declare a class before you can use it.

class car
{
    constructor(name,year)
    {
        console.log("car constructor invoked.");
        this.cname= name;
        this.cyear= year;
    }

    getDetails()
    {
        console.log(this.cname+" "+this.cyear);
    }
}

class audi extends car
{
    constructor(cname,year,price,mileage)
    {
        super(cname,year);
        console.log("audi constructor invoked.");
        this.price= price;
        this.mileage= mileage;
    }

    getDetails()
    {
        super.getDetails();
        console.log(this.price+" "+this.mileage);
    }
}

let ob= new car("tata",2000);
console.log("car ob: "+ JSON.stringify(ob));
ob.getDetails();

let audi1= new audi("audi",2018,100000, 80);
console.log("audi1: "+ JSON.stringify(audi1));
audi1.getDetails();