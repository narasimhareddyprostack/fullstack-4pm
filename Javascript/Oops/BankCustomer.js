class Address {
  constructor(houseNo, street, city) {
    this.houseNo = houseNo;
    this.street = street;
    this.city = city;
  }
}

class BankCustomer {
  constructor(acc_id, acc_name, acc_email, address) {
    this.acc_id = acc_id;
    this.acc_name = acc_name;
    this.acc_email = acc_email;
    this.address = address;
  }
}

let c1 = new BankCustomer(
  101,
  "Raj",
  "Raj@gmail.com",
  new Address(11, "Horamavu", "Bangalore")
);
console.log(c1);

console.log(c1.acc_name);

console.log(c1.address.city);
