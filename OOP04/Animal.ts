class Animal {
    Species: string;
    Sound: string;
    constructor(species:string,sound:string)
    {
        this.Species = species;
        this.Sound =sound;
    }

}

let animallist: Animal[] = [a
          new Animal("Dog", "Bark Bark"),
          new Animal("Cat", "Mew Mew"),
        ];

animallist.forEach(item => {console.log(`Animal: ${item.Species} Sound: ${item.Species}`)})


