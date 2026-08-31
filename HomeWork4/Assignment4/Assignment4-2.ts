import { changeTextColor } from "../ChangeTextColor";

class Product {
    readonly id: number;
    name: string;
    price: number;
    quantity: number;

    constructor(id: number, name: string, price: number, quantity: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    sell(amount: number): void {
        amount > this.quantity ?  
        console.log(`Error: Not enough stock for ${this.name}`) 
        : this.quantity -= amount
        
    }

    restock(amount: number): void {
        this.quantity += amount;
    }
}

class Hero {
    name: string;
    hp: number;
    inventory: Product[];

    constructor(name: string, hp: number, inventory: Product[] = []) {
        this.name = name;
        this.hp = hp;
        this.inventory = inventory;
    }

    addItem(item: Product): void {
        this.inventory.push(item);
    }

    useItem(itemName: string): void {
        const index = this.inventory.findIndex(item => item.name === itemName);
        if (index !== -1) {
            const item = this.inventory[index];
            item.quantity -= 1;
            const remaining = item.quantity;

            if (item.quantity <= 0) {
                this.inventory.splice(index, 1);
            }

            console.log(`${this.name} used ${item.name}. Remaining: ${remaining}`);
        }
    }

    takeDamage(damage: number): void {
        this.hp -= damage;
        this.hp <= 0 ? (()=> {this.hp = 0 ; console.log(`Game Over:${changeTextColor( this.name+ " has fallen!","red")}`);})()
        : console.log(`Hero ${this.name} has taking ${changeTextColor(damage,"red")} damage.`)
    }
}



const potion = new Product(1, "Health Potion", 50, 2);
const sword = new Product(2, "Iron Sword", 150, 1);

potion.sell(3);
potion.sell(1);
potion.restock(2);

const hero = new Hero("Surakit", 100);

hero.addItem(potion); 
hero.addItem(sword);

hero.useItem("Health Potion");
hero.useItem("Health Potion");
hero.useItem("Health Potion");

hero.takeDamage(60);

 