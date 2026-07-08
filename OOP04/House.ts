class Houses{
    constructor(public name:string,public room:number,public bath:number,public area:number,public price:number)
    {}
        showDetail(): void{
            console.log(`House Detail ${this.name} ${this.room} Bedroom  ${this.room} Bathroom Area ${this.area}  Price${this.price} ` );
            

        };

      
    
}

let house = new Houses("house1",4,2,1500,15000000);

house.showDetail();