//OF
const arr1 = [1, 2, 3, 4, 5, 6];
console.log(arr1);

const arr2 = Array(1, 2, 3, 4, 5, 6);
console.log(arr2);

const arr3 = Array(6);
console.log(arr3);

const arr4 = Array.of(6);
console.log(arr4);

//FILL

const arr5 = [1, 2, "a", 3, "b"];
arr5.fill("c", 3, 4);
console.log(arr5);

const arr6 = [1, 2, "a", 3, "b"];
arr6.fill("c", -2);
console.log(arr6);

//splice

let numbers = ['one' , 'two' , 'three' , 'five']
numbers.splice(3,0,'four')
console.log(numbers);
