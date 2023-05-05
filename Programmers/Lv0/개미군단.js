function solution(hp) {
  const 장군 = Math.floor(hp / 5);
  const 병정 = Math.floor((hp - 장군 * 5) / 3);
  const 일병 = hp - (장군 * 5 + 병정 * 3);
  return 장군 + 병정 + 일병;
}
