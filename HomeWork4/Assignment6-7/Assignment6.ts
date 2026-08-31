
export  class Product {
  private _name: string;
  private _price: number = 1;
  private _stock: number = 1;

  constructor(name: string, price: number, stock: number) {
    this._name = name;
    this._price = price;
    this._stock = stock;
  }
   public get name():string{
      return this._name == null || this._name == "" ? this._name = "No-Name" :this._name  ;
    }
    public get price():number{
      return this._price < 1 ? this._price = 0 :this._price ;
    }
     public get stock():number{
      return this._stock < 0 ? this._stock = 0  : this._stock ;
    }
    
    public set price(value:number)
    {
      value > 0 ? this._price = value : console.log(`Price Vaule is 0 or less`)
    }

    public set stock(value:number)
    {

      value > 0 ? this._stock = value : console.log(`Stock Vaule is negative`);
    }


  
  
  }



