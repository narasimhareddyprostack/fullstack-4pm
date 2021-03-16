function Order(id1, name, type) {
  console.log(id1);
  this.id = id1;
  this.name = name;
  this.type = name;
}
let order1 = new Order(101, "Iphone", "online");
console.log(order1);
