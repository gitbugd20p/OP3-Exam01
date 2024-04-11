class BankAccount {
  constructor(accountNumber, ownerName, balance) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log("Deposited amount: " + amount);
  }

  withdraw(amount) {
    if (this.balance < amount) {
      console.log("Insufficient funds.");
    } else {
      this.balance -= amount;
      console.log("Balanced Withdrawn: " + amount);
    }
  }

  getBalance(amount) {
    console.log("Current Balance: " + this.balance);
  }

  displayAccountInfo() {
    console.log("Account Number: " + this.accountNumber);
    console.log("Owner Name: " + this.ownerName);
    console.log("Balance: " + this.balance);
  }
}

const person1 = new BankAccount(1001, "John Doe", 700);
const person2 = new BankAccount(1002, "Jane Smith", 1000);

person1.displayAccountInfo();
person1.deposit(500);
person1.withdraw(300);
person1.displayAccountInfo();

person2.displayAccountInfo();
person2.deposit(300);
person2.withdraw(500);
person2.displayAccountInfo();
