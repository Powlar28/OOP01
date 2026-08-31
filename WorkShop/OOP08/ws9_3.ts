export abstract class PaymantGateway01 {
   protected tid:string;
   constructor(protected amount: number){
    this.tid = "TXN" +Math.floor(1000+Math.random()*9000);
   }
    abstract processPayment(): boolean;
   printReceipt(success : boolean): void {
    if(success){ console.log(`[Reciept:${this.tid}] Amount: ${this.amount} Baht`);
    }
    else{
        console.log(`[Payment Credit Fail] UnSuccess`);
    }
   }
} 

export class CreditCardPayment01 extends PaymantGateway01{

constructor(protected amount:number,private CreditCard: string) {super(amount)}
 processPayment(): boolean
 {
      if(this.CreditCard.length ===16){ 
        console.log(`[Reciept:${this.tid}] Amount: ${this.amount} Baht`);
        return true
    }
    else{
        console.log(`[CreditCardPayment Fail] UnSuccess`);
        return false
    }
   }
 }


 export class PayPalPayment01 extends PaymantGateway01{
   constructor(protected amount:number,private phoneNumber: string) {super(amount)}
 processPayment(): boolean
 {
      if(this.phoneNumber.length === 10){ 
        console.log(`[Reciept:${this.tid}] Amount: ${this.amount} Baht`);
        return true
    }
    else{
        console.log(`[PayPalPayment Credit Fail] UnSuccess`);
        return false
    }
   }
 }
 
 
 
  

 
  
