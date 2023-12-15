let object1 = new Object();
console.log(object1);

let object2 = Object.create(null);
console.log(object2);

let object3 = {
  firstName: 'Sasan',
  lastName: 'GhafooryFard',
  getName: function (firstName, lastName) {
    console.log(`my name is ${firstName} ${lastName}`);
  },
};
let firstName = object3.firstName;
let lastName = object3.lastName;
let getName = object3.getName;

console.log(getName(firstName, lastName));

//Object Literals

let newData = {
  firstName,
  lastName,
  getFullName(firstName, lastName) {
    console.log(`my name is ${firstName} ${lastName}`);
  },
};
newData.getFullName(firstName, lastName);
