import { PaymentGateway,CreditCardPaymeny,PayPalPayment } from "./ws8";
import { Employee,Programmer,Manager } from "./employee";
import {StorageService,CloudStorage} from "./storage"
import {PaymantGateway01,CreditCardPayment01,PayPalPayment01} from "./ws9_3"




const payment: PaymantGateway01[] = [
new CreditCardPayment01(500,"1234567891234567"),
new CreditCardPayment01(5000,"sss"),
new PayPalPayment01(500,"1234567890"),
new PayPalPayment01(5000,"sss"),
]

payment.forEach(e=>
    e.printReceipt(e.processPayment())
)






// const storage1 = new CloudStorage();

// storage1.save("WeclCume");


// console.log(`${storage1.load()}`)








// const employee : Employee[] = [
//     new Programmer("Programmer01",1),
//     new Manager("Manager",5),
//     new Programmer("Programmer02",3),
// ]

// employee.forEach(e=>
//     {
//         e.showProfile();
//         console.log(`Salary: ${e.getBaseSalary()} Exp:${e.getExpSalary()} 
//            \nTotal Salary+Exp: ${e.getBaseSalary() + e.getExpSalary()}`)
//     })






// function executePayment(p:PaymentGateway,atm:number){
//     p.process(atm);
// }

// const paymeny : PaymentGateway[] = [new CreditCardPaymeny(),new PayPalPayment]

// paymeny.forEach(paymeny=>{
// executePayment(paymeny,1000)
// })