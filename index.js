/*
async function getValue() {
  return 42;
}
const init = () => {
  getValue().then(result => {
    console.log(result)
  })
}
init()

const init2 = async () => {
  const result = await getValue();
  console.log(result);
}
init2();

const wait = millise => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, millise)
  });
}
const init3 = async () => {
  console.log("A");
  await wait(5_000);
  console.log("B")
}
init3();

const getNoti = () => {
  return new Promise(resolve => {
    fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      resolve(data.count)
    })
  })
}
getNoti().then(data => {
  console.log(data)
})

const getNoti2 = async () => {
  const response = await  fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json");
  const data = await response.json();
  console.log(data);
  return data.count
}
getNoti2().then(data => {
  console.log(data);
});

const getUn = async () => {
  const response = await await fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json");
  const data = await response.json();
  return data.count;
}
const init = async () => {
  try{
    const result = await getUn()
  console.log(result)
  } catch (error){
    console.error(error);
  }
  
}
init()

const fail = () => {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      rejects("Ahemd");
    }, 3_000);
  })
}
const init2 = async () => {
  try {
    const result = await fail();
    console.log("Mohmed")
  } catch (erroe){
    console.log("AAf");
    console.error(erroe);
  }
}
init2()


function input_type(value) {
  // write your code here
  if (typeof value === "string"){
    return "string";
  } else if (Number.isInteger(Number(value))){
    return "integer"
  }
  return "float";
};

console.log(input_type(21.21))



function gravity_flip(columns) {
  // write your code here
  return columns.sort((a,b) => a - b);
}
console.log(gravity_flip([2, 3, 8]))

for (let counter = 1; counter <= 10; counter++){
  console.log(counter)
}
const people = ["Sam", "Alex"];
for (let index = 0; index < people.length; index++){
  console.log(people[index])
}
people.forEach(person => {
  console.log(person);
})

for(let number = 0; number <= 20; number += 2){
  console.log(number)
}

for(const person of people){
  console.log(person)
}

let sum = 0;

for (const number of numbers) {
    sum += number;
    if (sum >= 500) {
        break;
    }
}
    
const items = [1, 2, 3, 4];

for (const item of items) {
    if (item % 2 === 0) {
        console.log("Even number, skip the iteration");
        continue;
    }
    console.log("Odd number", item);
}
const itemss = document.querySelectorAll(".items");
for (const item of items) {
    console.log(item.textContent);
}
    
   const person = {
    id: 1,
    name: "Alex"
   }
   for (const key in person){
    //console.log(key);
    console.log(person[key])
   }
    */
   function init() {
    console.log("A");
    console.log("B");
}

init();

setTimeout(function logA() {
  console.log("Aييي");
}, 5_000);