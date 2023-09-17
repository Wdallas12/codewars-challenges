function getMean(arr, x, y) {
  if (x <= 1 || y <= 1) {
    return -1;
  }else if (x > arr.length || y > arr.length) {
    return -1;
  }else {
    let xLength = arr.slice(0, x);
    let yLength = arr.slice(-y);
    let meanX = xLength.reduce((a,b) => a+b, 0) / x;
    let meanY = yLength.reduce((a,b) => a+b, 0) / y;
    return (meanX + meanY) / 2;
  }
}
