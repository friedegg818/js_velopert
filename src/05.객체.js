// 객체
// 변수 혹은 상수를 사용하게 될 때 하나의 이름에 여러 종류의 값을 넣을 수 있게 해줌

// 객체 선언
// {키: 원하는 값}
// 키에 해당하는 부분은 공백이 있어야 함
// 공백이 있어야 한다면 '' 안에 넣어줌

const cat = {
  name: "애비",
  age: 8
};

console.log(cat.name); // 애비
console.log(cat.age); // 8

//

const ironMan = {
  name: "토니 스타크",
  actor: "로버트 다우니 주니어",
  alias: "아이언맨"
};

const captainAmerica = {
  name: "스티븐 로저스",
  actor: "크리스 에반스",
  alias: "캡틴 아메리카"
};

console.log(ironMan);
console.log(captainAmerica);

// 함수에서 객체를 파라미터로 받기

function print(hero) {
  const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
  console.log(text);
}

print(ironMan);
print(captainAmerica);

// 객체 비구조화 할당 (객체 구조 분해)
// hero. <- 이 반복되는 것을 방지

function print2(hero) {
  const { alias, name, actor } = hero; // 객체에서 값들을 추출하여 새로운 상수로 선언해 주는 것
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}

print2(ironMan);
print2(captainAmerica);

// 파라미터 단계에서 객체 비구조화 할당하기

function print3({ alias, name, actor }) {
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}

print3(ironMan);

//

// 객체 안에 함수 넣기
const cat2 = {
  name: "레이",
  sound: "냐옹",
  say: function say() {
    // say() 생략 가능 (함수 선언시 이름 없어도 됨)
    console.log(this.sound); // this - 자신이 속해있는 객체를 가르킴
  }
};

cat2.say();

// ** 객체 안에 함수를 넣을 때에는 화살표 함수는 사용 불가능

//

// Getter - Setter 함수
// Getter 함수 - 특정 값을 조회할 때 설정한 함수로 연산된 값을 반환
const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log("sum 함수가 실행됩니다.");
    return this.a + this.b;
  }
};

console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum); // numbsers.sum()이 아니라 numbers.sum을 조회한 것 뿐이지만 함수가 실행되고 그 결과값이 출력

// setter 함수
const numbers2 = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log("caculate");
    this.sum = this._a + this._b;
  },

  get a() {
    return this._a;
  },

  get b() {
    return this._b;
  },

  set a(value) {
    console.log("a가 바뀝니다.");
    this._a = value;
    this.calculate();
  },

  set b(value) {
    console.log("b가 바뀝니다.");
    this._b = value;
    this.calculate();
  }
};

console.log(numbers2.sum);
numbers2.a = 5;
numbers2.b = 7;
numbers2.a = 9;
console.log(numbers2.sum);
console.log(numbers2.sum);
console.log(numbers2.sum); // a 나 b 의 값이 바뀔 때마다 sum 값을 연산

// getter, setter는 단순히 값 저장용이 아니라 캡슐화, 정보은닉 관점에서 유용
