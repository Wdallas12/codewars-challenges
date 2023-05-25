function capitalize(s){
    let strArr = s.split('');
    let evens = strArr.map((x,i) => i%2 === 0 ? x.toUpperCase() : x).join('');
    let odds = strArr.map((x,i) => i%2 !== 0 ? x.toUpperCase() : x).join('');
    return [evens, odds];
  };