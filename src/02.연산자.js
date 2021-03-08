// 연산자
// 프로그래밍 언어에서 특정 연산을 하도록 하는 문자
let value = 1; // 변수 선언
value = 2; // '=' 대입 연산자

// 산술 연산자
let a = 1 + 2;
console.log(a);

let b = 1 + 2 - (3 * 4) / 4;
console.log(b);

let c = 1;
c++; // c -> ++
++c; // ++ -> c
console.log(c);

// 대입 연산자
let d = 1;
d = d + 3;

let e = 1;
e += 3; // 대입 연산자 사용

// 논리 연산자
// ! (NOT), && (AND), || (OR)

// NOT
// true -> false, false -> true 로
const t = !true;
console.log(t);

const f = !false;
console.log(f);

// AND
// 양쪽의 값이 둘 다 true 일때만 결과물이 true
const g = true && true;

// 아래는 모두 false
let h = false && false;
h = false && true;
h = true && false;

// OR
// 양쪽의 값 중 하나라도 true 라면 결과물이 true
// 두 값이 둘 다 false 일 때에만 false
let i = true || false;
i = false || true;
i = true || true;

// false
let j = false || false;

// 연산 순서
// 논리 연산자는 NOT -> AND -> OR 순대로 계산
const cal = !((true && false) || (true && false) || !false);
// !((true && false) || (true && false) || true); - 뒤의 NOT 처리
// !(false || false || true); - AND 처리
// !true; - OR을 우측에서 좌측으로 처리
// false - 가장 바깥의 NOT 처리

// 비교 연산자
// 두 값을 비교할 때 사용
const aa = 1;
const bb = 1;
const equals = aa === bb; // === -> 두 값이 일치하는지 확인
console.log(equals);

// == -> 로도 비교할 수 있지만, 이 경우에는 타입 검사까지는 하지 않음
// === 를 사용하는 것을 권장함

// 두 값이 일치하지 않는지 확인
const vvalue = "a" !== "b";

// 크고 작음
const aaa = 10;
const bbb = 15;
const ccc = 15;

console.log(a < b); // true;
console.log(b > a); // true;
console.log(b >= c); // true;
console.log(a <= c); // true;
console.log(b < c); // false;

// 문자열 붙이기
const hi = "안녕";
const yo = "하세요";
console.log(a + b); // 안녕하세요
