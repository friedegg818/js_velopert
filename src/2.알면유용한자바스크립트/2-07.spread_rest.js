// spread 
// 객체 혹은 배열을 펼칠 수 있음 
const slime = {
  name: '슬라임'
};

const cuteSlime = {   // 기존 선언한 slime을 건드리지 않고, 새로운 객체를 만들어 slime이 가지고 있는 값을 그대로 사용 
  name: '슬라임',
  attribute: 'cute'
};

const purpleCuteSlime = { // cuteSlime이 가지고 있는 속성을 그대로 사용하면서 color를 추가 
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime); 

// 위와 같이 기존의 것을 건드리지 않고 새로운 객체를 만들 때 유용하게 사용 
const slime = { 
  name: '슬라임'
};

const cuteSlime = {
  ...slime,
  attribute: 'cute'
};

const purpleCuteSlime = {
  ...cuteSlime,
  color: 'purple'
}; 

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);


// 배열에서도 사용 가능 
const animals = ['개', '고양이', '참새'];
const anotherAnimals = [...animals, '비둘기'];
console.log(animals);
console.log(anotherAnimals); 

// 배열에서 여러번 사용도 가능 
const numbers = [1, 2, 3, 4, 5];

const spreadNumbers = [...numbers, 1000, ...numbers]; 
console.log(spreadNumbers); // [1, 2, 3, 4, 5, 1000, 1, 2, 3, 4, 5]


// ----------------------------------------------------


// rest 
// spread와 비슷하게 생겼지만 매우 다른 역할으로, 객체, 배열, 함수의 파라미터에서 사용 가능 

// 객체에서의 rest 
const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};

const { color, ...rest } = purpleCuteSlime; // 추출하는 값의 이름이 꼭 rest일 필요는 없음 
                                            // const { color, ...cuteSlime } = purpleCuteSlime;  <- 도 가능 
console.log(color);  // purple
console.log(rest);   // {name: '슬라임', attribute: 'cute'} , color를 제외한 값이 들어있음 

const { attribute, ...slime } = cuteSlime; 
console.log(attribute); 
console.log(slime); // attribute 까지 없앤 새로운 객체 


// 배열에서의 rest 
const numbers = [0, 1, 2, 3, 4, 5, 6];

const [one, ...rest] = numbers; 

console.log(one); // 0
console.log(rest);  // [1, 2, 3, 4, 5, 6] , 배열 비구조화 할당을 통하여 원하는 값을 밖으로 꺼내고 나머지 값을 rest 안으로 넣음 

// 다음과 같이는 불가능 
const numbers = [0, 1, 2, 3, 4, 5, 6];

const [...rest, last] = numbers;   // 오류 


// 함수 파라미터에서의 rest 
// 파라미터로 넣어준 모든 값들을 합해 주는 함수를 만들기 
function sum(a, b, c, d, e, f, g) {
  let sum = 0;
  if (a) sum += a; 
  if (b) sum += b;
  if (c) sum += c;
  if (d) sum += d;
  if (e) sum += e;
  if (f) sum += f;
  if (g) sum += g;
  return sum;
}

const result = sum(1, 2, 3, 4, 5, 6); // 위의 sum 함수는 파라미터 7개를 받아오는데, 값을 6개만 넣어서 g 의 값이 undefined 가 되고, 결과는 NaN이 됨. 그래서 함수에서 하나하나 유효한 값인지 확인을 해준 것 
console.log(result);

// 함수의 파라미터가 몇개가 될지 모르는 상황에서 rest 파라미터 를 사용하면 매우 유용 
function sum(...rest) {
  return rest;
}

const result = sum(1, 2, 3, 4, 5, 6);
console.log(result); // [1, 2, 3, 4, 5, 6] - 함수에서 받아온 파라미터들로 이루어진 배열 

// 파라미터들이 들어가 있는 배열을 받고, 안의 값을 모두 더해주는 함수 
function sum(...rest) {
  return rest.reduce((acc, current) => acc + current, 0); 
}

const result = sum(1, 2, 3, 4, 5, 6);
console.log(result); // 21 


// ---------------------------------------------

// 함수 인자와 spread 
// 파라미터와 인자의 구분 
const myFunction(a) { // a - 파라미터  
  console.log(a); // ㅁ - 인자 
}

myFunction('hello world'); // hello world - 인자 

// 함수에서 값을 읽을 때, 그 값은 파라미터 
// 함수에서 값을 넣어줄 때, 그 값은 인자 

// 배열 안에 있는 원소들을 모두 파라미터로 넣어주고 싶을 때 
function sum (...rest) {
  return rest.reduce((acc, current) => acc + current, 0);
}

const numbers = [1, 2, 3, 4, 5, 6];
const result = sum(
  numbers[0],
  nubmers[1],
  numbers[2],
  numbers[3],
  numbers[4],
  numbers[5]
  );

  console.log(result);    
  // ↑↑↑ 굉장히 불편함 

  // sum 함수를 사용할 때 인자 부분에서 spread를 사용하면 편함 
  const result = sum(...numbers); 
  console.log(result);


  // spread, rest => 보기에 깔끔한 코드를 작성하는데에 큰 도움 