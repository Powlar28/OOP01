import { changeTextColor } from "../ChangeTextColor";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const myInventory: Product[] = [
  { id: 1, name: "Laptop", price: 30000, quantity: 10 },
  { id: 2, name: "Mouse", price: 500, quantity: 50 },
  { id: 3, name: "Keyboard", price: 1200, quantity: 20 }
];

function updateStock(productId: number, amountSold: number): void {
  const product = myInventory.find((item) => item.id === productId);

 
      !product ? console.log("Product not found") :

      amountSold > product.quantity ? 
      console.log(`${changeTextColor(product.name,"rEd")} Not enough in stock`) 
      : console.log("Updated! " + changeTextColor(product.name,"green") + " remaining: " + product.quantity);

 
  
}

updateStock(1, 2);
updateStock(2, 60);
