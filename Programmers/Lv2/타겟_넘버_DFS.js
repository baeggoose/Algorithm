// 재귀 함수를 활용합니다. 재귀 함수는 자신을 다시 호출하는 함수입니다.
// 이를 이용하여 숫자 배열의 각 원소를 더하거나 빼는 모든 경우의 수를 탐색할 수 있습니다.

// 재귀 함수에는 다음과 같은 매개변수가 필요합니다:

// numbers: 주어진 숫자 배열
// target: 목표 숫자
// index: 현재 처리 중인 숫자의 인덱스
// currentSum: 현재까지의 합
// 재귀 함수의 동작은 다음과 같습니다:

// index가 숫자 배열의 길이와 같다면, 모든 원소를 처리한 것이므로 currentSum과 target이 같은지 확인합니다.
// 같다면 경우의 수를 1 증가시킵니다.
// index가 숫자 배열의 길이와 같지 않다면, index를 1 증가시키고 재귀 함수를 호출합니다.
// 이때 currentSum에는 현재 원소를 더한 값과 뺀 값 두 가지를 각각 더해줍니다.
// 위의 동작을 반복하면서 재귀 함수를 호출하고, 최종적으로 경우의 수를 반환합니다.

function solution(numbers, target) {
  let answer = 0;

  function dfs(index, currentSum) {
    if (index === numbers.length) {
      if (currentSum === target) {
        answer++;
      }
      return;
    }

    dfs(index + 1, currentSum + numbers[index]);
    dfs(index + 1, currentSum - numbers[index]);
  }

  dfs(0, 0);

  return answer;
}

// 예시 입력
const numbers = [1, 1, 1, 1, 1];
const target = 3;

console.log(solution(numbers, target)); // 출력: 5
