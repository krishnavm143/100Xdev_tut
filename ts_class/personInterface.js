"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hi Mr ${this.name}`;
    }
    greetAge() {
        return `Your Age is ${this.age}`;
    }
}
const personObject = new Person('krishna', 27);
console.log(personObject.greet());
console.log(personObject.greetAge());
