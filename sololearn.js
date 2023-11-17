/*
//Assignment operators
let score = 100;
// the classic Assignment operators looks like in the next line
score = score + 10;
//this how it looks shortened 
score+=10;
console.log(score);
// we should see 120 in the console

//other examples
let x = 15;
x+=5; // x = x+5;
console.log(x);
x-=5; // x = x-5;
console.log(x);
x*=5; // x = x*5;
console.log(x);
x/=5; // x = x/5;
console.log(x);
x%=5; // x = x%5;

let y = 8;
y++;
y/=3;
console.log(y);
*/

//Bank Account Balance
//let balance = parseInt(readLine(), 10);
//let withdraw = parseInt(readLine(), 10);
//correct answer
//console.log(balance-=withdraw);




//Escape Character


//console.log('I\'m happy');
//console.log("She said \"Yes!\"");
//console.log("One \nTwo \nThree");




//Template Literals = Шаблонные литералы


//console.log(`I'm happy, she said "Yes"!`);
/*let msg = `Hey! Are you sololearning?
Isn't it awesome?
seems that the answer is "YES!"
`;
console.log(msg);
*/

/*let name = "John";
let text = `Welcome, ${name}`;
console.log(text);
*/



//Concatenation = Конкатенация 

//console.log("Java" + 'Script');




//Booleans

//let score = 85;
//console.log(score>99);
/*
равно ==
не равно !=
больше >
меньше <
больше или равно >=
меньше или равно <=
*/

/*
let purchase = 2556;
let name = `Bob`

if (purchase>=1500){
    console.log(`Hello, dear ${name}! You have got a Discount! it is 10% because your purchaise is valid \$${purchase}`);
    if (purchase>1551){
        console.log(`Congratulations ${name}!
        keep it up!`);
    }
}
else if (purchase<=1000){
    console.log(`Hello, dear ${name}! You haven't got a Discount! Because your purchaise is valid \$${purchase}`);
}
else if(purchase<=1499){
    console.log(`Hello, dear ${name}! You have got a Discount! it is 5% because your purchaise is valid \$${purchase}`);
}
else {
console.log(`Dear ${name}, it isn't your day, sorry.`);
}
*/




//the switch statement = Инструкция switch

/*
let choice = "aj";

switch(choice){
  case "a"://match!
    console.log("Sports");
    break;
  case "b":
    console.log("Business");
    break;
  case "c":
    console.log("Technology");
    break;
    default: 
    console.log(`nothing to see here, yet`);
}
*/



//Ternary operator =

/*
let age = 22;
let isAdult = (age < 18) ? `Too young, because your age is ${age}`: `${age} is Old enough`;
console.log(isAdult);
*/
/*
let bill = 1800;
bill = (bill >= 1500) ? bill * 0.85 : bill;
console.log(bill);
*/





//The for loop = Циклы 

/*
for (let i = 0; i <= 2; i++) { 
    console.log(i);
  }


let x = 0;
for(let i=0;i<3;i++) {
 x+=i;
}
console.log(x);

let msg = "hello";
for (let count = 0; count>=3; count--){
        console.log(msg);
}
*/



//The while loop = Цикл while 

/*
let i = 50;
while(i>=0) {
  console.log(i);
  i--;
}
*/




//The do...while loop = Цикл do...while 

/*
let i=10;
do {  
    console.log(i);
    i--;  
}
while (i>=0); 
*/



//The break statement = Инструкция break 
/*
for(let i=0; i<10;i++) {
    if(i==8) {
      break;
    }
    console.log(i);
  }


  let num = 1;

while(num<=10){
    if(num == 3){
        break;
    }
    console.log(num);
    num++;
}
*/




//continue 

/*
for(let i=0;i<20;i++) {
    if(i == 5) {
      continue;
    }
    console.log(i);
  }
  */

  /*
  let sum=0; 
  for(let i=1; i<=3; i++) {
    if (i == 2) {
      continue; 
    }
    sum += i;
  }
  console.log(sum);
  
  */
/*
  for(let i=1; i<=10000000;i*=10) {
    if(i==1000000) {
      break;
    }
    console.log(i);
  }  */

  /*
  let x = 0;
  while (x<100){
    x+=4;
    console.log(x);
  }
  */

/*
  for(i = 1; i<7; i++){
    if(i == 4){
        break;
    }
    console.log(i);
}
*/




//Functions = Функции

/*
function login() {
  console.log("Hi!");
}

login();
login();
login();
login();
*/


//Parameters = Параметры

/*
//function login(user) {
  //console.log("Hi, "+user);
//}
let name = "Hero"
//login(name);


function discount(purchase){
  if (purchase>=1500){
      purchase*=0.85;
  }
  console.log(`Hi ${name} you spent \$${purchase}`);
}

discount(1900);
discount(1200);
discount(0.1);
discount(-1900);
discount(1551);
*/




//Returning from functions = Возвращение значений функциями 

/*
function add(x,y){
  return x+y;
}

let result = add(5,6);
let other = add(1,1);
console.log(result + other);
/*

/*
function divide(x,y){
  return x/y;
}

divide(6,3);
*/



// Shift operators
/*
var a=4, b=4;
console.log(a<<b);
console.log(a>>b);
console.log(a**b);*/




// JS intermediate
//JavaScript Objects

var person = {
  name: "Vlad", age: 31, 
  favColor: "green", height: 183
 };
 console.log(`Hello ${person.name} your fav color is ${person.favColor}`);
 document.write(`Hello ${person.name} your fav color is ${person.favColor}`);