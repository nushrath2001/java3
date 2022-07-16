// ES6 features
// ES6 or the ECMAScript 2015 is the 6th and major edition of the ECMAScript language specification standard. 

// 1. let
// let allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used, unlike the var keyword, which declares a variable globally, or locally to an entire function regardless of block scope. we use let bcoz we may write var many times with samr var name then it get undefined output but in let it wont 
// eg: variable
function greet() {
    var a = 'hello';
    console.log(a);
}

greet();

// Let

    function greet() {
        let a='hello'
        console.log(a);
    }

    greet();


    // 2. const
    // it cannot be reassigned

    // You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

// 3. function and function expression

function Add(a, b){
    let c = a + b;
    return c;   
}
console.log("Addition : " + Add(7, 4));

// function expression

var add = function(a, b){
    let c = a + b;
    return c;
}

console.log("addition: " + add(7, 4));

// arrow function
// without arrow
var a = function(hello) {
    return "Hello World!";
  }
console.log(a);
//   with

var a = (hello) => {
    return "Hello World!";
  }

  console.log(a);
  

//   temp literals
var string1= "muskan"
var string2= "nushrath"
var string3 = "mahi"
var temp =`${string1} is strict with ${string2} & ${string3} and ${string3} is shorter in our group`;
console.log(temp);

// destructing array 
//   without
 const vehicles = ['mustang', 'f-150', 'expedition'];
 const car = vehicles[1];
 const truck = vehicles[2];
 const suv = vehicles[3];
  
   console.log(vehicles);

//   with
  const vehicle = ['mustang', 'f-150', 'expedition'];
  

  const [car1, truck1, suv1] = vehicle;
  console.log(vehicle);

