// 함수의 기본 파라미터
// 기본 파라미터 설정하기

// 원의 넓이를 구하는 함수
function calculateCircleArea(r) {
  return Math.PI * r * r; // Math.PI -> 원주율
}

const area = calculateCircleArea(4);
console.log(area); // 50.265482...

// 이 함수의 r 값을 넣어주지 않으면?
const area2 = calculateCircleArea();
console.log(area2); // NaN -> undefined * undefined 처럼 숫자가 아닌 값에 곱셈을 하니 이상해짐

// 함수에서 r 값이 주어지지 않으면 기본 값을 1로 사용하도록 설정 - ES5에서 최선
function calculateCircleArea1(r) {
  const radius = r || 1;
  return Math.PI * radius * radius;
}

const area3 = calculateCircleArea1();
console.log(area3); // 3.14159265458979

// ES6 에서는 이렇게도 가능
function calculateCircleArea2(r = 1) {
  return Math.PI * r * r;
}

const area4 = calculateCircleArea2();
console.log(area4); // 3.14159265358979

// 화살표 함수에서도 사용 가능~
const calculateCircleArea3 = (r = 1) => Math.PI * r * r;

const area5 = calculateCircleArea3();
console.log(area5); // 3.14159265358979
