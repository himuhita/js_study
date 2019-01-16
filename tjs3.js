/*
console.log(Math.PI);
console.log(Math.round(1.6));
console.log(Math.round(1.49));
console.log(Math.pow(10,3));
console.log(Math.sqrt(100));
console.log(Math.abs(-4.7));
console.log(Math.ceil(4.4));
console.log(Math.floor(4.4));
console.log(Math.sin(90 * Math.PI / 180));
console.log(Math.cos(0 * Math.PI / 180));
console.log(Math.min(0, 150, 30, 20, -8, -200));
console.log(Math.max(0, 150, 30, 20, -8, -200));
console.log(Math.random());
console.log("Math.E: " + Math.E + "\n" +
            "Math.PI: " + Math.PI + "\n" +
            "Math.SQRT2: " + Math.SQRT2 + "\n" +
            "Math.SQRT1_2: " + Math.SQRT1_2 + "\n" +
            "Math.LN2: " + Math.LN2 + "\n" +
            "Math.LN10: " + Math.LN10 + "\n" +
            "Math.LOG2E: " + Math.LOG2E + "\n" +
            "Math.Log10E: " + Math.LOG10E + "\n");

console.log(Math.floor(Math.random() * 10000));

console.log(getRndInteger(10, 78));
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
*/
/*
console.log(10 > 9);
console.log(Boolean(10 > 9));

var age = 19;
age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}
console.log(voteable);
*/
/*
var time = 17;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting);
*/
switch (new Date().getDay()) {
  default: 
    day = "Looking forward to the Weekend";
    break;
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log(day);

var x = 1;
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}
console.log(text);

