function selectSort(arr) {

  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;

    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }

    if (min !== i) {
      let tmp = arr[min]
      arr[min] = arr[i]
      arr[i] = tmp
    }
  }

  return console.log(arr)
}

selectSort([5,98,6,4,5,21,987,51])