class Bank {
  minBal = 500;
  getBalancee() {
    console.log("Min Bal Account from Bank Class:", this.minBal);
  }
  transfer() {}
}
class Gpay extends Bank {}
let c1 = new Gpay();
console.log(c1);
c1.getBalancee();

class PhonePay extends Bank {}
let c2 = new PhonePay();
console.log(c2);
