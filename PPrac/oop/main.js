'use strict'
class Worker {
  constructor(name,surname,rate){
    this._name = name;
    this.surname = surname;
    this.rate = rate;
  }
  getSalary() {
    console.log(`зарплата = ${this.rate}`);
  }

};
class SurerWorker extends Worker{
  constructor(name,surname,rate,superRate){
  super(name,surname,rate);
    this._superRate = superRate;
  }
  getSalary(){
    console.log('ns');
    
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
}
const worker = new Worker("Kolya", "Murzinov", 0);
const superWorker = new SurerWorker("Kolya", "Murzinov", 0,1000);
// console.log(superWorker.name);
// console.log(superWorker.name);
superWorker.name = "i am";
console.log(superWorker.name);
console.log(superWorker.name);
console.log(superWorker);
function a() {
  let count = 0;
  return function () {
    return count++;
  }
}
let nextCounter = a();
let newCounter = a();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(nextCounter());
console.log(nextCounter());
console.log(nextCounter());
let mas  = [1,2,3,5,77,8,2,2]
let mas1  = [-1,-6,10,1,2,3,5,77,8,2,2]
console.log(mas);
let emptyMass = []
let menu = {
  frst : "frst",
  secnd : "secnd",
  third : "third",
}
for(a in menu) {
  // console.log(menu[a])
}
// console.log(menu);
mas.forEach(element => {
  // console.log(element);
});
function isEmpty(tempMass) {
  let counter = 0;
    tempMass.forEach(element => {
      counter++;
    });
    return counter;
  
}
let twink = {};
// twink.frst = "not first"
for(a in menu){
  twink[a] = menu[a];
}
function calc (a,b) {
  return (a>b)? 1: -1;
}
console.log(mas);
mas.shift(77);
console.log(mas);
mas.splice(0, 2)
console.log(mas);
let str =  mas.join();
mas.sort(calc);
console.log(mas);
mas1.sort(calc);
console.log(mas1);
let mas3 = mas.concat();
console.log(mas3);
var store = {
  className: "div a from"
}; // объект для коллекции

var items = ["div", "a", "form"];

for (var i = 0; i < items.length; i++) {
  var key = items[i]; // для каждого элемента создаём свойство
  store[key] = true; // значение здесь не важно
}
console.log(store["div"]);


console.log(items.indexOf("di"))
function addClass(obj, cls) {
  let massObj = obj.className.split(" ");
  console.log(massObj);
  if(massObj.indexOf(cls) == -1) {
    massObj = `${massObj.join(" ")} ${cls}`;
    obj.className = massObj;
  }   
};
function camelize(str) {
  str = str.split("-")
  console.log(str);
  
  for (let index = 1; index < str.length; index++) {
    let element = str[index];
    element = element[0].toUpperCase() + element.slice(1,element.length)
    str[index] = element;
  }
  str = str.join("");
  return str;
}
addClass(store,"di");
addClass(store,"div");
addClass(store,"diva");
addClass(store,"a");

let newString = camelize("background-color");
let nextString = camelize("list-style-image");
console.log(newString);
console.log(nextString);
let arr = ["HTML", "JavaScript", "CSS"];
let sortArr = arr.slice().sort();
arr[0] = "ww";
console.log(sortArr);
var names = ['HTML', 'CSS', 'JavaScript'];

var nameLengths = names.map(function(name) {
  return name.length;
});
mas1 = mas1.filter((a)=> {return a>0});
console.log(mas1);
// получили массив с длинами
console.log( nameLengths ); // 4,3,1
function sayHi() {
  for(i in arguments) {
  console.log(`привет ${arguments[i]}`);
  } 
}
sayHi('z','sa', 'si')
sayHi('za','saa', 'sia')


function testFunc(obje) {
  let first = obje.first || 1,
  second = obje.second || 2,
  moi = obje.moi || "moi"
  let newMas = [first, second, moi]
  return newMas
}
let myObj = {
  moi: "ne moi"
}
let newObj = testFunc(myObj);
let tryObj = {}
newObj.forEach(element => {
  tryObj[element] = element
});

console.log(tryObj);
let date = new Date();
console.log(date);

let divs = document.querySelectorAll('div');
let div = divs[0];
let link = document.querySelector('a');
console.log(link);

// link.addEventListener('click', ()=> {
//  console.log('cli');

//   div.style.display = (div.style.display === "none") ? 'flex': 'none';
// })
divs.forEach((element,i) => { 
  element.addEventListener('click',(e)=>{
    console.log(e);
    e.stopPropagation();
    console.log(`привет я ${element.getAttribute("id")}`);   
  });
  
});

let team = {
  name: "Kolya",
  work: "none",
  friends: "none",
  helps: ['car','mam','fath']
}
let teamJS = JSON.stringify(team);

console.log(JSON.stringify(team));
console.log(JSON.parse(teamJS));
let obj = {
  name: "MyNameIs"
}
document.querySelector("button").addEventListener('click',()=> {
 let input = document.querySelector("input").value;
 obj.name = input;
 localStorage.setItem("something", JSON.stringify(obj))
});

document.addEventListener("DOMContentLoaded", ()=> {
  let text = {};
  try {
    text = JSON.parse(localStorage.getItem('something'));
  } catch (error) {
  }
  if(text && text.name && text.name.trim()) {
    // document.querySelector("h1").textContent = text.name;
  }
})
let teep = "qwerrr";
for (const iterator in teep) {
  console.log(teep[iterator]);
  
}
const buildCharObject = str => {
  const charObj = {}
  for(let char of str) {
    // if the object has already a key value pair
    // equal to the value being looped over,
    // increase the value by 1, otherwise add
    // the letter being looped over as key and 1 as its 
    console.log(char);
    
    charObj[char] = charObj[char] + 1 || 1
    console.log(charObj[char]);
  }
  return charObj
}
console.log(buildCharObject(teep));

let ford = Object.create({
  caluclateDistancePerYear: function (param) {    
   Object.defineProperty(this, 'distancePerYear', {
     value: Math.ceil(this.distance/this.age)
   })
  }
},{
  name: {value:"Ford"},
  year:{value:2017},
  distance:{
    value:10000,
    enumerable:true,
    writable:false,
  },
  age: {
    enumerable:true,
    get:function() {
      console.log("получаем возраст");
      return new Date().getFullYear() - this.year;
    },
    set: function() {
      console.log("устанавливаем значеник");
    },
  }
})

Object.keys(team).forEach(element => {  
  console.log(element);
});

function Head(text) {
  let counter = 0
  return {
    increment:()=>{
      counter++;
    },
    decrement:()=>{
      counter--;
    },
    getText:()=>{
      return text;
    },
    getCounter:()=>{
      return counter;
    }
  }
}
let firstHead = Head("first head"); 
let SecondHead = Head("second head");
Object.defineProperty(firstHead,"tetsProp",{
  value:"its work",
  enumerable: true
})
console.log(firstHead);
let person = {
  name: "I am",
  work:"no work",
  year: 20,
  someFunk:()=>{
    setTimeout(function(){
      console.log(this.name);
      console.log(this.work);
      console.log(this.year);
    }.bind(),0)
    console.log(this);
  },
  displayInfo: function(ms){
    setTimeout(function() {
      console.log(this.name);
      console.log(this.work);
      console.log(this.year);
    }.bind(this),ms)
  }
}
// person.displayInfo(0);
let firstArray = [1,2,3],
    secondArray = [1,"hello",3];
Array.prototype.double = function (param) { 
  return this.map(function(el){
    if (typeof el === "number") {
      return el*2
    }
    if (typeof el === "string") {
      return el+el
    }
  })
}
console.log(firstArray.double());
console.log(secondArray.double());
const minFunc = (title = "defoult", name = "defoult", noName = "defoult")=>({title,name,noName})
Object.keys(minFunc("вот")).forEach(element => {
  console.log(element);
});
let yearField = "yearField"
const bmw = {
  name: "BMW",
  model: "vf",
  [yearField]:3026,
  logFunk() {
    const {name,model,yearField} = this
    console.log(yearField+name+model);
  }
}
bmw.logFunk();
const {name} = bmw;
console.log(name);
const form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  const title = form.title.value;
  const name = form.text.value;
  const descr = form.descr.value;
  console.log(title , name, descr);
  saveForm(title,name, descr)// title:title, text:text
})
//Spread оператоп
// function saveForm(data) {
//   const formData = {
//     date: new Date().toDateString(),
//     ...data
//   }
//   console.log(formData);
  
// }
// Rest оператор
function saveForm(...args) {
  const [title , name, descr] = args;
  const formData = {
    date: new Date().toDateString(),
    title , name, descr
  }
  console.log(formData);
  
}

const ul = document.querySelector("ul");
  let createLink = ({path,name}) => `<a href="${path}">${name}</a>`;
  const yandex = {path:"https://www.yandex.ru/", name:"Yandex"} 
  const google = {path:"https://www.google.ru/", name:"Google"} ;
  ul.insertAdjacentHTML('afterbegin',`<li>${createLink(google)}</li>`);
  ul.insertAdjacentHTML('afterbegin',`<li>${createLink(yandex)}</li>`);

  class RootElement {
    constructor(tagName = "div") {
      this.elem = document.createElement(tagName);
      this.elem.style.marginBottom = '20px'
    }
  }
  class Box extends RootElement {
    constructor(color = "red", size = "100px", tagName) {
      super(tagName);
      this.color = color;
      this.size = size;
    }
    createElem() {
      let {style} = this.elem; 
      style.background = this.color;
      style.height = style.width = this.size;
      document.querySelector("div").insertAdjacentElement("afterbegin",this.elem);
    }
  }
  let newBox = new Box();
  let secondBox = new Box("black", "150px");
  newBox.createElem();
  secondBox.createElem();
  console.log(newBox);
  const oo = {
    temp: "temp"
  }
  const {temp} = oo
  console.log(temp);
  



