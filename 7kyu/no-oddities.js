function noOdds( values ){
  let evens = [];
  const vals = values.values();
  for (const num of vals){
    if(num%2 === 0){
      evens.push(num)
    }
  }
  return evens
}