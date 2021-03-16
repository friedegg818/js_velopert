// 단축 평가 (short-circuit evaluation) 논리 계산법
// 논리 연산자를 조금 더 유용하게 사용하는 방법

true && true; // true
true && false; // fasle
true || false; // true
false || true; // true

// -------------------------------------------

// const dog = {
//   name: "멍멍이"
// };

// function getName(animal) {
//   return animal.name;
// }

// const name = getName(dog);
// console.log(name); // 멍멍이

// getName의 파라미터에 제대로 된 객체가 주어지지 않으면?
// animal 객체가 undefined 이기 때문에, name 값을 조회할 수 없어 위의 return에서 에러가 발생
// const name = getName();
// console.log(name);

// -------------------------------------------

// 함수에서 animal 값이 제대로 주어졌을 때만 name을 조회하고, 그렇지 않을 때는 그냥 undefined를 반환하도록 수정
// const dog = {
//   name: '멍멍이'
// };

// function getName(animal) {
//   if(animal) {
//     return animal.name;
//   }
//   return undefined;
// }

// const name = getName();
// console.log(name);  // undefined

// -------------------------------------------

// && 연산자로 코드 단축시키기
// 특정 값이 유효할때에만 어떤 값을 조회하는 작업을 해야할 때 매우 유용함
const dog = {
  name: "멍멍이"
};

function getName(animal) {
  return animal && animal.name;
}

const name = getName();
console.log(name); // undefined

// A && B
// A가 Truthy 한 값이면 결과값은 B, A가 Falsy 한 값이라면 결과는 A

// -------------------------------------------

// || 연산자로 코드 단축시키기
// 어떤 값이 Falsy 하다면 대체로 사용할 값을 지정해줄 때 매우 유용하게 사용할 수 있음

// const namelessDog = {
//   name: ""
// };

// function getName2(animal) {
//   const name2 = animal && animal.name;
//   if (!name2) {
//     return "이름이 없는 동물입니다.";
//   }
//   return name2;
// }

// const name2 = getName2(namelessDog);
// console.log(name2);

// || 연산자로 단축

const namelessDog = {
  name: ""
};

function getName2(animal) {
  const name2 = animal && animal.name;
  return name2 || "이름이 없는 동물입니다.";
}

const name2 = getName2(namelessDog);
console.log(name2);

// A || B
// A가 Truthy 할 경우 결과는 A, A 가 Falsy 하다면 결과는 B
