// console.log(1+2);
// function numbers(...numb) {
//   console.log(numb);
// }
// numbers([1,2,3,4,56])
// [1,2,3,4,56]
console.log( ...[1,23,4,5,6,] );

const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8,9,10]
const arr3 = [...arr1, ...arr2]
console.log(...arr3);
const Person  = {
  name: {
    first: "Kolya",
    last: "Murzinov"
  },
  age: 20
}
const temp = {
  port: 3030
}
const { name : {first, last} } = Person
console.log(first, last);
function connect ( {
  host = 'local',
  port = '80',
  user = 'admin'
} = {}) {
  console.log(host, port, user);
}

connect()
let nn = {
  a:'a1',
  b:'b1'
}
Object.entries(nn).forEach(([, val]) => console.log(val));

Object.keys(nn).forEach(item =>console.log(nn[item])
);
const newPerson = Object.assign({},Person)

console.log(newPerson);

const cat = {
  name:'cat',
  sound:'meouw'
}
const dog = {
  name: 'dog',
  sound: 'ouf'
}

const animal = {
  say: function() {
    console.log(this.name, this.sound);
    
  }
}
Object.setPrototypeOf(cat, animal)
Object.setPrototypeOf(dog, animal)
dog.say()
