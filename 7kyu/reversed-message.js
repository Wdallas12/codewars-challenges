function reverseMessage(str) {
  let reverse = str.toLowerCase().split(' ').reverse();
  let revWords = reverse.map((word) => word.split('').reverse().join(''));
  let newArr = [];
  for (let i = 0; i < reverse.length; i++){
    let firstLetter = revWords[i].charAt(0).toUpperCase();
    let restWord = revWords[i].slice(1);
    newArr[i] = firstLetter + restWord;
  }
  return newArr.join(' ');
}
/*
set all lowercase -- toLowerCase()
reverse the string 
> split at spaces
> array reverse
  > repeat reverse for each word.
> loop through and change 1st letter to uppercase. 
> add this letter to rest of lowercase
> join with spaces between
*/