class MenuItem {
    name:string;
    price:number;
    type:string;
    constructor( name:string, price:number, type:string){
        this.name = name;
        this.price = price;
        this.type =type;
    }
    showMenuInfo():string{
        return `ItemName:${this.name}\tItemPrice${this.price}\tItemType:${this.type}`
    };
    getName():string{
        return this.name
    }
      getPrice():number{
        return this.price
    }
      Typr():string{
        return this.type
    }
    
    }

class Restaurant{
    menuItem:MenuItem[];
    constructor(menuItem : MenuItem[]){
        this.menuItem=menuItem;
    }
        showMenu():void{
           console.log()
           this.menuItem.forEach(element => {
            console.log(element.showMenuInfo())
            
           });
        }
            calNetPrice(total:number):number{
                const rate = 0.01;
                if(total>=500){
                    return total - (total * rate);
                }
                else{return total}
            }

    }


 class Order{
    constructor(public orderId:string,public menuItems:MenuItem[], publicamount:number){
        
    }
    showOrder():void{
        this.menuItems.forEach(item=>{
            console.log(item.showMenuInfo())
        })
    }
    calTotalPrice():number{
        
        return this.menuItems.reduce((total,x)=>total + x.price,0)
    }

}
class Costomer {
   

    constructor(private name:string,orderID:string,order:Order[]){
    
    }

 matchOrderId(orderId: string, orders: Order[]):Order {
  const result: Order | undefined = orders.find(
        o => o.orderId === orderId
    );   
     if (result === undefined) {
        throw new Error("Order not found");
    }
    return  result;
}
    
}

const MenuItems:MenuItem[]= [];

for (let i = 1; i <= 5; i++) {
    const item = new MenuItem("Item"+i,i*100,"Type"+i)
    MenuItems.push(item);
}

MenuItems.forEach(item => {
    console.log(item.showMenuInfo())
    
    
});