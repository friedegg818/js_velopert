// 함수
const a = 1;
const b = 2;

function add(a, b) {
  return a + b;
  console.log("호출이 되지 않는 코드 입니다.");
}

const sum = add(1, 2);
console.log(sum);

//

function hello(name) {
  console.log("Hello, " + name + "!");
}
hello("ray");

// 템플릿 리터럴 사용하기
function hello2(name) {
  console.log(`Hello, ${name}!`);
}
hello("abbey");

// 점수를 성적 등급으로 반환하기
function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score === 90) {
    return "B+";
  } else if (score >= 80) {
    return "B";
  } else if (score === 79) {
    return "C+";
  } else if (score >= 70) {
    return "C";
  } else if (score === 60) {
    return "D+";
  } else if (score >= 59) {
    return "D";
  } else {
    return "F";
  }
}

const greade = getGrade(95);
console.log(greade);

// 화살표 함수
// 함수를 선언하는 방식 중 또 다른 방법
// function 키워드 대신에 => 문자 사용하여 함수 구현
// 함수의 파라미터 => 코드 블록
const add2 = (a, b) => {
  return a + b;
};

console.log(add2(1, 2));

// 코드 블록 내부에서 바로 return을 하는 경우는 줄여서 쓸 수 있음
const add3 = (a, b) => a + b;
console.log(add(1, 2));
