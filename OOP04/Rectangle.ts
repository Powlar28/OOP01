class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

let rectangle = new Rectangle(5, 10);


console.log("Area:", rectangle.getArea());
console.log("Perimeter:", rectangle.getPerimeter());