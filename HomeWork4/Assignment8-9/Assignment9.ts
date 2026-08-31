export interface Taxable {
    
    applyTax(amount:number):number;
}
abstract class Employee {
    public _name: string

    constructor(name:string) {
        this._name = name;
    }
     calculatePay(): number {
        return 0;
    }
    getDetails(): string{
    return this._name;
    }
}
export class HourlyWorkr extends Employee{
    private _hourlyRate: number
    private _hoursWorked: number
    constructor(name:string,hourlyRate:number,hourWorked:number){
        super(name)
        this._hourlyRate = hourlyRate;
        this._hoursWorked=  hourWorked;
    }

    override calculatePay(): number {
        return this._hourlyRate * this._hoursWorked;
    }
    

}

export class SalariedWorker  extends Employee implements Taxable{
    private _monthlySalary: number;
        
    
    constructor(name:string,monthlySalary:number){
        super(name)
        this._monthlySalary = monthlySalary;
       
    }

    override calculatePay(): number {
        return this._monthlySalary
        
    }
        applyTax(monthlySalary:number){
            return  monthlySalary - (monthlySalary * 0.10)
        }
}