// // # 문제44 : 각 자리수의 합
// // **사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램**을 만들어주세요
// // **예를들어**
// // 18234 = 1+8+2+3+4 이고 정답은 18 입니다.
// // 3849 = 3+8+4+9 이고 정답은 24입니다.
// 입력 : 18234
// 출력 : 18
// 입력 : 3849
// 출력 : 24

// 1.10으로 나누어 각 나머지를 더하기
let num = prompt("숫자 입력");
let sum = 0;
while (num) {
  sum += num % 10;
  num = Math.floor(num / 10);
}
console.log(sum);

// 2.spilt,reduce
let n = prompt("숫자 입력")
  .split("")
  .reduce((a, b) => a + parseInt(b), 0);
console.log(n);
