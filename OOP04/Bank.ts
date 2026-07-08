class BankAccount {
    ownerName: string;
    balance: number;

    constructor(ownerName: string, initialBalance: number) {
        this.ownerName = ownerName;
        this.balance = initialBalance;
    }

    displayBalance(): void {
        console.log(`Account: ${this.ownerName}, Balance: $${this.balance}`);
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited: $${amount}`);
    }

    withdraw(amount: number): void {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`Withdrawn: $${amount}`);
        }
    }
}

// Test
let account = new BankAccount("John", 500);

account.displayBalance();

account.deposit(200);

account.withdraw(1000);

account.displayBalance();