# **FREQUENCY**

</br>

### **Description**
---
This pattern uses objects or sets to collect values/frequencies of values. This can often avoid the need for nested loops or O(N^2) operations with arrays/strings.

</br>

### **Example**
---
Write a function which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

</br>

### **Function**
---
```js
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  
  let freq1 = {};
  let freq2 = {};

  for (let i = 0; i < arr1.length; i++) {
    freq1[arr1[i]] = (freq1[arr1[i]] || 0 ) + 1;
    freq2[arr2[i]] = (freq2[arr2[i]] || 0 ) + 1;
  }

  for (let key in freq1) {
    if (!freq2[key**2]) return false;
    if (freq2[key**2] !== freq1[key]) return false;
    return true;
  }
}
```

```js
//Alternative
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  
  let freq1 = {};
  let freq2 = {};

  for (let val of arr1) {
    freq1[arr1[i]] = (freq1[arr1[i]] || 0 ) + 1;
  }

  for (let val of arr2) {
    freq2[arr2[i]] = (freq2[arr2[i]] || 0 ) + 1;
  }

  for (let key in freq1) {
    if (!(key**2 in freq2)) return false;
    if (freq2[key**2] !== freq1[key]) return false;
    return true;
  }
}
```

<br />

### **How it works**
---
We transform arrays/strings into frequency objects. In this example, each objects represents an array, with each element being a `key` and its `value` being the amount of time this element is met in this array:

```js
arr = [4,8,4,6,5]

obj = { 
  4: 2, // 4 appears 2 times in arr
  5: 1,
  6: 1,
  8: 1,
}
```

Now we can compare both objects key/value pairs, if one or the other do not meat the requirements.