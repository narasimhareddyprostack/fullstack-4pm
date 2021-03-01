class Order {
  orderValue = 50000;
  status() {
    console.log("Delivered");
  }
}
console.log(new Order().orderValue);
console.log(new Order().status());
console.log(new Order());
