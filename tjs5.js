/*
var str = "Visit W3Schools";
var n = str.search(/w3schools/i);
console.log(n);
var res = str.replace(/w3schools/i, "Microsoft");
console.log(res);

var patt1 = /w3schools/i;
var result = str.match(patt1);
console.log(result);

var str1 = "Is this all there is?";
var patt2 = /is/g;
var result1 = str1.match(patt2);
console.log(result1);

var str3 = "\nIs th\nis it?";
var patt3 = /^is/m;
var result3 = str3.match(patt3);
console.log(result3);

var str4 = "Is this all there is?";
var patt4 = /[a-i]/g; 
var result4 = str4.match(patt4);
console.log(result4);

var str5 = "123456789";
var patt5 = /[2-4]/g;
var result5 = str5.match(patt5);
console.log(result5);

var str6 = "re, green, red, green, gren, gr, blue, yellow";
var patt6 = /(red|green|gr)/g;
var result6 = str6.match(patt6);
console.log(result6);

var str7 = "Give 100%! 6"; 
var patt7 = /\d/g;
var result7 = str7.match(patt7);
console.log(result7);

var str8 = "Is this all there is?";
var patt8 = /\s/g;
var result8 = str8.match(patt8);
console.log(result8);

var str9 = "Visit W3Schools"; 
var patt9 = /\bV/g;
var result9 = str9.match(patt9);
console.log(result9);

var str10 = "Visit W3Schools. Hello World!"; 
var patt10 = /\u0057/g;
var result10 = str10.match(patt10);
console.log(result10);

var str11 = "Hellooo World! Hello W3Schools!"; 
var patt11 = /e+/g;
var result11 = str11.match(patt11);
console.log(result11);
*/
//var str12 = "Hellooo World! Hello W3Schools!"; 
//var patt12 = /lo*/g;
//var result12 = str12.match(patt12);
//console.log(result12);
/*
var str13 = "1, 100 or 1000?";
var patt13 = /10?/g;
var result13 = str13.match(patt13);
console.log(result13);

var str14 = "The best things in life are free!";
var result14 = /the/i.test(str14);
var result15 = /gs/i.exec(str14);
console.log(result14);
console.log(result15);
*/
var message, x;
  
  x = readline();
  try { 
    if(x == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  }
  catch(err) {
    message = "Input is " + err;
  }
  console.log(message);