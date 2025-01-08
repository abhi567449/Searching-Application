var container = document.querySelector(".main");

const h1tag = document.createElement("h1");
h1tag.innerText = "🏆LEADERBOARD🏆";
h1tag.style.color = "White";
h1tag.style.width = "100%";
h1tag.style.textAlign = "center";
h1tag.style.fontSize = "67px";

const playersAddDiv = document.createElement("form");
playersAddDiv.style.display = "flex";
playersAddDiv.style.justifyContent = "center";
playersAddDiv.style.gap = "20px";
playersAddDiv.style.padding = "20px";
playersAddDiv.style.width = "60%";
playersAddDiv.style.backgroundColor = "blue";
playersAddDiv.style.marginLeft = "20%";

const firstName = document.createElement("input");
firstName.setAttribute("type", "text");
firstName.setAttribute("placeholder", "First Name");
firstName.style.backgroundColor = "White";
firstName.style.height = "40px";
playersAddDiv.appendChild(firstName);

const lastName = document.createElement("input");
lastName.setAttribute("type", "text");
lastName.setAttribute("placeholder", "Last Name");
lastName.style.backgroundColor = "White";
playersAddDiv.appendChild(lastName);

const selectTag = document.createElement("select");
selectTag.setAttribute("type", "text");
selectTag.setAttribute("placeholder", "Select Country");
selectTag.style.backgroundColor = "White";

const options = ["India", "Australia", "England", "Sri Lanka", "Pakistan"];

const placeholderOption = document.createElement("option");
placeholderOption.innerText = "Select Country";
placeholderOption.disabled = true;
placeholderOption.selected = true;
selectTag.appendChild(placeholderOption);

options.forEach((option) => {
  const optionTag = document.createElement("option");
  optionTag.innerText = option;
  selectTag.appendChild(optionTag);
});

const score = document.createElement("input");
score.setAttribute("type", "text");
score.setAttribute("placeholder", "Score");
score.style.backgroundColor = "White";
score.addEventListener("input", () => {
  console.log(61);
  if (isNaN(score.value)) {
    console.log(63);
    score.innerText = "";
    return;
  }
});

playersAddDiv.appendChild(selectTag);
playersAddDiv.appendChild(score);

const addButton = document.createElement("button");
// score.setAttribute('placeholder','Score')
addButton.innerText = "Add Score";
addButton.style.backgroundColor = "White";
addButton.style.border = "none";
addButton.style.borderRadius = "5px";


const dataDiv = document.createElement("div");
dataDiv.style.width = "60%";
dataDiv.style.marginLeft = "20%";
dataDiv.style.border = "2px solid blue";
dataDiv.style.padding = "20px";

const value = [];
let count = 0
addButton.addEventListener("click", (event) => {

  

  event.preventDefault();
  dataDiv.innerHTML = "";
  if (
    firstName.value === "" ||
    lastName.value === "" ||
    score.value === "" ||
    selectTag.value === "Select Country"
  ) {
    alert("Enter all the fields");
    return;
  }


  value.push({
    id : ++count,
    firstName: firstName.value,
    lastName: lastName.value,
    country: selectTag.value,
    score: score.value,
  });
  firstName.value = "";
  lastName.value = "";
  score.value = "";
  selectTag.value = "Select Country";

  console.log(value);

  

  load()

  container.appendChild(dataDiv);
});

function load()
{
  value.sort((a,b) => b.score - a.score)
  dataDiv.innerHTML =''
  if(value.length ===0)
    {
      return
    }
  value.forEach((data) => {
  const player = document.createElement("div");
  player.style.width = "90%";
  player.style.marginLeft = "2%";
  player.style.marginTop = "2%";
  player.style.backgroundColor = "blue";
  player.style.padding = "20px";
  player.style.display = "flex";
  player.style.justifyContent = "space-between";
  player.style.borderTopRightRadius = "20px";
  player.style.borderBottomRightRadiuss = "20px";

  const first = document.createElement("p");
  first.innerText = data.firstName+" "+data.lastName;
  first.style.color = "white";
  first.style.backgroundColor = "blue";

  const country = document.createElement("p");
  country.innerText = data.country;
  country.style.color = "white";
  country.style.backgroundColor = "blue";

  const score = document.createElement("p");
  score.innerText = data.score;
  score.style.color = "white";
  score.style.backgroundColor = "blue";

  const deleteDiv = document.createElement("div");
  deleteDiv.style.backgroundColor = "blue";
  deleteDiv.style.width = '40%'
  deleteDiv.style.display = 'flex'
  deleteDiv.style.justifyContent = 'space-around'


  const img = document.createElement("img");
  img.src = 'delete-button-svgrepo-com.svg'
  img.style.height ='20px'
  img.style.width ='20px'
  img.style.backgroundColor ='transparent'
  img.style.cursor = 'pointer'
  img.addEventListener('click', () =>
  {
    value.pop(data.id)
    load()
  })

  const product1PlusButton = document.createElement("button");
product1PlusButton.classList.add("plus-minus");
product1PlusButton.innerText = "+5";
product1PlusButton.style.fontSize = "large";
product1PlusButton.style.cursor = 'pointer'

const product1minusButton = document.createElement("button");
product1minusButton.classList.add("plus-minus");
product1minusButton.innerText = "-5";
product1minusButton.style.fontSize = "large";
product1minusButton.style.cursor = 'pointer'

product1PlusButton.addEventListener("click", function () {

let quantity = parseInt(data.score);

quantity +=5
data.score = quantity
score.innerText = quantity;

load()

});

product1minusButton.addEventListener("click", function () {

let quantity = parseInt(data.score);

quantity -=5
if(quantity<0)
{
  alert("Score can not be negative")
  quantity +=5
}
data.score = quantity
score.innerText = quantity;
load()
});

  deleteDiv.appendChild(img)
  deleteDiv.appendChild(product1PlusButton)
  deleteDiv.appendChild(product1minusButton)
  // const country = document.createElement("p");
  // country.innerText = data.country;
  // country.style.color = "white";
  // country.style.backgroundColor = "blue";

  // const score = document.createElement("p");
  // score.innerText = data.score;
  // score.style.color = "white";
  // score.style.backgroundColor = "blue";

  player.appendChild(first);
  player.appendChild(country);
  player.appendChild(score);
  player.appendChild(deleteDiv);
  dataDiv.appendChild(player);
});}

playersAddDiv.appendChild(addButton);

container.appendChild(h1tag);
container.appendChild(playersAddDiv);
