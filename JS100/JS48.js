// # 문제48 : 대소문자 바꿔서 출력하기
// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.
// 입력 : AAABBBcccddd
// 출력 : aaabbbCCCDDD
let str = prompt("문자 입력");
let arr = [];
for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i].toLowerCase()) {
    arr.push(str[i].toUpperCase());
  } else {
    arr.push(str[i].toLowerCase());
  }
}
console.log(arr.join(""));
