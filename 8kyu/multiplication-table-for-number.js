function multiTable(number) {
    let n = number;
    let str = '';
    for(let i = 1; i <= 10; i++){
      if(i < 10){
        str += i + " * " + n + " = " + i*n + '\n';
      }else if(i = 10){
        str += i + " * " + n + " = " + i*n;
      }
    }
    return str
  }