// 비구조화 할당 (구조분해) 문법

// 비구조화 문할당 문법을 사용하면, 객체 안에 있는 값을 추출하여 변수나 상수로 바로 선언할 수 있음
const object = { a: 1, b: 2 };

const { a, b } = object;

console.log(a); // 1
console.log(b); // 2

// ----------------------------------------------

// 함수의 파라미터에서 비구조화 할당
const fobject = { a: 1, b: 2 };

function print({ a, b }) {
  console.log(a);
  console.log(b);
}

print(fobject);

// 위의 코드에서 만약 b의 값이 주어지지 않았다면?
const fobject2 = { a: 1 };

print(fobject2); // 1
// undefined <- 두번째 출력에서 나타남

// 비구조화 할당시 기본값 설정
const sobject = { a: 1 };

function sprint({ a, b = 2 }) {
  console.log(a);
  console.log(b);
}

sprint(sobject); // 1 // 2

// 함수의 파라미터가 아니어도 가능
const sobject2 = { a: 1 };

const { a, b = 2 } = sobject2;

console.log(a); // 1
console.log(b); // 2

// ----------------------------------------------

// 비구조화 할당시 이름 바꾸기
// 비구조화 할당을 하는 과정에서 선언할 값의 이름을 바꾸는 방법
const animal = {
  name: "멍멍이",
  type: "개"
};

const nickname = animal.name;

console.log(nickname); // 멍멍이

// animal.name 값을 nickname 값에 담고 있는데, 이름이 서로 다르므로
// : 문자를 사용하여 이름을 바꿔줌
const animal2 = {
  name: "멍멍이",
  type: "개"
};

const { name: nickname } = animal2; // anumal2 객체 안에 있는 name을 nickname이라고 선언하겠다.
console.log(nickname);

// ----------------------------------------------

// 배열 비구조화 할당
const array = [1, 2];
const [one, two] = array;

console.log(one);
console.log(two);

// 기본값 지정도 가능
const array2 = [1];
const [one, two = 2] = array;

console.log(one);
console.log(two);

// ----------------------------------------------

// 깊은 값 비구조화 할당
// 객체의 깊숙한 곳에 들어있는 값을 거내보기
const deepObject = {
  state: {
    information: {
      name: "ssong",
      languages: ["korean", "english", "chinese"]
    }
  },
  value: 5
};

// name, lanugages, value 값들을 밖으로 꺼내기
// 1) 비구조화 할당 문법을 두번 사용하기
const { name, languages } = deepObject.state.information;
const { value } = deepObject;

const extracted = {
  name,
  languages,
  value
};
// ↑ 이 extracted 객체를 선언하는 코드는
// const extracted = {
//   name: name,
//   languages: langueages,
//   value: value
// }
// 와 동일함 (key 이름으로 선언된 값이 존재한다면, 바로 매칭시켜주는 문법)

// 2) 한번에 모두 추출
const {
  state: {
    information: { name, languages }
  },
  value
} = deepObject;

const extracted = {
  name,
  languages,
  value
};

console.log(extracted);
