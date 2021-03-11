// 조건문
// if (조건) {
//  코드;
// }

const a = 1;
if (true) {
  const a = 2;
  console.log("if문 안의 a 값은 " + a);
}

console.log("if문 밖의 a 값은 " + a);

// if-else 문

const aa = 10;
if (aa > 15) {
  console.log("a 가 15보다 큽니다.");
} else {
  console.log("a 가 15보다 크지 않습니다.");
}

// if-else if 문
const aaa = 10;
if (aaa === 5) {
  console.log("5입니다!");
} else if (aaa === 10) {
  console.log("10입니다!");
} else {
  console.log("5도 아니고 10도 아닙니다.");
}

// switch/case 문
const device = "iphone";

switch (device) {
  case "iphone":
    console.log("아이폰!");
    break;
  case "ipad":
    console.log.og("아이패드!");
    break;
  case "galaxy Note":
    console.log("갤럭시노트!");
    break;
  default:
    console.log("????");
}
