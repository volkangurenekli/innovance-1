import "./styles.css";

var list1 = document.getElementById("timeout-list1");
var list2 = document.getElementById("timeout-list2");
var drink = document.getElementById("favourite-drink");
var yesNo1 = document.getElementById("yes-no1");
var yesNo2 = document.getElementById("yes-no2");
var button1 = document.getElementById("yes-no-btn1");
var button2 = document.getElementById("yes-no-btn2");
//////////////////////////////////////////////////////////
// F I R S T   Q U E S T I O N    F I R S T   S O L U T I O N 
//////////////////////////////////////////////////////////
for (let index = 0; index < 5; index++) {
  setTimeout(() => {
    const itemList = document.createElement("li");
    itemList.innerHTML = index;
    list1.appendChild(itemList);
  });
}
//////////////////////////////////////////////////////////
// F I R S T   Q U E S T I O N  S E C O N D   S O L U T I O N 
//////////////////////////////////////////////////////////
const counter = index => {
  setTimeout(
    (() => {
      let itemList = document.createElement("li");
      itemList.innerHTML = index;
      list2.appendChild(itemList);
    })()
  );
};

for (let index = 0; index < 5; index++) {
  counter(index);
}
//////////////////////////////////////////////////////////
// S E C O N D   Q U E S T I O N   A N S W E R
//////////////////////////////////////////////////////////
  const person = {
    favourites: {
      dish: "Pizza",
      drink: "Cola"
    }
  };
  
  const nonPureFunction = person => {
    const favourites = { ...person, drink: "Ice Tea" };
    return {
      favourites
    };
  };
  
  const personWithNewTaste = nonPureFunction(person);
  drink.innerHTML =
    'Old me likes "' +
    person.favourites.drink +
    '" but new me likes "' +
    personWithNewTaste.favourites.drink +
    '"';
//////////////////////////////////////////////////////////
// T H I R D   Q U E S T I O N    F I R S T   S O L U T I O N 
//////////////////////////////////////////////////////////

button1.addEventListener("click", getAnswer1);

async function getAnswer1() {
  const response = await fetch("https://yesno.wtf/api");
  const object = await response.json();
  yesNo1.innerHTML = object.answer;
}


//////////////////////////////////////////////////////////
// T H I R D   Q U E S T I O N    S E C O N D   S O L U T I O N 
//////////////////////////////////////////////////////////

button2.addEventListener("click", getAnswer2);

function getAnswer2() {
  return new Promise((res, rej) => {
    fetch("https://yesno.wtf/api")
      .then(response => response.json())
      .then(data => {
        res(data);
        data = data.answer;
        yesNo2.innerHTML = data;
      })
      .catch(error => rej(error));
  });
}
