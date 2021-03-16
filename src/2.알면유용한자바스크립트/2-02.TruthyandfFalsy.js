// // Truthy and Falsy
// // 자바스크립트 문법까지는 아니지만 알아둬야 하는 개념
// function print(person) {
//   console.log(person.name);
// }

// const person = {
//   name: "John"
// };

// print(person);

// // 위의 코드에서는 print 함수의 파라미터가 비어진 채로 실행되면 에러가 발생함
// // print(); <- 에러

// // print 함수에서 object가 주어지지 않았다면, 문제가 있다고 콘솔에 출력하기
// function print2(person) {
//   if (person === undefined) {
//     return;
//   }
//   console.log(person.name);
// }

// const person2 = {
//   name: 'John'
// };

// print();

// // print 함수의 object가 주어지지 않았거나, 주어진 값이 null일 때
// function print3(person) {
//   if (person === undefined || person === null) {
//     console.log('person이 없습니다!');
//     return;
//   }
//   console.log(person.name);
// }

// const person3 = null;
// print3(person3);

// 위의 코드는 다음과 같이 축약하여 작성 가능
function print(person) {
  if (!person) {
    console.log("person이 없네요");
    return;
  }

  console.log(person.name);
}

const person = null;
print(person);

// undefined 와 null 은 Falsy 한 것으로, Falsy 한 값 앞에 느낌표를 붙여주면 true로 전환됨

// Falsy 한 값
console.log(!undefined); // true
console.log(!null); // true
console.log(!0);
console.log(!"");
console.log(!NaN); // Not a Number

// Falsy 한 것 외의 값은 모두 Truthy
console.log(!3);
console.log(!"hello");
console.log(!["array?"]);
console.log(![]);
console.log(!{ value: 1 });

// if 문에서 Truthy, Falsy 사용하기
const value = { a: 1 };
if (value) {
  console.log("value 가 Truthy 하네요.");
}

// 특정 값이 Truthy 한 값이라면 true, 그렇지 않다면 false로 값을 표현하기
// const tfvalue = { a : 1 };
// const truthy = value ? true : false;

// 더 쉽게 표현
const tfvalue = { a: 1 };
const truthy = !!value;
