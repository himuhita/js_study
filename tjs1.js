/*
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
console.log(sln);

var str = "Please locate where locate occurs!";
var pos = str.indexOf("locate");
console.log(pos);
*/
/*
var str = "Apple, Banana, Kiwi";
console.log(str.slice(7,13));
console.log(str.slice(-12,-6));
console.log(str.substring(7, 13));
str = str.replace("Kiwi", "W3Schools");
console.log(str.substring(7));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
*/
/*
var text1 = "Hello";
var text2 = "World";
var text3 = "Day";
var text4 = text1.concat(" ", text2).concat(" ", text3);
console.log(text4);
*/
/*
var x = 100 / "Apple";
console.log(x);
*/
/*
var myNumber = 2; 
var txt = "";
while (myNumber != Infinity) {
   myNumber = myNumber * myNumber;
   txt = txt + myNumber + "\n";
}
console.log(txt);
var y = 2 / 0;
console.log(y);
console.log(typeof Infinity);
*/
/*
var myNumber = 65;
console.log(myNumber.toString(10));  // returns 32
console.log(myNumber.toString(32));  // returns 10
console.log(myNumber.toString(16));  // returns 20
console.log(myNumber.toString(8));   // returns 40
console.log(myNumber.toString(2));   // returns 100000
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
*/
/*
var cars = ["Saab", "Volvo", "BMW"];
console.log(cars);
console.log(cars[0]);
var cars1 = new Array("Saab", "Volvo", "BMW");
cars1[0] = "Limuzin";
console.log(cars1);
console.log(cars1[0]); 
console.log(cars1.length);
var arrEl = ["himu"];
console.log(arrEl.length);
var person = {firstName:"John", lastName:"Doe", age:46};
console.log(person.age);
*/
/*
var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "";
for (i = 0; i < fLen; i++) {
  text +=  fruits[i] + "\n";
}
console.log(text);

var fruits1, text1;
fruits1 = ["Banana", "Orange", "Apple", "Mango"];
text1 = "";
fruits.forEach(myFunction);
function myFunction(value) {
  text1 +=  value + "\n";
}
console.log(text1);
*/
/*
var person = {firstName:"John", lastName:"Doe", age:46};
fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(Array.isArray(fruits));
console.log(Array.isArray(person));

console.log(isArray(fruits));
console.log(isArray(person));

function isArray(myArray) {
  if(myArray.constructor.toString().indexOf("Array") > -1){
    return true;
  } else{
    return false;
  }
}
console.log(fruits instanceof Array);
console.log(person instanceof Array);

console.log(fruits);
console.log(fruits.toString());
console.log(fruits.join(" "));
console.log(fruits.pop());
fruits.push("Kiwi");
console.log(fruits.shift());
console.log(fruits);
fruits.unshift("Lemon");
fruits.unshift("Dragon");
fruits[fruits.length] = "Olive";
delete fruits[0];
console.log(fruits);
console.log(fruits.splice(1, 0, "Lemon", "Kiwi"));
console.log(fruits);
console.log(fruits.splice(0, 1));
console.log(fruits);
var veg = ["onion", "chilly"];
var flower = ["Rose", "Henna"];
var arr1 = fruits.concat(veg, flower, ["Jesmine"]);
console.log(arr1);
console.log(arr1.slice(4,arr1.length-1));
console.log(arr1.toString());
arr1.sort();
console.log(arr1.toString());
arr1.reverse();
console.log(arr1.toString());
*/
/*
var points = [40, 100, 1, 5, 25, 10];
console.log(points);
points.sort();
console.log(points);
points.sort(function(a, b){return a - b});
console.log(points);
points.sort(function(a, b){return b - a});
console.log(points);
points.sort(function(a, b){return 0.5 - Math.random()});
console.log(points);
console.log(myArrayMax(points));
console.log(myArrayMin(points));

function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}

console.log(hitArrayMax(points));
console.log(hitArrayMin(points));
function hitArrayMax(arr) {
  var len = arr.length
  var max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}

function hitArrayMin(arr) {
  var len = arr.length
  var min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}
*/
/*
var cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];
console.log(cars);
cars.sort(function(a,b){return b.year - a.year});
console.log(cars);
cars.sort(function(a, b){
  var x = a.type.toLowerCase();
  var y = b.type.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});
console.log(cars);
*/
/*
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.sort(function(a,b){ return a - b;});
numbers.forEach(myFunction);
function myFunction(value, index, array) {
  txt = txt + index + " => "+ value + "\n"; 
}
console.log(txt);

var numbers1 = numbers.map(myFunction1);
function myFunction1(value, index, array) {
  return value * 2;
}
console.log(numbers1); 

var over18 = numbers.filter(myFunction2);
function myFunction2(value, index, array) {
  return value > 18;
}
console.log(over18);

var sum = numbers.reduce(myFunction3);
function myFunction3(total, value, index, array) {
  return total + value;
}
console.log(sum);

var sum1 = numbers.reduce(myFunction4, 100);
function myFunction4(total, value) {
  return total + value;
}
console.log(sum1);

var sum3 = numbers.reduceRight(myFunction5);
function myFunction5(total, value, index, array) {
  return total + value;
}
console.log(sum3);
*/
/*
var numbers = [45, 4, 9, 16, 25];

var allOver18 = numbers.every(myFunction);
function myFunction(value) {
  return value > 18;
}
console.log(numbers);
console.log(allOver18);

var someOver18 = numbers.some(myFunction);
function myFunction(value, index, array) {
  return value > 18;
}
console.log(someOver18);
*/
var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
console.log(a);

var b = fruits.lastIndexOf("Apple");
console.log(b);

var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);
function myFunction(value, index, array) {
  return value > 18;
}
console.log(first);
var firstI = numbers.findIndex(myFunction);
function myFunction(value, index, array) {
  return value > 18;
}
console.log(firstI);


