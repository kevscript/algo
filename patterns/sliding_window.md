# **SLIDING WINDOW**

</br>

### **Description**
---
This pattern involves creating a window which can either be an array or number from one position to anoter. </br>Depending on a certain condition, the window either increases or closes (and a new window is created).</br> Very useful for keeping track of a subset of data in an array/string etc.


</br>

### **Example**
---

Write a function called **`maxSubarraySum`** which accepts an array of integers and a number **`N`**. </br>
The function should calculate the maximum sum of **N** consecutive elements in the array. 

So for example `maxSubarraySum([1,3,2,8,6,9,1], 2)` should return **15** because 6+9 is the highest sum of 2 consecutive elements.

</br>

### **Function**
---

```js
function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum = maxSum + arr[i];
  }

  for (let i = num; i < arr.length + 1 - num; i++) {
    tempSum = maxSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}
```

</br>

### **How it works**
---

We pass an array of 7 integers and a number N = 4
```js
maxSubarraySum([1,2,5,2,8,1,5], 4)
```
It means we want to know the maximum sum of 4 consecutive integers from the array.
<br/>

>*Is it [1,2,5,2]? [5,2,8,1]?* <br/> 
>*Looks simple but imagine an array of a million of Integers or a way bigger N number.*

<br/>

For good mesure, lets shortcut the system if the number N is bigger than the length of the array. If the array has 3 integers, it can't create a window of 4 consecutive integers.

```js
if (arr.length < num) return null;
// here the array has 7 integers and N=4, so its doable.
```

Lets initialize a value `maxSum` which represents a sum of N consecutive integers from the array. <br />The first loop sets the initial max value from the **first** N integers, suming them up on each iteration.
```js
for (let i = 0; i < num; i++) {
  maxSum = maxSum + arr[i];
}
```

```js
// maxSubarraySum([1,2,5,2,8,1,5], 4)

// first loop
i = 0 // 0 < 4
arr[0] = 1
maxSum = 0 + arr[0] = 1

// second loop
i = 1 // 1 < 4
arr[1] = 2
maxSum = 1 + arr[1] = 3

// third loop
i = 2 // 2 < 4
arr[2] = 5
maxSum = 3 + arr[2] = 8

// forth loop
i = 3 // 3 < 4
arr[3] = 2
maxSum = 8 + arr[3] = 10

// i = 4, loop stops
// we added the first 4 integers together
// maxSum of [1,2,5,2] = 10
```

The sum of integers in the initial window [1,2,5,2] is **10**. <br/>
We could represent the current window in a sequence:

```
[1,2,5,2],8,1,5
```
It should slide into the next window which is:
```
1,[2,5,2,8],1,5
```
What we're doing is subtracting the first value from `maxSum`, while adding the next value.<br />
In this example, `maxSum = 10`, sliding to the next window we're doing `maxSum = maxSum - 1 + 8`.<br/>
```
1,[2,5,2,8],1,5
-1 [10] +8      = 17
```
```
1,2,[5,2,8,1],5
 -2  [17] +1    = 16
```
All we have to do is create a loop that will keep substracting the first value and adding the next one to `maxSum`.
```js
for (let i = num; i < arr.length; i++) {
  tempSum = maxSum - arr[i - num] + arr[i];
  maxSum = Math.max(tempSum, maxSum);
}
```
* we initialize `i` to `num` because `arr[num]` is the closest integer to the window. If the first window has 4 integers, `arr[4]` will be the 5th element in the array and thats where we want to start adding.
  
* `maxSum - arr[i - num] + arr[i]`: is basicly **maxSum - removedInteger + addedInteger**
  
* we compare `maxSum` of last window to `tempSum` of the current window, and return the biggest value.<br /> If `tempSum` > `maxSum`, `maxSum` becomes the value of `tempSum`. We iterate until the last value of the array.