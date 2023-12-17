class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  sayMyName() {
    console.log(`My name is : ${this.firstName} ${this.lastName}`);
  }
}

class Programmer extends Person {
  constructor(job, ...person) {
    super(...person);
    this.job = job;
  }
  sayMyName(){
    console.log(`My name is : ${this.firstName} ${this.lastName}
My job is : ${this.job}`);
  }
}

const personInfo = ["web developer", "Sasan", "GhafooryFard", 34];

const programmer = new Programmer(...personInfo);
programmer.sayMyName();
console.log(programmer);