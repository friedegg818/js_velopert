// 삼항 연산자
// 조건 ? true 일 때 : false 일 때

// const array = [];
// let text = '';
// if (array.length === 0) {
//   text = '배열이 비어있습니다.';
// } else {
//   text = '배열이 비어있지 않습니다.';
// }
// console.log(text);

const array = [];
let text =
  array.length === 0 ? "배열이 비어있습니다" : "배열이 비어있지 않습니다";

console.log(text); // 위와 동일

// 라인의 길이가 너무 길어지면 다음과 같이 작성하기도 함
// const array = [];
// let text = array.length === 0;
//    ? '배열이 비어있습니다'
//    : '배열이 비어있지 않습니다';

// console.log(text);
