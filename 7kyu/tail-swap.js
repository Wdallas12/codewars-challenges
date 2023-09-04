function tailSwap(arr) {
    let arrOne = arr[0].split(':');
    let arrTwo = arr[1].split(':');
    let swapOne = arrOne[0] + ':' + arrTwo[1];
    let swapTwo = arrTwo[0] + ':' + arrOne[1];
    arr = [swapOne, swapTwo];
    return arr;
  }
  //split the string at the colon - returns string as array without colon and 2 entries
  //create new strings with swapped entries and connect with colon
  //update arr value to be an array of the two new strings