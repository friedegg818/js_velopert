// DOM 선택하기
const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

console.log(number);
console.log(increase);
console.log(decrease);

console.log(number.innerText); // 내용 // 0
console.log(increase.offsetTop); // top 위치 // 70
console.log(decrease.id); // id // decrease

// 이벤트 설정하기
increase.onclick = () => {
  console.log("increase 가 클릭됨");
  const current = parseInt(number.innerText, 10); // 10은 10진수로 숫자를 받아오겠다는 의미
  number.innerText = current + 1;
};

decrease.onclick = () => {
  console.log("decrease 가 클릭됨");
  const current = parseInt(number.innerText, 10);
  number.innerText = current - 1;
};
