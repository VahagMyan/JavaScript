/* var a = +prompt('enter number');
var b = +prompt('enter number');
var c = +prompt('enter number');

if(a > b && a > c) {
    alert(a);
} else if(b > a && b > c) {
    alert(b);
} else {
    alert(c);
} */

/* var bool;
var number = +prompt('Enter number');

var hundreds = (number - number % 100) / 100;
var ones = number % 10;
var tens = (number % 100 - ones) / 10;
console.log(hundreds, tens, ones);

if (hundreds + tens === ones) {
    alert(true);
} else {
    alert(false);
} */

/* var text = 'some text';
console.log(text.length);

var number = prompt('Enter number');
var hundreds = +number[0];
var tens = +number[1];
var ones = +number[2];

if (hundreds + tens === ones) {
    alert(true);
} else {
    alert(false);
}
 */

/* console.log('5' >= '7')
 */

/* for (var y = 0; y < 50; y++){
    if(y % 7 === 0){
        console.log(y);
    }
} */

/* var number = +prompt('Enter number');
var result = 1;

for (var y = 1; y <= number; y++) {
    if(y % 7 === 0){
        result *= y;
        console.log(y, result);
    }
}

console.log(result); */

//console.log(0 / 0);
//console.log(0 / 1);
//console.log(1 / 0);
//console.log(Infinity / 0);
//console.log(0 / Infinity);
//console.log(Infinity * 0);

/* for (var y = 0; y < 10; y+=1){
    console.log(y);
} */


/* for (var y = 0; y < 50; y+= 2) {
    console.log(y);
} */

/* for (var y = 0; y < 50; y++) {
    if (!(y % 2))
    console.log(y);
} */

/* for (var y = 50; y >= 0; y--) {
    console.log(y);
    if(y ===20){
        break;
    }
} */
/* for (var y = 50; y >= 0; y--) {
    if(y ===48){
        continue;
    }
    console.log(y);
} */


/* var arr = ['some text', 755, true];

console.log(arr);
console.log(typeof arr);
console.log(arr[0]); */

/* var arr = [45, 76, -102, 7000]; */

/* for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} */

/* arr[10] = 1;
console.log(arr); */

/* var y = arr.push(355);
var x = arr.pop();

console.log(y, arr); */

/* arr.shift();
arr.unshift(1000);

console.log(arr); */

// var arr = [45, 76, -102, 7000, -8, 11];
/* var result = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        result += arr[i] ** 2;        
    }
} */

// console.log(result);

/* var evenCount = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) evenCount++;
}

console.log(evenCount); */

/* var mresult = 1;
var additionresult = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        mresult *= arr[i];
        additionresult += arr[1];
    }
}

console.log(mresult);
console.log(additionresult); */

/* var arr = [45, 76, -102, 7000, -8, 11, 100, 13];
var result = 0;
var oddCount = 0;
var oddMultipication = 1; */
//var oddAddition = 0;

/* for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
        oddCount++;
        oddAddition += arr[i];
    }
}

result = oddAddition / oddCount;

console.log(oddCount);
console.log(oddAddition);
console.log(result); */

/* for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
        oddCount++;
        oddMultipication += (arr[i] * arr[i]);
    }
}

result = oddMultipication / oddCount;

console.log(oddCount, oddMultipication, result); */
/* 
var y = 5;
var a = y;
y = 20;

console.log(a);

var masiv0 = [2, 3];
var masiv1 = masiv0;
masiv0[0] = 1000;
console.log(masiv1); */

// var arr = [4, 7, 10, 20];

// console.log(arr[arr.length - 1]);
/* var result = ''; */
// for (var i = 1; i <= 10; i++){
//     for (var j = 1; j <= 10; j++){
//         result = i + ' * ' + j + ' = ' + i * j;
//         console.log(result);
//     }

//     console.log('');
//     console.log('');
// }

/* for (var i = 1; i <= 10; i++){
    for (var j = 1; j <= 10; j++){
        result = `${i} * ${j} = ${i* j}`;
        console.log(result);
    }

    console.log('');
    console.log('');
} */

/* var numbers = [7, 2, 88, 11, 102, 3];
var max = numbers [0];
var secondMax = -Infinity;

for (var i = 0; i <= numbers.length; i++) {
    if (max < numbers[i]){
        secondMax = max;
        max = numbers[i];
    }
    if (secondMax < numbers[i] && numbers[i] < max){
        secondMax = numbers[i];
    }
}

console.log(max);
console.log(secondMax); */





/* function sayName0 (name) {
    alert(` my name is ${name}`);
}

console.log (typeof sayName);
sayName0('Exo'); */

/* function sayName1 ( ) {
    alert(` my name is Exo`);
}

console.log (typeof sayName1);
sayName1('Exo'); */

/* function calc (a, b) {
    console.log(a);
    return a + b;
    console.log(b);
}

var y = calc(30, 40);

console.log(y); */

/* var b = 10; 

function f (){
    b = 20;
}
f();

console.log(b); */

/* function f (a, b, c){
    alert(a);
    console.log(b + c);
}
f(40, 7, 10, 50 ,60); */

/* var max = Math.max(7, 9, 20, -5);
console.log(max); */

/* function floor (number){
    return number - (number % 1);
}

var y = floor(2.3);

console.log(y); */

/* console.log(0.1 + 0.3 == 0.3);
alert(0.1 + 0.2); */

/* function round(number){
    if (number % 1 >= 0.5) {
        return number - (number % 1) + 1;
    } else {
        return number - (number % 1);
    }
}

var y = round(4.5);
console.log(y); */

/* var arr = new Array('3');
console.log(arr.length, arr); */


/* var nums = [-1, 300, 12, 110, -901];

for (var i = 0; i < nums.length; i++){
    for (var j = 0; j < nums.length; j++){
        if (nums[i] < nums[j]){
            var container = nums[i];
            nums[i] = nums[j];
            nums[j] = container;
        }
    }
}

console.log(nums); */

/* var f = function() {
    alert('test');
}

f(); */

/* f();
var f; */

/* console.log(a);
var a = 10; */

// f();
// var f = function (){
//     alert();
// }

/* function f(){
    console.log(arguments[0]);
}

f(4, 50); */

/* function f (a, b, c) {
    console.log(f.length);
}

f(); */

/* var human = new Object();

human.name = 'Exo';
human.age = 30;

human.sayName = function(){
    alert(this.name);
}

human.sayName();
console.log(human);
console.log(typeof human); */

/* var human = {
    name : 'Exo',
    age : 30,
    sayName : function(){
        alert(this.name);
    }
}

human.sayName();

human.lastName = 'Exoyan';
human.age = 31; */

/* var arr = [];

function f() {

}

console.log(f instanceof Object); */
// console.log(arr instanceof Object);

/* var obj = {
    age: 30
}

function f() {
    console.log(this.age);
}

f();
obj.sayAge = f;
obj.sayAge ();

console.log(this);

var a = 10;
console.log(window.a); */
/* this.a;

window === this;
console.log(window === this); */

/* var age = 100;
var obj = {
    age: 10,
    sayAge : function () {
        f();
    }
}

function f() {
    console.log(this.age);
}

obj.sayAge(); */

/* function Person(a, b, c) {
    this.firstName = a;
    this.lastName = b;
    this.age = c;
    this.sayFullName = function() {
        console.log(`My name is ${this.firstName} ${this.lastName}`);
    }
}

var human0 = new Person('Exo', 'Exoyan', 40);
human0.sayFullName();
var human1 = new Person('Vazgen', 'Matevosyan', 50);
human1.sayFullName();

console.log(human0.age);
console.log(human1.age);
console.log(human0 instanceof Person);
 */

/* 018 == 18;
console.log(018 == 18);

console.log(0b10);

console.log(0O10);

console.log(0o10);

console.log(0x10);
console.log(0X10); */

/* true.toString();
console.log(typeof true.toString());

var x = 5;

console.log(x.toString()); */

getMax (5, -10, 200, 3);
mek tiv grvelu depqum alert
maximumi arjeqy gtnenq
ete tvic baci urish ban grenq, nshvi vor tiv chi
getMax(5);
NaN
    undefined
isNaN(NaN);

constructor sarqenq, vor erb grenq 
var obj = new F(); normal ashxati,
bayc ete
F() ete kanchenq arandzin aranc new-i sxal beri

sarqel custom Math absolute floor round max min

ham el sortavorman xndir lucel