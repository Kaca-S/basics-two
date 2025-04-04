const userAccount = {
    accountName: "Karol",
    balance: 100,

    getBalance() {
        alert(`The total balance for ${this.accountName} is $${this.balance}`);
    },

 deposit() {
        let moneyIn = parseFloat(prompt("Enter the amount of money you want to deposit:"));
        if (!isNaN(moneyIn) && moneyIn > 0) {
            let newBalance = this.balance += moneyIn;
            this.balance = newBalance;
            alert(`Deposit successful! Your new balance is $${this.balance}`);
        } else {
            this.accountError("Please enter a valid positive number.");
        }
    },
  withdrawal() {
    let moneyOut = parseFloat(prompt("Enter the amount of money you want to take out:"));
    if (!isNaN(moneyOut) && moneyOut >= 0) {
        if (moneyOut <= this.balance) {
        this.balance -= moneyOut;
        alert (`Withdrawal successful! Your new balance is $${this.balance}`);
    } else {
        this.accountError("Insufficient balance! Please enter an amount less than or equal to your current balance.");
    }
    }else {
        this.accountError("Please enter a valid positive number.");
        }
    },

    getAccountName() {
    alert(`Account holder's name is ${this.accountName}`);
    return this.accountName;
    },
    accountError(message) {
        alert(`Account Error: ${message}`);
    }
  };

  function exitAccount() {
    alert(`Exiting the account. Thank you for using the ATM!`);
}

function atm() {
const message = parseFloat(prompt("Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit"));

switch (message) {
    case 1: userAccount.getBalance();
    case 2: userAccount.deposit();   
    case 3: userAccount.withdrawal();
    case 4: userAccount.getAccountName();
    case 5: userAccount.accountError();
    }
}
atm();




