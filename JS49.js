// # 문제49 : 최댓값 구하기
// 순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.
// 입력 : 10 9 8 7 6 5 4 3 2 1
// 출력 : 10
// 처음 풀이
const num = prompt("숫자입력").split(" ");
let max = num.sort((a, b) => b - a);
console.log(max[0]);
// 간소화한 풀이
const number = prompt("숫자입력")
  .split(" ")
  .sort((a, b) => b - a);
console.log(number[0]);
// map 이용
const maxnum = prompt("숫자입력")
  .split(" ")
  .map((n) => parseInt(n, 10))
  .sort((a, b) => b - a);
console.log(maxnum[0]);
