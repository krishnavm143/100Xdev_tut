interface Person {
  name: string;
  age: number;
}

export function intro(person: Person): string {
  return `My name is ${person.name} and my age is ${person.age}`;
}

export function agePrint(person: Person): string {
  return `You are ${person.age} years of old`;
}

console.log(
  intro({
    name: 'krishna',
    age: 27,
  })
);

console.log(
  agePrint({
    name: 'krishna',
    age: 27,
  })
);
