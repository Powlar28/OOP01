import { Hero } from "./Part3.ts";
import { Product } from "./Part2.ts";

const potion = new Product(1, "Potion", 20, 2);

const hero01 = new Hero("Hero01", 100, [potion]);

var damage:number = 50;
 
 if (hero01.hp <= 0) {
        hero01.hp = 0;
        console.log(`Game Over: ${hero01.name} has fallen!`);
    } else {
        console.log(
            `${hero01.name} took ${damage} damage. HP remaining: ${hero01.hp}`
        );
    }