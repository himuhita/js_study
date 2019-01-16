console.log(Date());
/*
var d = new Date();
console.log(d);
var d0 = new Date(0);
var d1 = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(d1);
console.log(d0);
var d2 = new Date(-100000000000);
console.log(d.toString());
console.log(d.toUTCString());
console.log(d.toDateString());
var msec = Date.parse("December 31, 2018");
console.log(msec);
var d3 = new Date(msec);
console.log(d3);
*/
/*
var d = new Date();
console.log(d);
console.log(d.getFullYear());
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(months[d.getMonth()]);
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
console.log(d.getTime());
var months = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(months[d.getDay()]);
console.log(Date.now());
console.log("UTC");
console.log(d.getUTCDate());
console.log(d.getUTCDay());
console.log(d.getUTCFullYear());
console.log(d.getUTCHours());
console.log(d.getUTCMilliseconds());
console.log(d.getUTCMinutes());
console.log(d.getUTCMonth());
console.log(d.getUTCSeconds());
*/
var d = new Date();
d.setDate(12);
d.setMonth(11);
d.setFullYear(2012);
d.setDate(d.getDate() + 50);
d.setHours(22);
d.setMinutes(30);
d.setSeconds(30);
console.log(d);

