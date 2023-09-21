function findOdd(A) {
    let count = 0; // set variable to hold # of occurences of num
    for(let i=0; i < A.length; i++){    // loop through array
      for(let j=0; j < A.length; j++){  // loop through again to add to count
        if(A[i] == A[j]){
          count++;
        }
      }
      if(count % 2 !== 0){    //find the num that is odd using remainder
        return A[i];
      }
    }
  }