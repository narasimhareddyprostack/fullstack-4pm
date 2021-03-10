let dt = new Date("March 7, 2021 22:22:22 ");

let day = dt.getDay();
console.log(day);

switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tue");
    break;
  case 3:
    console.log("wed");
    break;
  case 4:
    console.log("Thursay");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Sat");
    break;
  default:
    console.log("Try Again");
}
