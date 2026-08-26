class Animal{
constructor(public name: string) {}
makesound(): void{
    console.log(`${this.name} makes a sound`);

}
}

class Cat extends Animal{
    makesound(): void {
        console.log(`${this.name} Meows`);
        
    }
}   

const animel = new Animal("Dog");
