// Promise
// 비동기 작업을 조금 더 편하게 처리할 수 있도록 ES6에 도입된 기능
// 이전에는 비동기 작업 처리를 콜백 함수로 했지만, 이 경우 작업이 많아질 경우 코드가 쉽게 난잡해짐

// 숫자 n을 파라미터로 받아와서 다섯번에 걸쳐 1초마다 1씩 더해서 출력하는 작업을
// setTimeout 으로 구현
function increaseAndPrint(n, callback) {
  setTimeout(() => {
    const increased = n + 1;
    if (callback) {
      callback(increased);
    }
  }, 1000);
}

increaseAndPrint(0, (n) => {
  increaseAndPrint(n, (n) => {
    increaseAndPrint(n, (n) => {
      increaseAndPrint(n, (n) => {
        increaseAndPrint(n, (n) => {
          console.log("끝!");
        });
      });
    });
  });
}); // 읽기가 굉장히 복잡함 -> Callback Hell...

// Promise 만들기
// const myPromise = new Promise((resolve, reject) => {
// 구현...
// })

// Promise는 성공할 수도 있고, 실패할 수도 있음
// 성공할 때에는 resolve , 실패할 때는 reject 호출

// 실패하는 상황은 고려하지 않고, 1초 뒤에 성공시키느 상황 구현
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1); // resolve를 호출할 때 특정 값을 파라미터로 넣어주면, 이 값을 작업이 끝나고 나서 사용할 수 있음
  }, 1000);
});

myPromise.then((n) => {
  // 작업이 끝난 후 또 다른 작업을 해야할 때에는 Promise 뒤에 .then(...)을 붙여서 사용
  console.lot(n);
});

// 1초 뒤에 실패되게끔
const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error()); // 실패하는 상황에선s reject 사용
  }, 1000);
});

myPromise2
  .then((n) => {
    console.log(n);
  })
  .catch((error) => {
    // 실패했을 시 수행할 작업을 설정
    console.log(error);
  });

// Promise를 만드는 함수 작성
function increaseAndPrint2(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        const error = new Error();
        error.name = "ValueIsFiveError";
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    }, 1000);
  });
}

increaseAndPrint2(0).then((n) => {
  console.log("result: ", n);
}); // 1, result: 1

// then 내부에 넣은 함수에서 또 Promise를 리턴하게 된다면, 연달아서 사용할 수 있음
increaseAndPrint2(0)
  .then((n) => {
    return increaseAndPrint2(n);
  })
  .tthen((n) => {
    return increaseAndPrint2(n);
  })
  .then((n) => {
    return increaseAndPrint2(n);
  })
  .then((n) => {
    return increaseAndPrint2(n);
  })
  .then((n) => {
    return increaseAndPrint(n);
  })
  .catch((e) => {
    console.error(e);
  });

// 위 코드는 다음과 같이 정리 가능
increaseAndPrint2(0)
  .then(increaseAndPrint2)
  .then(increaseAndPrint2)
  .then(increaseAndPrint2)
  .then(increaseAndPrint2)
  .then(increaseAndPrint2)
  .catch((e) => {
    console.error(e);
  });

// 이처럼 Promise를 사용하면 비동기 작업의 개수가 많아져도 코드의 깊이가 깊어지지않게 됨
// 불편한점도 있음 -> 에러를 잡을 때 몇번째에서 발생했는지 알아내기 어려움
//              -> 특정 조건에 따라 분기를 나누는 작업도 어려움
//              -> 특정 값을 공유해가며 작업을 처리하기도 까다롭
//              -> async/await를 사용하면 깔끔하게 해결 가능
