// 변수와 상수
let something = 1; // 선언 - 특정 이름에 특정 값을 설정하는 것
console.log(something);

// 변수
// 바뀔 수 있는 값
let value = 1;
console.log(value);
value = 2; // 한번 값을 선언하고 난 후 바꿀 수 있음
console.log(value);
// let value = 2;  오류. 한 번 선언했으면 똑같은 이름으로 선언 불가능

// 상수
// 한 번 선언하고 값이 바뀌지 않는 값. 즉, 값이 고정적
const a = 1;
// a = 2; 오류. 상수를 선언하고 나면 값을 바꿀 수 없음
console.log(a);

// 데이터 타입
// 숫자
let value2 = 1;

// 문자열
let text = "hello";
let name = "자바자바김자바";

// Boolean
let good = true;
let loading = false;

// null, undefined
const friend = null; // 값이 없을 경우
let criminal;
console.log(criminal); // -> undefined. 아직 값이 설정되지 않은 것

// 둘 다 값이 없음을 의미하는 것은 맞지만,
// null은 우리가 없다고 고의적으로 설정하는 값
// undefined는 우리가 설정을 하지 않았기 때문에 없는 값
