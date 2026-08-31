export class Book {
  _title: string;
  _author: string;
  _price: number;
  _stock: number;

  constructor(title: string, author: string, price: number, stock: number) {
    this._title = title;
    this._author = author; 
    this._price = price;
    this._stock = stock;
  }

  sellBook(quantity: number): void {
    this._stock >= quantity ? (()=>{this._stock -= quantity;
      const total = this._price * quantity;
      console.log(`Sold ${quantity} copy/copies of "${this._title}". Total price: $${total}`);
   })(): console.log(`Not enough stock for "${this._title}". Available: ${this._stock}`);
    
  }
}

 export class EBook extends Book {
  _fileSize: number;
  _downloadLink: string;

  constructor(title: string, author: string, price: number, fileSize: number, downloadLink: string) {
    super(title, author, price, Infinity);
    this._fileSize = fileSize;
    this._downloadLink = downloadLink;
  }

  override sellBook(quantity: number): void {
    const total = this._price * quantity;
    console.log(`Sold ${quantity} E-Book copy/copies of "${this._title}". Total price: $${total}`);
    console.log(`Download link: ${this._downloadLink}`);
  }
}

export class PrintedBook extends Book {
  _weight: number;
  _shippingCost: number;

  constructor(title: string, author: string, price: number, stock: number, weight: number, shippingCost: number) {
    super(title, author, price, stock);
    this._weight = weight;
    this._shippingCost = shippingCost;
  }

  override sellBook(quantity: number): void {
    this._stock >= quantity? (()=>{ this._stock -= quantity;
      const total = (this._price * quantity) + this._shippingCost;
      console.log(`Sold ${quantity} Printed copy/copies of "${this._title}". Total price (inc. shipping): $${total}`);})()
      :      console.log(`Not enough stock for "${this._title}". Available: ${this._stock}`);

    
  }
}

