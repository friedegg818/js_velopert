// 반복문 - 특정 작업을 반복적으로 사용할 수 있는 구문

// for
// 특정 값에 변화를 주어가면서 정한 조건이 만족한다면 계속해서 반복
for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 10; i > 0; i--) {
  console.log(i);
}

// 배열과 for
const names = ["애비", "레이", "나나나"];

for (let i = 0; i < names.length; i++) {  // 배열 속 요소들을 하나씩 나열 
  console.log(names[i]);
}


// while - 특정 조건이 참이라면 계속해서 반복 
// 언젠가는 조건이 거짓이 되도록 설정해야 함 (그렇지 않으면 무한 반복)

let i = 0;
while (i < 10) {
  console.log(i);
  i++;

// for... of  - 배열에 관한 반복문을 돌리기 위해 만들어진 반복문 
let numbers = [10, 20, 30, 40, 50]; 
for(let number of numbers) {
  console.log(number);
}

// for...in - 객체를 위한 반복문 

// 객체의 정보를 배열 형태로 받아오기 
const doggy = {
  name: '멍멍이',
  sound: '멍멍', 
  age: 2
}; 

console.log(Object.entries(doggy));  // [[키, 값],[키, 값]] 형태의 배열로 반환
console.log(Object.keys(doggy));  // [키, 키, 키] 형태의 배열로 반환
console.log(Object.values(doggy)); // [값, 값, 값] 형태의 배열로 반환 

for (let key in doggy) {
  console.log(`${key} : ${doggy[key]}`);
}

// break, continue 
for (let i = 0; i < 10; i++) {
  if i === 2) continue;   // 다음 루프를 실행
  console.log(i);
  if (i === 5) break;    // 반복문 끝내기 
}