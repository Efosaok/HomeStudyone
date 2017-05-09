const findMinMax = (arr)=>{
//I initialize my min and max variable to the first element of the array
  let min =arr[0]
  let max = arr[0]
  let minMax = []
//I loop through to the length of the array and check each value 
//against the first elements(max),(min)and perform the necessary operation
  for (let i =0;i < arr.length;i++){
    if (arr[i] > max){
      max = arr[i]
    }
    else if(arr[i] < min){
      min = arr[i]
    }

  }
//check for if min and max is equal and return the 
//appropriate value if not return the appr
  if(min === max){
    minMax.push(max)
    return minMax
  }
  minMax.push(min)
  minMax.push(max)
  return minMax
}

exports.findMinMax = findMinMax