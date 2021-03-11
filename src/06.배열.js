// 배열
// 여러개의 항목들이 들어있는 리스트

const array = [1, 2, 3, 4, 5]; // 배열 선언
const objects = [{ name: "애비" }, { name: "레이" }]; // 객체 배열

console.log(objects);
console.log(objects[0]);
console.log(objects[1]);

// 배열에 새 항목 추가
objects.push({
  name: "나나나"
});

console.log(objects);

// 배열의 크기 확인
console.log(objects.length);
