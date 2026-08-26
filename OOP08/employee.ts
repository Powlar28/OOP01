export abstract class Employee{

    constructor(private name:string,private exp:number){}
    abstract getBaseSalary(): number;
    abstract getExpSalary(): number;
    showProfile():void {console.log(`Name: ${this.name} Exp: ${this.exp} year`)}
}

export class Programmer extends Employee{
    getBaseSalary() : number {
        return 25000
    }
    getExpSalary(): number{
        return 5
    }

}

export class Manager extends Employee{
    getBaseSalary() : number {
                return 50000
    }
      getExpSalary(): number{
        return 4
    }
}

