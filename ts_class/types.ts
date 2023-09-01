type personType = {
  name: string;
  age: number;
};

function greet(person: personType) {
  return `Hello ${person.name}`;
}

console.log(greet({ name: 'kitty', age: 27 }));
