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
*/

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
