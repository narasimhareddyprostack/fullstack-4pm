let x = () => {
  console.log(this);
};

x();

function add() {
  console.log(this);
}
add();
