function bubbleSort(arr) {

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j+1]) {
        let tmp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = tmp
      }
    }
  }

  return console.log(arr)
}

bubbleSort([5,9,24,854,654,1,2,35])