// # 문제59 : 빈칸채우기
// 총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고,
// 나머지 빈 부분에는 '='을 채워 넣어주세요.
// 입력
// hi
// 출력
// ========================hi========================
//생각의 흐름: 문자열 길이는 50 반을 나누어 입력값을 push?

const str = prompt("문자열 입력");
const left = str.padStart(25 - str.length / 2, "=");
const right = left.padEnd(50, "=");
console.log(right);
console.log(right.length);
