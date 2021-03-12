// 배열 내장함수

// forEach
const superheroes = ["아이언맨", "캡틴 아메리카", "토르", "블랙 위도우"];

// 배열 안에 있는 모든 원소들을 출력 하기
// for문 사용
for (let i = 0; i < superheroes.length; i++) {
  console.log(superheroes[i]);
}

// forEach 함수 이용
superheroes.forEach((hero) => {
  console.log(hero);
});

//

// map
// 배열 안의 각 원소를 변환할 때 사용
const array = [1, 2, 3, 4, 5, 6, 7, 8];

// 배열 안의 모든 숫자를 제곱해서 새로운 배열을 만들기
// for문 사용
const squared = [];
for (let i = 0; i < array.length; i++) {
  squared.push(array[i] * array[i]);
}

console.log(squared);

// forEach 함수 이용
const squared2 = [];
array.forEach((n) => {
  squared2.push(n * n);
});

console.log(squared2);

// map 사용
const square = (n) => n * n;
const squared3 = array.map(square);
console.log(squared);

//

// indexOf
// 원하는 항목이 몇 번째 원소인지 찾아주는 함수
const index = superheroes.indexOf("토르");
console.log(index); // 2

// findeIndex
// 배열 안에 있는 값이 객체이거나, 배열일 때 indexOf 대신 사용
const todos = [
  {
    id: 1,
    text: "자바스크립트 입문",
    done: true
  },
  {
    id: 2,
    text: "함수 배우기",
    done: true
  },
  {
    id: 3,
    text: "객체와 배열 배우기",
    done: true
  },
  {
    id: 4,
    text: "배열 내장함수 배우기",
    done: false
  }
];

const findex = todos.findIndex((todo) => todo.id === 3);
console.log(findex); // 2

// find
// 찾아낸 값 자체를 반환
const todo = todos.find((todo) => todo.id === 3);
console.log(todo); // {id: 3, text: "객체와 배열 배우기", done: true}

//

// filter
// 배열에서 특정 조건을 만족하는 값들만 따로 추출하여 새로운 배열을 만듦
const tasksNotDone = todos.filter((todo) => todo.done === false);
console.log(tasksNotDone);
// const tasksNotDone = todos.filter(todo => !todo.done); // 같은 결과

// splice
// 배열에서 특정 항목을 제거할 때 사용
const numbers = [10, 20, 30, 40];

// 위 배열에서 30을 지우기
const sindex = numbers.indexOf(30);
numbers.splice(sindex, 1); // sindex 위치부터 1개를 자름
console.log(numbers); // [10, 20, 40]

// shift, pop
// shift - 첫 번째 원소를 배열에서 추출하고, 그 과정에서 해당 원소는 사라짐
const snumbers = [10, 20, 30, 40];
const value = snumbers.shift();
console.log(value); // 10
console.log(snumbers); // [20, 30, 40]

// pop - 배열의 맨 마지막 항목을 추출
const value2 = snumbers.pop();
console.log(value2); // 40
console.log(snumbers); // [20, 30]

// unshift
// 배열의 맨 앞에 새 원소를 추가
snumbers.unshift(5);
console.log(snumbers); // [5, 20, 30]

// concat
// 여러개의 배열을 하나의 배열로 합쳐줌
// 합쳐서 새로운 배열을 만드는 것이고, 기존 배열에는 영향을 주지 않음
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);

console.log(concated); // [1, 2, 3, 4, 5, 6]

// join
// 배열 안의 값들을 문자열 형태로 합쳐줌
const jarray = [1, 2, 3, 4, 5];
console.log(jarray.join()); // 1,2,3,4,5
console.log(jarray.join(" ")); // 1 2 3 4 5
console.log(jarray.join(", ")); // 1, 2, 3, 4, 5

// reduce
// 잘 사용할 줄알면 유용한 내장 함수

// 주어진 배열에 대하여 총합을 구하기
const rnumbers = [1, 2, 3, 4, 5];

let sum = 0;
rnumbers.forEach((n) => {
  sum += n;
});
console.log(sum); // 15

// reduce 함수 사용
let rsum = rnumbers.reduce((accumulator, current) => accumulator + current, 0);
// 첫 번째 파라미터 - accumulator와 current를 파라미터로 가져와 결과를 반환하는 콜백함수 (accunulator:누적된 값)
// 두 번째 파라미터 - reduce 함수에서 사용할 초깃값

console.log(rsum);

// reduce 사용하여 평균 계산
let asum = rnumbers.reduce((accumulator, current, index, rnumbers) => {
  // index - 현재 처리하고 있는 항목이 몇번째인지, array - 현재 처리하고 있는 배열 자신
  if (index === rnumbers.length - 1) {
    return (accumulator + current) / rnumbers.length;
  }
  return accumulator + current;
}, 0);

console.log(asum); // 3
