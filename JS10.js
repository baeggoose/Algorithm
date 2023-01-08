// 문제10 : 별 찍기

// 입력
// 5

// 출력
//     *
//    ***
//   *****
//  *******
// *********

// k를 입력하세요

let tree = "";
let k = 5;

for (let i = 0; i < k; i++) {
  for (let j = k; j > i; j--) {
    tree += " ";
  }
  for (let j = 0; j <= i; j++) {
    tree += "*";
  }
  for (let j = 1; j <= i; j++) {
    tree += "*";
  }
  tree += "\n";
}

console.log(tree);
