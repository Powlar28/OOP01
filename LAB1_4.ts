let income: number = 50000;
let taxrate: number = 0.7;
let tax: number = 0;
let summary: number = 0;

taxrate = taxrate*10

tax = (income * taxrate) / 100;

summary = income - tax;

console.log("income:%d",income);
console.log("taxrate:%d",taxrate);
console.log("tax: %d",tax);
console.log("summary:%d",summary);

console.log("\n\n\n--- Tax Calculator Report ---");
console.log("Gross Income: %d\nTax Rate: %d%\nTax Paid: %d\nNet Income After Tax: %d\n",income,taxrate*10,tax,summary);
console.log("-----------------------------");

