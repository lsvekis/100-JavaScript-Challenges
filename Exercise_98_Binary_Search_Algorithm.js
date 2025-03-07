let start = 0, end = arr.length - 1;
while (start <= end) {
let mid = Math.floor((start + end) / 2);
if(arr[mid] === target) return mid;
else if(arr[mid] < target) start = mid + 1;
else end = mid - 1;
}
return -1;
}
let sortedArray = [1, 3, 5, 7, 9];
console.log("Index of 7:", binarySearch(sortedArray, 7));