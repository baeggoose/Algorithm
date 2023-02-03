// # 문제43 : 10진수를 2진수로
// 우리가 흔히 사용하는 숫자 1, 8, 19, 28893 등등...은 10진수 체계입니다.
// 이를 컴퓨터가 알아 들을 수 있는 2진수로 바꾸려고 합니다. 어떻게 해야할까요?
// **사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력해주세요.**
// 생각의 흐름 => 10진수를 2진술 바꾸려면 나눠야함 => 나눌때마다 나머지 값을 하나씩 어떤 변수에 누적시킨다 => 저장한 변수들을 조인해서 2진수로 나타낸다

// 1.paerseInt,toString
let decimal = prompt("10진수 입력");
let binary = parseInt(decimal, 10).toString(2);
console.log(binary);

// 2.number,toString
const num = Number(prompt("숫자 입력"));
console.log(num.toString(2));
