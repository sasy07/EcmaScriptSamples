class Person{
    constructor(firstName , lastName , age){
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    sayMyName (name) {
        console.log(`Fullname is ${name}`);
    }
    set firstName (newFirstName){
        console.log('setting first name');
        this._firstName = newFirstName;
    }
    get firstName (){
        console.log('getting first name');
        return this._firstName;
    }
    
}

const person2 = new Person('neda' , 'rashidinia' , 31)
person2.firstName = 'Nedy'
console.log(person2);
console.log(person2.firstName);