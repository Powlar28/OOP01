class Character{
    constructor(protected name: string, protected health: number, protected level: number) { }
    takeDamage(damage: number): void {
        this.health -= damage;

}
get states():string{
    return `${this.name} has ${this.health} health and is at level ${this.level}.`;
}
attack():void{}
}

class Warrior extends Character{    
    constructor(name: string, health: number, level: number, protected strength: number, private mana:number) {
        super(name, health, level);
    }   
    get states():string{    
        return `${super.states} Strength: ${this.strength}, Mana: ${this.mana}`;
        
}
attack():void{}}
class Mage extends Character{
        constructor(name: string, health: number, level: number, protected strength: number, private stamania:number) {
        super(name, health, level);

}
get states():string{
    return `${super.states} Strength: ${this.strength}, Stamania: ${this.stamania}`;
}
attack(): void {

}
}


const warrior = new Warrior("Conan", 100, 5, 80, 50);
const mage = new Mage("Gandalf", 80, 10, 60, 100);
