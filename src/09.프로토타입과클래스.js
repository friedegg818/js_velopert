// 프로토타입과 클래스

// 객체 생성자
// 함수를 통해서 새로운 객체를 만들고 그 안에 넣고 싶은 값 혹은 함수들을 구현할 수 있게 해줌

function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
  this.say = function () {
    console.log(this.sound);
  };
}

const dog = new Animal("개", "멍멍이", "멍멍"); // 새로운 객체 생성
const cat = new Animal("고양이", "야옹이", "야옹");

dog.say();
cat.say();

// 프로토타입
// 같은 객체 생성자 함수를 사용하는 경우, 특정 함수 또는 값을 재사용
// 객체 생성자 함수 아래에 .prototype.[원하는키] = 코드  를 입력하여 설정

function Animal2(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

Animal2.prototype.say = function () {
  console.log(this.sound);
};
Animal2.prototype.sharedValue = 1;

const dog2 = new Animal2("개", "멍멍이", "멍멍");
const cat2 = new Animal2("고양이", "야옹이", "야옹");

dog2.say();
cat2.say();

console.log(dog2.sharedValue);
console.log(cat2.sharedValue);

// 객체 생성자 상속받기
function Animal3(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

Animal3.prototype.say = function () {
  console.log(this.sound);
};
Animal3.prototype.sharedValue = 1;

function Dog(name, sound) {
  Animal3.call(this, "개", name, sound);
}
Dog.prototype = Animal3.prototype;

function Cat(name, sound) {
  Animal3.call(this, "고양이", name, sound);
}
Cat.prototype = Animal3.prototype;

const dog3 = new Dog("멍멍이", "멍멍");
const cat3 = new Cat("야옹이", "야옹");

dog3.say();
cat3.say();

// 클래스
// ES6에서부터 class 문법 추가
// 객체 생성자로 구현했던 코드를 좀 더 명확하고 깔끔하게 구현할 수 있고, 상속도 훨씬 쉽게 할 수 있음
class cAnimal {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() {
    // 클래스 내부의 함수 - 메서드
    console.log(this.sound);
  }
}

const cdog = new Animal("개", "멍멍이", "멍멍");
const ccat = new Animal("고양이", "야옹이", "야옹");

cdog.say();
ccat.say();

// 다른 클래스 상속

class cDog extends cAnimal {
  constructor(name, sound) {
    super("개", name, sound); // super -? 상속 받은 클래스의 생성자
  }
}

class cCat extends Animal {
  constructor(name, sound) {
    super("고양이", name, sound);
  }
}

const caDog = new cDog("멍멍이", "멍멍");
const caCat = new cCat("야옹이", "야옹");

caDog.say();
caCat.say();
