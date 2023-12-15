function getSum(a, b, c, d, e) {
    return a + b + c + d + e;
  }
  let numbers = [1, 2, 3, 4, 5];
  
  const result1 = getSum.apply(null, numbers);
  console.log(result1);
  
  ///////////////////////////////////////////////
  //Spread
  const result2 = getSum(...numbers);
  console.log(result2);
  
  const oldArray = [1, 2, 3];
  const newArray1 = [oldArray, 4, 5];
  const newArray2 = [...oldArray, 4, 5];
  console.log(newArray1);
  console.log(newArray2);
  
  const person = {
    firstName: 'Sasan',
    lastName: 'GhafooryFard',
    age: 30,
  };
  const newPerson1 = {
    person,
    age: 34,
  };
  const newPerson2 = {
    ...person,
    age: 34,
  };
  console.log(newPerson1);
  console.log(newPerson2);
  