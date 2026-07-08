class Hero {
    name: string;
    hp: number;
    attackPower: number;

    constructor(name: string, hp: number, attackPower: number) {
        this.name = name;
        this.hp = hp;
        this.attackPower = attackPower;
    }

    attack(target: Hero): void {
        target.hp -= this.attackPower;

        console.log(
            `${this.name} attacks ${target.name} for ${this.attackPower} damage!`
        );

        if (target.hp <= 0) {
            console.log(`${target.name} has fainted!`);
        }
    }
}

// Test battle
let warrior = new Hero("Warrior", 100, 25);
let monster = new Hero("Goblin", 60, 10);

warrior.attack(monster);
warrior.attack(monster);
warrior.attack(monster);