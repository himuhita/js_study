/*
var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "\n";
}
console.log(text);

var txt = "";
var person = {fname:"John", lname:"Doe", age:25}; 
var x;
for (x in person) {
  txt += person[x] + " ";
}
console.log(txt);
*/
/*
var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "\n";
}
console.log(text);

var text1 = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text1 += "The number is " + i + "\n";
}
console.log(text1);

var cars = ["BMW", "Volvo", "Saab", "Ford"];
var text2 = "";

list: {
  text2 += cars[0] + "\n"; 
  text2 += cars[1] + "\n"; 
  break list;
  text2 += cars[2] + "\n"; 
  text2 += cars[3] + "\n"; 
}
console.log(text2);
*/
/*
console.log(typeof "john" + "\n" +
typeof 3.14 + "\n" +
typeof NaN + "\n" +
typeof false + "\n" +
typeof [1,2,3,4] + "\n" +
typeof {name:'john', age:34} + "\n" +
typeof new Date() + "\n" +
typeof function () {} + "\n" +
typeof myCar + "\n" +
typeof null + "\n\n");

console.log("john".constructor + "\n" +
(3.14).constructor + "\n" +
false.constructor + "\n" +
[1,2,3,4].constructor + "\n" +
{name:'john', age:34}.constructor + "\n" +
new Date().constructor + "\n" +
function () {}.constructor);

var x = 123;
console.log(Number([20]));
console.log(x.toString());
*/
/*
var x = ~5;
console.log(x);
*/
console.log(dec2bin(10));
function dec2bin(dec){
  return (dec >>> 0).toString(2);
}
console.log(bin2dec(101010));
function bin2dec(bin){
  return parseInt(bin, 2).toString(10);
}