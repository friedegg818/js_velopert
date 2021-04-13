// async/await
// ES8에 해당하는 문법으로, Promise를 더욱 쉽게 사용할 수 있게 해줌

// 기본적인 사용법
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function process() {
  // 함수 선언시 함수 앞부분에 async 키워드 붙이기
  console.log("안녕하세요!");
  await sleep(1000); // 1초 쉬고 // Promise 앞부분에 await를 넣어주면, 해당 Promise가 끝날때까지 기다렸다가 다음 작업을 수행
  console.log("반갑습니다!");
}

process();

// 함수에서 async를 사용하면, 해당 함수는 결과값으로 Promise를 반환하므로 다음과 같은 코드 작성 가능
process().then(() => {
  console.log("작업이 끝났어요!");
});

// awync 함수에서 에러를 발생 시킬때에는 throw
// 에러를 잡아낼 때에는 try/catch 문을 사용
async function makeError() {
  await sleep(1000);
  const error = new Error();
  throw error;
}

async function process2() {
  try {
    await makeError();
  } catch (e) {
    console.error(e);
  }
}

process2();

// 비동기 함수
const getDog = async () => {
  await sleep(1000); // 1초
  return "멍멍이";
};

const getRabbit = async () => {
  await sleep(500); // 0.5초
  return "토끼";
};

const getTurtle = async () => {
  await sleep(3000); // 3초
  return "거북이";
};

// 총 4.5초 , dog > rabit > turtle 순
async function process3() {
  const dog = await getDog();
  console.log(dog);
  const rabbit = await getRabbit();
  console.log(rabbit);
  const turtle = await getTurtle();
  console.log(turtle);
}

process3();

// 동시에 작업을 시작하고 싶다면, Promise.all 사용
// Promise.all 은 등록한 프로미스 중 하나라도 실패하면, 모든게 실패한 것으로 간주
async function process4() {
  const results = await Promise.all([getDog(), getRabbit(), getTurtle()]);
  console.log(results);
}

process4();

// 배열 비구조화 할당 문법을 사용하면 각 결과값을 따로 따로 추출해서 조회할 수 있음
async function process5() {
  const [dog, rabbit, turtle] = await Promise.all([
    getDog(),
    getRabbit(),
    getTurtle()
  ]);
  console.log(dog);
  console.log(rabbit);
  console.log(turtle);
}

process5();

// Promise.race
// 여러개의 프로미스를 등록해서 실행했을 때 가장 빨리 끝난것 하나만의 결과값을 가져옴
// 다른 Promise가 먼저 성공하기 전에, 가장 먼저 끝난 Promise가 실패하면 실패로 간주
async function process6() {
  const first = await Promise.race([getDog(), getRabbit(), getTurtle()]);
  console.log(first);
}

process6();
// getRabbit 에서 에러를 발생시키면 잡아낼 수 있지만, getTurtle이나 getDog에서 발생한 에러는 무시됨
