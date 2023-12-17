class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  sayMyName() {
    console.log(`My name is : ${this.firstName} ${this.lastName}`);
  }
  static goodPerson(name){
    console.log(`${name} is a good person`);
  }
} 

const person1 = new Person('Sasy', 'Ghf', 34);
person1.sayMyName();

//person1.goodPerson('MrLost') has error
Person.goodPerson('MrLost');
