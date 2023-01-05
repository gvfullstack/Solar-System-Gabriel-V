export function minBy(array, cb) {
  if(array.length===0){return undefined}

  let curMin = array[0]

  for(let i = 1; i<array.length; i++){
    if(cb(array[i]) < curMin.age){
      curMin = array[i]
    }
  }
  return curMin
}





export function maxBy(array, cb) {
  if(array.length===0){return undefined}

  let curMax = array[0]

  for(let i = 1; i<array.length; i++){
    if(cb(array[i]) > curMax.age){
      curMax = array[i]
    }
  }
  return curMax
}


