function solution(str, ending){
  let arr = str.split('');
  let num = ending.split('').length;
  let end = arr.slice(-num);
  return ending == "" || end.join('') == ending;
}
