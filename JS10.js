// 문제10 : 별 찍기

// 입력
// 5

// 출력
//     *
//    ***
//   *****
//  *******
// *********

// 답안1
let k = prompt("숫자를 입력하세요");

for (let i = 1; i <= k; i++) {
  let tree = "";
  for (let h = 1; h <= k - i; h++) {
    tree += " ";
  }
  for (let j = 1; j <= i * 2 - 1; j++) {
    tree += "*";
  }
  console.log(tree);
}

// 답안2
let k = prompt("숫자를 입력하세요");
let tree = "";

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

// 답안3
const n = prompt("숫자를 입력하세요.");
let tree = "";

for (let i = 1; i <= n; i++) {
  let star = "";
  for (let j = 1; j <= n - i; j++) {
    star += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    star += "*";
  }
  tree += star + "\n";
}

console.log(tree);
