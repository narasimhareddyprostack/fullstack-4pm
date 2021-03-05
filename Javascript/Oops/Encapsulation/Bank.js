class Bank {
  constructor() {
    let minBal;
  }
  setMinBal(value) {
    this.minBal = value;
  }
  getMinBal() {
    return this.minBal;
  }
}
let c1 = new Bank();
console.log(c1.minBal);
c1.setMinBal(500);
console.log(c1.getMinBal());
console.log(c1);
