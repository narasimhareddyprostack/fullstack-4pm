class BankCustomer {
  minBal = 500;
  constructor(acc_Name, acc_No) {
    this.acc_Name = acc_Name;
    this.acc_No = acc_No;
    console.log("constructor will execute only once");
  }
  getBal() {
    console.log("Min Bal is:", this.minBal, "account No:", this.acc_No);
  }
  deposit() {
    console.log("Depositing ....");
  }
}
let x = new BankCustomer("Narasimha", 123);
x.getBal();
x.deposit();
function minStatement() {}
