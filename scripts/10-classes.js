// ES5 
function Person5(firstName , lastName , age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Person5.prototype.sayMyName = function(){
    console.log(`Fullname is ${this.firstName} ${this.lastName}`);
}

const person1 = new Person5('Sasan' , 'GhafooryFard' , 34);
person1.firstName = 'Sasy'
console.log(person1);
person1.sayMyName();

////////////////////////////////////////////////////////////////

//ES6
class Person{
    constructor(firstName , lastName , age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    sayMyName () {
        console.log(`Fullname is ${this.firstName} ${this.lastName}`);
    }
}

const person2 = new Person('neda' , 'rashidinia' , 31)
person2.age = 32;
console.log(person2);
person2.sayMyName();