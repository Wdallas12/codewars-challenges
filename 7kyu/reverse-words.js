function reverseWords(str) {
    let arr = str.split(' ');
    let reverse = arr.map(word => word.split('').reverse().join(''));
    let newStr = reverse.join(' ')
    return newStr
  }