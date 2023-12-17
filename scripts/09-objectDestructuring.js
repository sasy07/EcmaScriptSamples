const jsonData = {
  firstName: "Sasan",
  lastName: "GhafooryFard",
  email: "mrlost@yahoo.com",
  gender: "male",
  hobbys: ["gaming", "programming", "movie", "drink coffee"],
};

const dataProcessor1 = (data) => {
  //important work
  console.log(data);
};


//Object Destructuring

//{SourceName : DestinationName}

const { firstName: name, lastName: family, email } = jsonData;

dataProcessor1({
  name,
  family,
  email,
});

const dataProcessor2 = (data) => {
  //important work
  const { name, family, email } = data;
  console.log(`fullname is : ${name} ${family}
email is : ${email}`);
};

dataProcessor2({
  name,
  family,
  email,
});

const dataProcessor3 = ({firstName, lastName, email}) => {
  //important work
  console.log(`fullname is : ${firstName} ${lastName}
email is : ${email}`);
};

dataProcessor3(jsonData);

// const [first, second , third] = jsonData.hobbys;
// console.log(first, second , third);

// const [,,,fourth] = jsonData.hobbys
// console.log(fourth);

const [,second,...others] = jsonData.hobbys
console.log(others);
