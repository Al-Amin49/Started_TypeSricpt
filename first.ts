// browser typescript k chine na . ts k js a nite hobe.

//29-4 Basic typescript type number string boolean


let Money:number=50;
let sports:string='Cricket';
let isNice:boolean=true;
console.log(Money);


//29-5 Set function parameter type and function return type

function add(num1:number, num2:number)
// function add(num1:number|string, num2:number|string)
{
    return num1 + num2;

}
add(34,56);
// add(34, 'Al-Amin')

function fullName (firstName:string, lastName:string):string
{
    return firstName + " " + lastName;
}
const user:string=fullName('Adam', 'Saleh');
console.log('fullname',user);
//29-6 function void return and arrow function type
function doubleItAndConsole(num:number):void{
    const result = num*2;
    console.log(result);
  }
  doubleItAndConsole(10);
//arrow function 
  const multiply =(x:number, y:number):number=>x*y;
  console.log(multiply(10,6));

  //another way to write arrow function 

  let multiply2:(x:number, y:number)=>number;
  multiply2=(x,y)=>x*y;
  console.log('arroFunction',multiply2(20,6));

  //29-7 set type for array and objects and see the structure of type
  const numbers: number[] = [21,43,11,45,76,79,32];
  console.log(numbers.push(22));

  const friends: string[]=['Abdullah', 'RahmatUllah', 'Mujibunnessa','BokhtiarKilji'];
let megaName:string ='';
  for (let i = 0; i < friends.length; i++) {
      const friend:string = friends[i];

      if(friend.length>megaName.length)
      {
        megaName =friend;
      } 
  }
  console.log('Friend with the largest name', megaName);

  //object
  const friend ={
      name:'Bahar Islam',
      age:34
  }
  friend.age=43;
  // with structure
  const friend2:{name:string, age:number} ={
    name:'Bahar Islam',
    age:34
}

//structure
let player:{
    club:string, 
    salary:number

}
player={
    club:'Real Madrid',
    salary:450000

}
//29-8 Typescript Interface and use complex parameter type
//interface hosse datar akta model

interface Player{
    name:string,
    club:string,
    salary:number,
    wife?:string, // ata optional ronaldor wife takte pare o na takte o pare.
    isPlaying:boolean
}
const neymar:Player={
    name:'Neymar Jr',
    club:'PSG',
    salary:45000000,
    wife:'Some one',
    isPlaying:true
}
console.log('neymar', neymar)
const ronaldo:Player={

    name:'Christiano Ronaldo',
    club:'Manchester City',
    salary:35000000,
    isPlaying:true
}

function getBonus(player:{salary:number}){
    return player.salary*0.1
}
const poorPlayer={salary:10000}
console.log('interface',getBonus(poorPlayer))
//poorPlayer er jaygay messy ba neymar dile o kaj korbe

function getBonus2(player:Player){
    return player.salary*0.1
}
const poorPlayer2={salary:10000}
console.log('interface2',getBonus(poorPlayer2))

//29-9 Use type in class and explore private readonly protected
//Ei video ta abar dekle valo hoy --- private , public , protected shomporke research 
//kora uchit
class Person{
    name:string;
    private _partner:string; //private er vitorei use kora jabe bahire na
   readonly fatherName:string;
    constructor(name:string, fatherName:string){
        this.name =name;
        this._partner =name;
        this.fatherName =name;
    }
    getName():string{
        return this.name + '' +this._partner;
    }
}
const sam = new Person('Samuel', 'Badshah');
console.log('name',sam.name , sam.fatherName);

console.log(sam.name='ben'); //name change korte parlam

//kintu fathername change korte parbo na jokn tar pashe readonly dibo