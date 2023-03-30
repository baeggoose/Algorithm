// # 문제65 : 변형된 리스트
let a = [1, 2, 3, 4];
let b = ["a", "b", "c", "d"];
// 이런 리스트가 있을 때 [[1, a], [b, 2], [3, c], [d, 4]] 이런 식으로 a, b 리스트가 번갈아가면서 출력되게 해주세요.
let result = a.map(function (e, i) {
  if (i % 2 == 0) {
    return [e, b[i]];
  } else {
    return [b[i], e];
  }
});
console.log(result);
