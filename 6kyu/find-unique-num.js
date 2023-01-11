function findUniq(arr) {
    let sorted = arr.sort((a,b) => a-b);
    if(sorted[sorted.length-1] > sorted[0] && sorted[sorted.length-1] > sorted[1]){
      return sorted[sorted.length-1]
    }else{
      return sorted[0]
    }
  }