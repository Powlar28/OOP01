import { Product } from "./Part2";

export class Hero{
    name : string;
    hp :number;
    inventory:Product[];

    constructor(name:string,hp:number,inventory:Product[])
    {
        this.name = name;
        this.hp = hp;
        this.inventory = inventory; 

    }
}

 var Product01 = new Product (1,"Potion",20,20);
    var AddingItem = new Product (1,"Potion",20,32);
    var Hero01 = new Hero("Hero01",100,[Product01]);

  function AddItem(item:Product,Hero:Hero) {
        if(item.id!=null){
            
            let HeroItem = Hero.inventory.find(x=>x.id === item.id);
            if(HeroItem){    
                    HeroItem.quantity = HeroItem.quantity + item.quantity;
                                    console.log("Add Item Success")

                }

        }
    }

    function UseItem(item:Product,Hero:Hero)
    {  

        let HeroItem = Hero.inventory.find(x=>x.id === item.id);
         if(HeroItem){    

             if(HeroItem.quantity>=item.quantity)
             {
            HeroItem.quantity = HeroItem.quantity - item.quantity;
                                    console.log("Using Item Success")
            }
            if(HeroItem.quantity==0){
                Hero.inventory.filter(item => item.id == HeroItem.id) ;
            }
                }
    }
   



// Test Area //

UseItem(AddingItem,Hero01)
console.log("\n\n\nResult Hero:" ,Hero01.name,Hero01.hp );
var HeroItem = Hero01.inventory.find(x=>x.id == 1);
console.log("Result Hero Item:" ,HeroItem?.name,HeroItem?.quantity);

