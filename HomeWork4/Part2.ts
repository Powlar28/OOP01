 export class Product{
    readonly id : number;
    name : string;
    price :number;
    quantity:number;

    constructor(id:number,name:string,price:number,quantity:number)
    {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;

    };

}


    var Product01 = new Product(1,"Product01",100,10)

    function Sell(amount:number) {



        if(amount > Product01.quantity)
            {
                console.log("Error: Not enough stock for ",Product01.name);
            }
            else{
            Product01.quantity =  Product01.quantity-amount;
            console.log("\n\n\n===Product Summary===\nName:",Product01.name,"\nPrice:",Product01.price,"Quantity:",Product01.quantity);
            console.log("Sell Success");
        }
    }

    function Restock(amount:number) {

     Product01.quantity =  Product01.quantity+amount;
            console.log("\n\n\n===Product Summary===\nName:",Product01.name,"\nPrice:",Product01.price,"\nQuantity:",Product01.quantity);
            console.log("Restock Success");
    }

//  TEST AREA   //
