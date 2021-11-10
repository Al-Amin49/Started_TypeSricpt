"use strict";
// browser typescript k chine na . ts k js a nite hobe.
//29-4 Basic typescript type number string boolean
let Money = 50;
let sports = 'Cricket';
let isNice = true;
console.log(Money);
//29-5 Set function parameter type and function return type
function add(num1, num2) {
    return num1 + num2;
}
add(34, 56);
// add(34, 'Al-Amin')
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
const user = fullName('Adam', 'Saleh');
console.log('fullname', user);
//29-6 function void return and arrow function type
function doubleItAndConsole(num) {
    const result = num * 2;
    console.log(result);
}
doubleItAndConsole(10);
//arrow function 
const multiply = (x, y) => x * y;
console.log(multiply(10, 6));
//another way to write arrow function 
let multiply2;
multiply2 = (x, y) => x * y;
console.log('arroFunction', multiply2(20, 6));
//29-7 set type for array and objects and see the structure of type
const numbers = [21, 43, 11, 45, 76, 79, 32];
console.log(numbers.push(22));
const friends = ['Abdullah', 'RahmatUllah', 'Mujibunnessa', 'BokhtiarKilji'];
let megaName = '';
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friend.length > megaName.length) {
        megaName = friend;
    }
}
console.log('Friend with the largest name', megaName);
//object
const friend = {
    name: 'Bahar Islam',
    age: 34
};
friend.age = 43;
// with structure
const friend2 = {
    name: 'Bahar Islam',
    age: 34
};
//structure
let player;
player = {
    club: 'Real Madrid',
    salary: 450000
};
const neymar = {
    name: 'Neymar Jr',
    club: 'PSG',
    salary: 45000000,
    wife: 'Some one',
    isPlaying: true
};
console.log('neymar', neymar);
const ronaldo = {
    name: 'Christiano Ronaldo',
    club: 'Manchester City',
    salary: 35000000,
    isPlaying: true
};
function getBonus(player) {
    return player.salary * 0.1;
}
const poorPlayer = { salary: 10000 };
console.log('interface', getBonus(poorPlayer));
//poorPlayer er jaygay messy ba neymar dile o kaj korbe
function getBonus2(player) {
    return player.salary * 0.1;
}
const poorPlayer2 = { salary: 10000 };
console.log('interface2', getBonus(poorPlayer2));
//29-9 Use type in class and explore private readonly protected
//Ei video ta abar dekle valo hoy --- private , public , protected shomporke research 
//kora uchit
class Person {
    constructor(name, fatherName) {
        this.name = name;
        this._partner = name;
        this.fatherName = name;
    }
    getName() {
        return this.name + '' + this._partner;
    }
}
const sam = new Person('Samuel', 'Badshah');
console.log('name', sam.name, sam.fatherName);
console.log(sam.name = 'ben'); //name change korte parlam
//kintu fathername change korte parbo na jokn tar pashe readonly dibo
