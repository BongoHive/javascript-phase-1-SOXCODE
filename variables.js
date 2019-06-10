var birthYear = 1986;
var futureYear  = 2025;
var age  = futureYear - birthYear;

console.log('I will be either ' + age + ' or ' + (age - 1));


var currentAge = 28;
var maxAge = 100;
var numPerDay = 70;
var totalNeeded = (numPerDay * 365) * (maxAge - currentAge);
var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
console.log(message);
