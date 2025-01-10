var container = document.querySelector(".main");

const orderDiv = document.createElement("div");
orderDiv.style.width = "30%";
orderDiv.style.height = "20%";
orderDiv.style.marginLeft = "34%";
orderDiv.style.display = "flex";
orderDiv.style.flexWrap = "wrap";
orderDiv.style.justifyContent = "space-evenly";
orderDiv.style.position = "absolute";


const orderIdP = document.createElement("p");
orderIdP.style.color = 'rgba(48, 35, 31, 0.69)'
orderIdP.style.left = '90%'

const button = document.createElement("button");
button.innerText = "Order Food";
button.style.border = "none";
button.style.borderRadius = "20px";
button.style.color = "rgba(48, 35, 31, 0.69)";
button.style.fontSize = "20px";
button.style.width = "100%";
button.style.cursor = "pointer";
button.style.backgroundColor = "rgba(238, 102, 60, 0.692)";
button.style.boxShadow = "3px 3px 3px 1px rgba(136, 95, 82, 0.69) ";

button.addEventListener("click", () => {

    const promise = new Promise(function(resolved,reject)
{
    setTimeout(function()
{
    resolved()
},getRandomSec())
})

function getRandomSec()
{
    let sec = Math.floor(Math.random() * 1000) +100
   
    return sec
}
function getRandomOrderId()
{
    let sec = Math.floor(Math.random() * 5000) +100
   
    return sec
}

    promise.then(function()
{
    let food = "";
    button.disabled = true;
    button.style.backgroundColor = "rgba(209, 138, 119, 0.69)";
    imgDiv.innerHTML = ''

    let orderId = getRandomOrderId()
    orderIdP.innerText = 'Order Id: '+orderId
    container.appendChild(orderIdP)
    if (checkboxburger.checked) {
      imgBurger.src =
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60";
        imgDiv.appendChild(imgBurger);
    }
    if (checkboxFries.checked) {
      imgDrink.src =
        "https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60";
        imgDiv.appendChild(imgDrink);
    }
    if (checkboxDrink.checked) {
      imgFries.src =
        "https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60";
        imgDiv.appendChild(imgFries);
    }

    container.appendChild(imgDiv)
})

 
  
});

const imgDiv = document.createElement("div");

imgDiv.style.width = '100%'
imgDiv.style.height = '500px'
imgDiv.style.top = '200px'
imgDiv.style.display = 'flex'
imgDiv.style.justifyContent = 'space-evenly'

const imgBurger = document.createElement("img");
imgBurger.style.width = "300px";
imgBurger.style.height = "400px";

const imgFries = document.createElement("img");
imgFries.style.width = "300px";
imgFries.style.height = "400px";

const imgDrink = document.createElement("img");
imgDrink.style.width = "300px";
imgDrink.style.height = "400px";


const orderform = document.createElement("form");
orderform.style.gap = "30px";
orderform.style.display = "flex";

const checkboxburger = document.createElement("input");
checkboxburger.setAttribute("type", "checkbox");
checkboxburger.setAttribute("name", "Burger");
checkboxburger.setAttribute("value", "Burger");

const labelburger = document.createElement("label");
labelburger.innerText = "Burger";
labelburger.setAttribute("for", "Burger");

const checkboxDrink = document.createElement("input");
checkboxDrink.setAttribute("type", "checkbox");
checkboxDrink.setAttribute("name", "Drink");
checkboxDrink.setAttribute("value", "Drink");

const labelDrink = document.createElement("label");
labelDrink.innerText = "Drink";
labelDrink.setAttribute("for", "Drink");

const checkboxFries = document.createElement("input");
checkboxFries.setAttribute("type", "checkbox");
checkboxFries.setAttribute("name", "Fries");
checkboxFries.setAttribute("value", "Fries");

const labelFries = document.createElement("label");
labelFries.innerText = "Fries";
labelFries.setAttribute("for", "Fries");

orderform.appendChild(checkboxburger);
orderform.appendChild(labelburger);
orderform.appendChild(checkboxDrink);
orderform.appendChild(labelDrink);
orderform.appendChild(checkboxFries);
orderform.appendChild(labelFries);
orderDiv.appendChild(button);
orderDiv.appendChild(orderform);

container.appendChild(orderDiv);

// const jokeDiv = document.createElement('div')
// jokeDiv.style.height = '300px'
// jokeDiv.style.width = '500px'
// jokeDiv.style.backgroundColor = 'rgba(238, 102, 60, 0.692)'
// jokeDiv.style.position = 'absolute'
// jokeDiv.style.top = '38%'
// jokeDiv.style.left = '33%'
// jokeDiv.style.borderRadius = '20px'

// const headpan1 = document.createElement('p')
// headpan1.innerText = 'Dad Jokes Generator'
// headpan1.style.color = 'white'
// headpan1.style.fontSize ='20px'
// headpan1.style.top ='10px'
// headpan1.style.left ='30%'

// const jokepan1 = document.createElement('p')
// jokepan1.innerText = 'Dad Joke'
// jokepan1.style.color = 'white'
// jokepan1.style.fontSize ='20px'
// jokepan1.style.top ='40px'
// jokepan1.style.textAlign ='center'

// const button = document.createElement('button')
// button.innerText = 'Tell me a Joke'
// button.style.border = 'none'
// button.style.borderRadius = '20px'
// button.style.color = 'white'
// button.style.fontSize ='20px'
// button.style.top ='200px'
// button.style.left ='30%'
// button.style.width ='200px'
// button.style.cursor ='pointer'
// button.style.backgroundColor = 'rgba(238, 102, 60, 0.692)'
// button.style.boxShadow = '3px 3px 3px 1px rgba(136, 95, 82, 0.69) '
// button.style.position = 'absolute'
// button.addEventListener('click', getJoke)

// jokeDiv.appendChild(headpan1)
// jokeDiv.appendChild(jokepan1)
// jokeDiv.appendChild(button)
// container.appendChild(jokeDiv)

// let api_url = 'https://api.api-ninjas.com/v1/dadjokes?';
// let options = {
//     method : 'GET',
//     headers : {
//         'X-Api-Key' : 'Y/CmmirbQHgq7LVJEILY0w==I181IgAvrrszpwl8'
//     }
// }

// async function getJoke()
// {
//     try
//     {
//         jokepan1.innerText = 'Updating...'

//         let response = await fetch(api_url,options)
//         const data = await response.json();
//         jokepan1.innerText = data[0].joke

//         console.log(data[0].joke)
//     }
//     catch(error)
//     {
//         console.error()
//     };

// }
