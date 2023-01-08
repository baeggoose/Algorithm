// 문제10 : 별 찍기

// 입력
// 5

// 출력
//     *
//    ***
//   *****
//  *******
// *********

let tree = "";

for (let i = 0; i < 5; i++) {
  for (let j = 5; j > i; j--) {
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
