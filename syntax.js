// let/const =>

/* var 키워드의 문제점 
    1. 호이스팅 문제 => js는 변수 선언 부분을 런타임 이전에 위로 끌어올리는 효과
    2. 중복 선언 
     => 중복 선언을 하더라도 오류 x , 런타임 문제가 발생 가능
    3. 스코프 (유효 범위) => var 키워드는 함수 레벨 스코프만 지원 => 블록 레벨 지원 x


*/
console.log(num);
var num = 10;
console.log(num);

var num = 100; // var 키워드는 중복 선언 허용.
console.log(num);

{
  var num = 1000;
}
console.log(num);

function consoleNum() {
  var num = 10;
  console.log(num);
}

consoleNum();

// let str = "문자열"; 중복선언 오류
// let str = "준호";

let str = "문자열";

console.log(str);
// let 선언하기 이전에 참조시 오류 발생
// let 블록레벨 스코프 지원
let num02 = 10;
{
  let num02 = 100;
  console.log(num02);
}
console.log(num02);

// const => constant의 줄임말
// 재할당 불가능, 대문자 사용, 선언과 초기화를 동시에 해야한다.
const PI = 3.141;
const TAX = 10;

// 화살표 함수
// function 키워드를 통해 함수 선언 => 호이스팅 발생
add(2, 1);
function add(a, b) {
  return a + b;
}

// 화살표 함수 (매개변수) => {} 구현
// add(a, b); 선언 이전에 사용 불가 return 사용 불가 / this 바인딩 x

const sub = (a, b) => a - b;

console.log(sub(3, 1));

const sub2 = (a, b) => a * b;

console.log(sub2(3, 5));

//document.querySelector(".box").addEventListener("click", () => 1 + 2);

/*비구조화 할당 (distructuring)
변수명과 같은 이름의 property 값을 할당

*/
let obj = {
  username: "Jace",
  age: 30,
  greeting: function () {
    console.log("안녕하세요");
  },
};

// let greeting = obj.greeting();

// let username = obj.username;
let { username: userName, greeting, age } = obj;

console.log(userName, age);
console.log(greeting());

// 배열 비구조화 할당
// let [변수1,변수2] = 배열;
let arr = [10, (a, b) => a + b];
let [num03, funcAdd] = arr;

console.log(num03);
console.log(funcAdd(1, 3));

// 스프레드 문법(펼침)
// ...배열 => 배열의 각 원소를 펼치는 효과
let arr02 = [1, 2, 3, 4, 5]; //...arr02 => 1,2,3,4,5

console.log(arr02);
console.log(Math.max(...arr02));

let arr03 = [...arr02]; //불변성을 지키면서 배열 복사

console.log(arr03 == arr02);

//객체 스프레드

let copy = { ...obj, age: 40 };
//let copy = { age: 40, ...obj  };
console.log(copy);

// 비동기 : setTimeout() 대표적인 예
// 처리 결과를 기다리지 않고 다음코드 실행

setTimeout(() => {
  console.log("실행");
}, 1000);

function getData(callback) {
  setTimeout(() => {
    callback([1, 2, 3]);
  }, 2000);
}

// function render(arr) {
//   arr.forEach((item) => {
//     console.log("화면에 출력 :", item);
//   });
// }

// getData(render);

// function double(arr) {
//   return arr.map((item) => item * 2);
// }
//Promiss : 비동기처리 기다렸다 처리
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(2);
//     reject(6);
//   }, 2000);
// });

// promise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     throw new Error(err);
//   });

//async/await
// async 함수는 return 값을 resolve 하는 promise를 반환

function render(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num + 1);
    }, 2000);
  });
}
console.log("끝");
async function consoleNum(num) {
  let result = await render(num);
  result = await render(result);

  result = await render(result);
  console.log("끝");
  return result;

  //   console.log(result);
}
consoleNum(1).then;
//then 이 나오면 promise

//삼항연산자
// 조건 ? 값1 : 값2 => 조건이 참인 경우 값1 거짓 값2
let num04 = 4;
let isEven;
if (num04 % 2 === 0) {
  isEven = true;
} else {
  isEven = false;
}
console.log(isEven);

let isOdd = num04 % 2 === 0 ? true : false;
console.log(isOdd);

// 단축 평가 : &&(and) ||(or) 사용
// 피연산자1 && 피연산자2 => 피연산자1이 truthy한 값이면 피연산자2

let isRed = true;

function func() {
  return 1;
}
isRed && func();
console.log("color:", func());

let color = undefined && "red";
console.log(color);

let color2 = undefined || "red";
console.log(color2);

// let text = "글씨" || "text";
// console.log(text);

if (undefined) {
  console.log("is it work?");
}

let data = {
  age: 30,
};

let text = 0 || "해당없음";
console.log(text);

//null 병합 연산자
let text02 = 0 ?? "data not";
console.log(text02);

// optional chaining : 앞의 값이 null 혹은 언디파인드라면 참조 x
let user = {
  age: 30,
  height: 180,
  weight: null,
};

console.log(user.weight?.num);

// forEach map filter
let arr04 = [1, 2, 3, 4];

let arrResult = arr04.forEach((num) => {
  console.log(num);
});

let mapArr = arr04.map((num) => num + 1);
console.log(mapArr);

let filterArr = arr04.filter(function (num) {
  return num > 2;
});

// foreach 콜백함수 리턴값을 모은 새로운 배열
// map 콜백함수 리턴값을 모은 새로운 배열
// filter 각 원소의 조건에 부합하는 원소만 모아서 새로운 배열

// map과 filter 화살표

let filterArr2 = arr04.filter((num) => num > 3);
console.log(filterArr2);

//
let userArr = [
  { username: "jace", age: 30 },
  { username: "jju", age: 40 },
  { username: "jun", age: 20 },
];

console.log(userArr);

let userForeach = userArr.forEach((num) => console.log(num.username, num.age));
// 템플릿 리터럴 : 문자열 안에 변수값을 포함 `` 백틱 안에 $변수

let userFilter = userArr
  .filter((user) => user.age >= 30)
  .map((user) => `${user.username} : ${user.age}`);

console.log(userFilter);

function returnStr() {
  return "문자열";
}

// 표현식 => 값으로 평가될 수 있는 식
// 문 => 프로그래밍 실행 최소 단위
let num10 = 1 + 1;

arr03[Math.floor(1.1)];
//scope

let a = 10; //전역 변수
function outer() {
  let a = 1; // 지역 변수
  function inner() {
    let a = 2;
    console.log("inner:", a);
  }
  inner();
  console.log("outer:", a);
}
outer();
console.log("all", a);

// rest 문법 : 매개변수 개수 상관없이 배열로 모은다
function getTotal(...arr) {
  console.log(arr);
}

getTotal("문자열", "입니다");
