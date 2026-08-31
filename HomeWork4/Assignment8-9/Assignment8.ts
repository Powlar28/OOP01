 export class SD{
    Fire :string = "fire"
    Water :string= "water"
    Grass :string= "grass"

}
const sd = new SD;

interface Element {
    element():void;
    
}

abstract class Monster{
    public _name:string;
    public _hp:number;
    public _damage:number;
 
    constructor(name:string,hp:number,damage:number) {
        this._name = name;
        this._hp = hp;
        this._damage = damage;

    }
     attack(damage:number,monsterType:string,hp:number) : number{
    
            return hp -= damage;
        
    }

}   
export class FireMonster extends Monster implements Element{
    public _monsterType:string;
    element(){console.log(`This Monster is ${this._monsterType.toUpperCase()} Monter`)}

    constructor(name:string,hp:number,damage:number,monsterType:string) {
        super(name,hp,damage)
        this._monsterType = monsterType;
    }
    
    override attack(damage:number,monsterType:string,hp:number) : number{
    
        switch(monsterType)
        {
            case sd.Water : return hp -= (damage / 2);
             case sd.Grass : return hp -= (damage * 2);
             default : return hp -= damage;
        }
    }
}
export class WaterMonster extends Monster implements Element{
       public _monsterType :string;
     element(){console.log(`This Monster is ${this._monsterType.toUpperCase()} Monter`)}
    constructor(name:string,hp:number,damage:number,monsterType:string) {
        super(name,hp,damage)
                this._monsterType = monsterType;
    }

    override attack(damage:number,monsterType:string,hp:number) : number{
        switch(monsterType)
        {
            case sd.Grass : return hp-= damage / 2;
             case sd.Fire : return hp-= damage * 2;
             default : return hp-= damage;
        }
    }
}
export class GrassMonster extends Monster implements Element{
       public _monsterType :string;
    element(){  console.log(`This Monster is ${this._monsterType.toUpperCase()} Monter`)}

 
    constructor(name:string,hp:number,damage:number,monsterType:string,) {
        super(name,hp,damage)
                        this._monsterType = monsterType;

    }
    override attack(damage:number,monsterType:string,hp:number) : number{
        switch(monsterType)
        {
            case sd.Fire : return hp-= damage / 2;
             case sd.Water : return hp-= damage * 2;
             default : return hp-= damage;
        }
    }
}




// Base Class: Monster with name, health and damage().

// • Subclasses: FireMonster, WaterMonster, GrassMonster.

// • Each monster type must override attack() to show a specific element effect.

// • Create a "Battle Arena" function that accepts an array of Monster and triggers all their attacks in a sequence.

// Submit battle_polymorphism.ts. Next Week: Abstract Classes & Interfaces!
