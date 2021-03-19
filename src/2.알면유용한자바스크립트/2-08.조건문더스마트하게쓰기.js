// 조건문 더 스마트하게 쓰기

// 특정 갑싱 여러 값 중 하나인지 확인해야 할 때
function isAnimal(text) {
  return (
    text === "고양이" || text === "개" || text === "거북이" || text === "너구리"
  );
}

console.log(isAnimal("개")); // true
console.log(isAnimal("노트북")); // false
// 비교해야 할 갑싱 많아질수록, 코드는 길어짐

// 위와 같은 코드를 간단하게 해결
// 배열을 만들고 배열의 includes 함수를 사용하는 것
function isAnimalSimple(name) {
  const animals = ["고양이", "개", "거북이", "너구리"];
  return animals.includes(name);
}

console.log(isAnimalSimple("개")); // true
console.log(isAnimalSimple("노트북")); // false

// animals 배열을 선언하는 것도 생략하고 화살표 함수로도 작성 가능
const isAnimalarrow = (name) =>
  ["고양이", "개", "거북이", "너구리"].includes(name);

console.log(isAnimalarrow("개")); // true
console.log(isAnimalarrow("노트북")); // false

//---------------------------------------

// 값에 따라 다른 결과물을 반환해야 할 때
// 동물 이름을 받아오면, 동물의 소리를 반환하는 함수

// if 문 사용
function getSound(anumal) {
  if (animal === "개") return "멍멍!";
  if (animal === "고양이") return "야옹~";
  if (animal === "참새") return "짹짹";
  if (animal === "비둘기") return "구구구구";
  return "...?";
}

console.log(getSound("개")); // 멍멍!
console.log(getSound("비둘기")); // 구구구구;

// switch ~ case 문 사용
function getSoundsw(animal) {
  switch (animal) {
    case "개":
      return "멍멍!";
    case "고양이":
      return "야옹~";
    case "참새":
      return "짹짹";
    case "비둘기":
      return "구구 구 구";
    default:
      return "...?";
  }
}

console.log(getSoundsw("개")); // 멍멍!
console.log(getSoundsw("비둘기")); // 구구 구 구

// 더 깔끔하게 만들기
function getSoundsimple(animal) {
  const sounds = {
    개: "멍멍!",
    고양이: "야옹~",
    참새: "짹쨱",
    비둘기: "구구구구"
  };
  return sounds[animal] || "....?";
}

console.log(getSoundsimple("개"));
console.log(getSoundsimple("비둘기"));

// 값에 따라 실행해야 하는 코드 구문이 다를 때
// 객체에 함수를 넣으면 됨
function makeSound(animal) {
  const tasks = {
    개() {
      console.log("멍멍");
    },
    고양이() {
      console.log("고양이");
    },
    비둘기() {
      console.log("구구 구 구");
    }
  };
  if (!tasks[animal]) {
    console.log("...?");
    return;
  }
  tasks[animal]();
}

makeSound("개");
makeSound("비둘기");
