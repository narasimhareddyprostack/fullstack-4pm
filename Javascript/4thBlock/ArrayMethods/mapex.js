let size = [37, 39, 41, 43];

/* for (let i = 0; i <=size.length - 1; i++) {
  console.log(size[i]);
}
 */
/* for (s of size) {
  console.log(s);
} */

/* size.forEach(function (value) {
  console.log(value);
});
 */
//size.forEach(()=>{})
/* size.forEach((value) => {
  console.log(value);
});
 */

size.forEach((value) => console.log(value + 1));
//size.map(()=>{})
let newSize = size.map((value) => {
  return value + 1;
});
console.log(newSize);
