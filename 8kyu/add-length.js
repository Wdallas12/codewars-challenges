function addLength(str) {
    const arr = str.split(' ');
    let lengths = arr.map(word => {
      let length = word.length;
      for(let i=0; i < arr.length; i++){
        return word + ` ${length}`
      }
    })
    return lengths
  }