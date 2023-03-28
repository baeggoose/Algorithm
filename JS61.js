// # 문제61 : 문자열 압축하기
// 문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.
// 입력
// aaabbbbcdddd
// 출력
// a3b4c1d4
const input = prompt("문자 입력");
const result = "";
let count = 0;
let store = input[0];
for (let i of input) {
  if (i == store) {
    count += 1;
  } else {
    result += i + count;
  }
}
console.log(result);
