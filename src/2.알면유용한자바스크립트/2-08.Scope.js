// Scope
// 변수 혹은 함수를 선언하게 될 때 해당 변수 또는 함수가 유효한 범위
// 1. Global (전역) Scope - 코드의 모든 범위에서 사용 가능
// 2. Function (함수) Scope - 함수 안에서만 사용 가능
// 3. Block (불록) Scope - if, for, switch 등 특정 블록 내부에서만 사용 가능

const value = "hello!"; // Global Scope로 선언된 값, 어디에서든지 사용 가능

function myFunction() {
  console.log("myFunction: ");
  console.log(value);
}

function otherFunction() {
  console.log("otherFunction: ");
  const value = "bye!"; // Function Scope , otherFunction 내부에서만 유효한 값, 기존에 Global Scope로 선언된 value 값이 바뀌지 않음
  console.log(value);
}

myFunction(); // myFunction:  hello!
otherFunction(); // otherFunction:   bye!

console.log("global scope: "); // global scope:
console.log(value); // hello!

// ----------------------------------------------------

const value = "hello!";

function myFunction() {
  const value = "bye!";
  const anotherValue = "world";
  function functionInside() {
    console.log("functionInside: ");
    console.log(value);
    console.log(anotherValue);
  }
  functionInside();
}

myFunction(); // functionInside:   bye!   world
console.log("global scope: ");
console.log(value); // hello!
console.log(anotherValue); // error , myFunction 밖에서는 anotherValue 조회 불가

// ---------------------------------------------------------

const value = "hello!"; // const로 선언한 값은 Block Scope로 선언이 됨
// 따라서 if문 같은 블록 내에서 새로운 변수/상수를 선언하면 해당 블록 내부에서만 사용 가능하며,
// 블록 밖의 범위에서 똑같은 이름을 가진 값이 있어도 영향을 주지 않음
// let 도 마찬가지

function myFunction() {
  const value = "bye!";
  if (true) {
    const value = "world";
    console.log("block scope: ");
    console.log(value);
  }
  console.log("function scope: ");
  console.log(value);
}

myFunction(); // block scope:   world     function scope:   bye!
console.log("global scope: ");
console.log(value); // hello!

// ---------------------------------------------------------

var value = "hello!"; // var는 Function Scope로 선언이 되므로, if문 블록 내부에서 선언한 value 값이 블록 밖의 value에도 영향을 미치게 됨

function myFunction() {
  var value = "bye!";
  if (true) {
    var value = "world";
    console.log("block scope: ");
    console.log(value);
  }
  console.log("function scope: ");
  console.log(value);
}

myFunction(); // blcok scope:    world    function scope:   world
console.log("global scope: ");
console.log(value); // hello!

// ------------------------------------------------------------

// Hoisting
// 자바스크립트에서 아직 선언되지 않은 함수/변수를 끌어올려서 사용할 수 있는 자바스크립트의 작동 방식
myFunction(); // myFunction 함수를 선언하기 전에 호출했지만, 정상적으로 코드 작동

function myFunction() {
  console.log("hello world!");
}

// -------------

console.log(number); // undefined
var number = 2;

// 자바스크립트 엔진이 코드 해석 시 다음과 같은 순서로 받아들임
var number;
console.log(number);
number = 2;

// var 는 hoisting이 발생하지만, const와 let은 hoisting이 발생하지 않고 에러 발생

// Hoisting은 자바스크립트 엔진이 가지고 있는 성질이며, 일부러 할 필요는 없지만 방지하는 것이 좋음
// Hoisting이 발생하는 코드는 이해하기 어렵기 때문에
// ---> var 대신 const, let 위주로 사용하기
