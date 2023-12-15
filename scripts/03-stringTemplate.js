const name = 'sasy';
const age = 34;
const hello = `Hello, ${name}`;
console.log(hello);

const query = `select * from users where name = "${name}" and age = ${age}`;
console.log(query);

const text = `toplearn is 
best place to learn`;
console.log(text);

const calc = `12 * 2 = ${12 * 2}`;
console.log(calc);

const isMember = true;
const price = `Gheymat : ${isMember ? '200' : '400'}`;
console.log(price);

const newHtml = `
<div class="text-center">
  <p>${name}</p>
</div>
`;
console.log(newHtml);
