// # 문제20 : 몫과 나머지
// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 **그 몫과 나머지를 공백으로 구분하여 출력하세요.**
// 입력 : 10 2
// 출력 : 5 0

const n = prompt().split(" ");
const m = Math.floor(parseInt(n[0]) / parseInt(n[1]));
const b = n[0] % n[1];
console.log(m, b);
