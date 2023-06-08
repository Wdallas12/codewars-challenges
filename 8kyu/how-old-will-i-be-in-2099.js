function  calculateAge(birthYr, countYr) {
    let diff = countYr - birthYr;
    if(diff === 0){
      return `You were born this very year!`
    }else if(diff === 1){
      return `You are 1 year old.`
    }else if(diff === -1){
      return `You will be born in 1 year.`
    }else if(diff > 1){
      return `You are ${diff} years old.`
    }else{
      let pos = diff*-1;
      return `You will be born in ${pos} years.`
    }
  }
  //calculate the difference between the two numbers
  //apply conditionals to before, same year, after, and plurals