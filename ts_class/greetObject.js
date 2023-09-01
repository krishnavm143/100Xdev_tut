"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agePrint = exports.intro = void 0;
function intro(person) {
    return `My name is ${person.name} and my age is ${person.age}`;
}
exports.intro = intro;
function agePrint(person) {
    return `You are ${person.age} years of old`;
}
exports.agePrint = agePrint;
console.log(intro({
    name: 'krishna',
    age: 27,
}));
console.log(agePrint({
    name: 'krishna',
    age: 27,
}));
