function getMiddle(s){
    let length = s.split('').length
    if(length%2 === 0){
      return `${s.charAt((length-1)/2)}${s.charAt(length/2)}`
    }else{
      return `${s.charAt(length/2)}`
    }
  }