function pipeFix(numbers){
    let arrStart = Number(numbers[0]);
    let arrEnd = Number(numbers[numbers.length - 1]);
    let newPipe = [];
    for (let i = arrStart; i <= arrEnd; i++){
      newPipe.push(i);
    }
    return newPipe;
  }
  // take 0 index and last index numbers
  // loop through those using the 2 numbers and parameters
  // push to a new arr