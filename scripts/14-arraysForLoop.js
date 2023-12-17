// Old
// For
const myArr =[1,2,3,4,5,6,7];
for (let i = 0; i < myArr.length; i++) {
    console.log(myArr[i]);    
}
//For in 
for (const key in myArr) {    
    console.log(myArr[key]);  
}

const obj = {
    firstName : 'Sasan',
    lastName : 'Ghf',
    age : 34
}

for (let key in obj) {
    console.log(`${key} : ${obj[key]}`);
}

//ForEach

myArr.forEach(value=>{
    console.log(value);
})
myArr.forEach((value , i)=>{
    console.log(`value : ${value} , index : ${i}`);
})

//For Of

for (const value of myArr) {
    console.log(`value : ${value}`);
}

const myStr = 'My name is MrLost'
for (const value of myStr) {
    console.log(`value : ${value}`);
}