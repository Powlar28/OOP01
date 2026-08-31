export class PaymentGateway {
    process(amount : number){ }
}

export class CreditCardPaymeny extends PaymentGateway{
  process(amount : number):void{ 
        console.log(`CreditCard ${amount}` );
 
  }
}

export class PayPalPayment extends PaymentGateway{
  process(amount : number):void{ 
    console.log(`PayPal ${amount}` ); 
  }
}

