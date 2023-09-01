interface PersonInterface {
  name: string;
  age: number;
  greet():string;
  greetAge():string
}

class Person implements PersonInterface {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hi Mr ${this.name}`;
  }
  greetAge() {
      return `Your Age is ${this.age}`
  }
}

const personObject = new Person('krishna', 27);

console.log(personObject.greet());
console.log(personObject.greetAge());
