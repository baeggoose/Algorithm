// # 문제61 : 문자열 압축하기
// 문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.
// 입력
// aaabbbbcdddd
// 출력
// a3b4c1d4
const input = prompt("요약할 문구 입력");
let result = "";
let store = input[0];
let count = 0;
for (let i of input) {
  if (i == store) {
    count += 1;
  } else {
    result += store + count;
    store = i;
    count = 1;
  }
}
result += store + count;
console.log(result);
