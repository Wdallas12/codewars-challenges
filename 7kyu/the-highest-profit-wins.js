function minMax(arr){
    let sorted = arr.sort((a,b) => a-b, 0);
    return [arr[0], arr[arr.length-1]]
  }