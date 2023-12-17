//Array From ES6

const name = Array.from('Sasan')
console.log(name);

const template = Array.from(`${2+10}`)
console.log(template);

const lorem1 = "Officia et Lorem duis ea ad consectetur cillum consectetur."
const lorem2 = "Esse elit officia ullamco proident aliqua esse nisi id aliqua excepteur."

let lines = Array.from([lorem1 , lorem2] , line=>{
    return `<li>${line}</li>`
});
console.log(lines);

let numbers = Array.from([3,5,4] , num =>{
    return num *2
})
console.log(numbers);