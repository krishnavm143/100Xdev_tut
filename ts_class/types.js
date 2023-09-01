"use strict";
function greet(person) {
    return `Hello ${person.name}`;
}
console.log(greet({ name: 'kitty', age: 27 }));
