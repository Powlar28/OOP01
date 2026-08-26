 
export  class Shape {
    draw():void{console.log("Drawing a shape");}
}

export class Square extends Shape {
    constructor(public side: number) {super();}
    draw():void{ console.log("Square");}
    area():void{ console.log("Square have side: ", this.side);
}
}

export class Trangle extends Shape {

}
