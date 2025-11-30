// var variable

// var name = "Twahidul Islam"
// var name = "Emon"
// console.log(name);

// let Variable

// let product = "Mango"
// product = "Banana"
// console.log(product)

// const variable

// const pai = 3.1416
// console.log(pai);

// let cap = 100
// let shirt = 20000
// console.log(cap+shirt);

// let book = 315
// let pen = 20
// let sum = Book + Pen
// console.log(sum);

// var maynas = 20 - 30
// console.log(maynas)

var intu = 20 * 30;

// console.log(intu)

// var dive = 20 / 4
// console.log(dive)

// Primary Scope
{
  let x = 1000;
  console.log(x);
}
{
  const x = 1500;
  console.log(x);
}
// Public Scope
{
  var y = 200;
}
console.log(y);

// let z = "Twahhidul"
// console.log(typeof(z));

let a = 55;
console.log(typeof a);

// let b = true
// console.log(typeof(b));

// let text1 = "Hello";
// let text2 = "World"
// let text3 = text1.toUpperCase()
// console.log(text3);

const phone = {
  brand: "Samsung",
  color: "White",
  Price: 50000,
};
for (item in phone) {
  console.log(item);
  console.log(phone[item]);
}
