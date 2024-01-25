// console.log("Hello world");
// let name = "Titi";
// console.log(name);
// name = "Ruth";
// console.log(name);
// let age = 57;
// let newage = 13;
// let mystring= "hi";
// let otherstring= "hello";
// let backtick= "hi again";
// let num = 31;
// let bol = true;
// let undefinedVariable;
// let emptyValue = null;
// // console.log(percentage);
// console.log(myString);
// console.log(num);
// console.log(otherString);
// console.log(backtick);
// console.log(bol);
// console.log(undefinedVariable);
// console.log(emptyValue);
// let percentage = newAge/age;
// console.log(typeof percentage);
// console.log(typeof myString);
// console.log(typeof myotherString);
// console.log(typeof backtick);
// console.log(typeof num);
// console.log(typeof bol);
// console.log(typeof stringbol);
// console.log(typeof stringNum);
// console.log(typeof undefinedVariable);
// console.log(typeof emptyValue);

// var test ="testing";
// console.log(test);


let string ="Javascript";
firstLetter = string[3];
console.log(firstLetter);
console.log(string.length);
console.log(string.length -1);

console.log(string.toUpperCase());
console.log(string.toLowerCase());

let text = "programming";
console.log(text.substring(1, 4));
console.log(text.substr(1, 4));

let day = "30 Days of Javascript";
console.log(day.split());
console.log(day.split(" "));

console.log(day.includes());

let title = "Javascript";
let lastIndex = (title.length - 1);
console.log(title.charAt(0));
console.log(title.indexOf("j"));
console.log(day.replace("days","Month"));

// Assignment operators
let numOne =5;
let numTwo =2;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
let powerOf = numOne ** numTwo;
console.log(sum, diff, mult, remainder, powerOf);

// Comparison operators
let first = 3;
let second = 2;
console.log(first > second);
console.log(first < second);
console.log(first = second);
console.log(first === second);
console.log(first !== second);
console.log(first <= second);

console.log("3" == 3);
console.log("3" == 3);

// console.log()
console.log(1 == true);
console.log(0 ==true);
console.log(0 == false);
console.log("0" === false);

// Logical Operators
let check = 4 > 3 && 10 > 5;
let see = 4 > 3 && 5 > 10;
let numThree = 4 < 3 && 5 < 4;
// true and true = true;
// true and false = false;
// false and false = false;
console.log(check, see);

let compare = 4 > 3 || 10 > 5;
let value = 4 > 3 || 10 > 5;
let answer = 4 < 3 || 10 < 5;

// true or true = true;
// true or false = false;
// false or false = false;
console.log(compare, value,answer);

// Negation Operators
let negate = !(4 < 3);
let result = !true;
console.log(result,negate);

// Increment and Decrement Operators
let count = 20;
console.log(++count);
console.log(count++);
let num = 20;
num--;
console.log(num);
//console.log(--num);
//console.log(num--);
console.log(num);

const mySymbol = Symbol();
console.log(mySymbol);
const newSymbol = Symbol("Hi");
console.log(newSymbol);
const love = "I Love";
const days = "30 days of Javascript";
const sentence =love + " " + "studyling "  +  days;
console.log(sentence);

const backtickSentence= '${love} studyling ${day}';
console.log(backtickSentence);
// love = love + "no more"//
console.log(love[2]);
console.log(love);
const myArray = ["Rukaya", "Marvelous", "Grace", "Munirah"];
console.log(myArray);
myArray[0] = "Salamat";
console.log(myArray);

const four =4;
console.log(Math.sqrt(four));
console.log(Math.pow(four,2));
console.log(Math.PI);
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random() * 1);
console.log(Math.max(3, 4, 9, 0));

let random=Math.random() * 10 + 1;


// console.log(Math.floor());
const checks = random <=10 ? random : 10;
    console.log(checks);

    const pi = Math.PI;
    console.log(Math.random());
    console.log(Math.random());
    console.log(Math.random());
    console.log(Math.random());
 

    // Window operator

    let greetings = "Hello";
    alert('${greetings}');

    let name = prompt("Enter your name");
    console.log('${name}');

let firstNumber = prompt("Enter number");//prompt are naturally strings
let secondNumber = prompt("Enter number");
 //let output = firstNumber + secondNumber; the number is seen as strings to make the browser see it has number and it's done in three ways
 let output = Number(firstNumber) + Number 
 (secondNumber);
 console.log(output);

 const agree = confirm("Are you sure you want to subscribe?");
 console.log(agree);

//Regex
let number = "I love Javascript and i believe you also love javascript";
let res = /javascript/gi;
console.log(number.match(res))

const sentenc = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let inequalities = /[@#$%^&*+?]/g;
 console.log(sentenc.replace( inequalities, ""));


 let extract = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month";
 let extractNum = /\d+/gi;
 let a = extract.match(extractNum);
 console.log(a);
 let ai = +a[0] *12;
 console.log(ai);
 let bi = +a[2] *12;
 console.log(bi);
 let outputs = ai + bi + 1000;
 console.log(outputs);


 // Ternary Operators

 // let isMan = true;
// isMan ? console.log("Yes, he is a man") :
// console.log("No, he is not a man");

let isMan = true;
if (isMan){
 console.log("Yes, he is a man");
}
else{
    console.log("No, he is not a man");
}
let b = 5;
if (b < 5){
    console.log('Not correct');
}
else if (b = 5){
    console.log("It's ");
}
else if (b > 5){
    console.log("It's wrong");
}
else{
    console.log("Try again");
}

let today = prompt('what day is today');
let dayss = today.toLocaleLowerCase()
switch (dayss) {
    case 'monday':
        console.log('Today is Monday')
        break;
        case 'tuesday':
        console.log('Today is Tonday')
        break;
        case 'wednesday':
        console.log('Today is Wednesday')
        break;
        case 'thursday':
        console.log('Today is Thursday')
        break;
        case 'friday':
        console.log('Today is Friday')
        break;
        default:
            console.log("It's Not a day");
}






