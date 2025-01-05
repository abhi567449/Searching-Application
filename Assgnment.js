var container = document.querySelector(".main");

let sum = 0;

const leftcontainer = document.getElementsByClassName("left-container")[0];
const rightcontainer = document.getElementsByClassName("right-container")[0];


const Products = [
    {id: 1, name: 'Product-1', price:100},
    {id: 2, name: 'Product-2', price:200},
    {id: 3, name: 'Product-3', price:300},
    ];

    

const h1tag = document.createElement("h1");
h1tag.innerText = "Products";
h1tag.style.marginLeft = "270px";
h1tag.style.marginTop = "20px";
leftcontainer.appendChild(h1tag);

const h1tag2 = document.createElement("h1");
h1tag2.innerText = "Cart";
h1tag2.style.marginLeft = "300px";
h1tag2.style.marginTop = "20px";
rightcontainer.appendChild(h1tag2);

const product1 = document.createElement("div");
product1.classList.add("product");
product1.style.width = "90%";
product1.style.height = "50px";
product1.style.margin = "30px";

const product1ptag = document.createElement("p");
product1ptag.innerText = Products[0].name;
product1ptag.style.alignContent = "center";
product1ptag.style.marginLeft = "20px";

const product1price = document.createElement("div");
product1price.classList.add("product");
product1price.innerText =  Products[0].price;;

const product1quantity = document.createElement("div");
product1quantity.classList.add("product");

const buttonDiv = document.createElement("div");
buttonDiv.classList.add("product-quantity");

const product1PlusButton = document.createElement("button");
product1PlusButton.classList.add("plus-minus");
product1PlusButton.innerText = "+";
product1PlusButton.style.fontSize = "large";

const productItems = document.createElement("div");
productItems.classList.add("product");
productItems.style.width = "90%";
productItems.style.height = "50px";
productItems.style.margin = "10px";

const sum1Items = document.createElement("div");
sum1Items.classList.add("product");
sum1Items.style.width = "90%";
sum1Items.style.height = "50px";
sum1Items.style.margin = "10px";
sum1Items.style.marginTop = "120px";

const sumDiv = document.createElement("div");
sumDiv.style.width = "100%";
sumDiv.style.height = "50%";
sumDiv.style.margin = "30px";

const cart = document.createElement("div");
cart.style.width = "100%";
cart.style.height = "50%";
cart.style.margin = "30px";

product1PlusButton.addEventListener("click", function () {
  console.log(product1quntityptag.textContent);

  let quantity = parseInt(product1quntityptag.textContent);

  product1quntityptag.innerText = ++quantity;

  productItems.innerHTML = "";

  const product1ptag = document.createElement("p");
  product1ptag.innerText =  Products[0].name;;
  product1ptag.style.alignContent = "center";
  product1ptag.style.marginLeft = "20px";

  const product1ptag2 = document.createElement("p");
  product1ptag2.innerText = quantity + " X 100";
  product1ptag2.style.alignContent = "center";
  product1ptag2.style.marginRight = "20px";

  productItems.appendChild(product1ptag);
  productItems.appendChild(product1ptag2);
  cart.appendChild(productItems);
  rightcontainer.appendChild(cart);

  addItems(product1price.textContent);
});

const product1quntityptag = document.createElement("p");
product1quntityptag.innerText = "0";
product1quntityptag.style.marginTop = "3%";

const product1MinusButton = document.createElement("button");
product1MinusButton.classList.add("plus-minus");
product1MinusButton.innerText = "-";
product1MinusButton.style.fontSize = "large";

product1MinusButton.addEventListener("click", function () {
  console.log(product1quntityptag.textContent);

  let quantity = parseInt(product1quntityptag.textContent);
  if (quantity === 0) {
    return;
  }
  product1quntityptag.innerText = --quantity;

  productItems.innerHTML = "";

  var product1ptag = document.createElement("p");
  product1ptag.innerText =  Products[0].name;;
  product1ptag.style.alignContent = "center";
  product1ptag.style.marginLeft = "20px";

  var product1ptag1 = document.createElement("p");
  product1ptag1.innerText = quantity + " X 100";
  product1ptag1.style.alignContent = "center";
  product1ptag1.style.marginRight = "20px";

  productItems.appendChild(product1ptag);
  productItems.appendChild(product1ptag1);
  cart.appendChild(productItems);
  rightcontainer.appendChild(cart);

  subtractItems(product1price.textContent);

  if (quantity === 0) {
    cart.removeChild(productItems);
  }
  if (sum === 0) {
    rightcontainer.removeChild(sumDiv);
  }
});

buttonDiv.appendChild(product1MinusButton);
buttonDiv.appendChild(product1quntityptag);
buttonDiv.appendChild(product1PlusButton);

product1.appendChild(product1ptag);
product1.appendChild(product1price);
product1.appendChild(buttonDiv);

//Product 2

const product2 = document.createElement("div");
product2.classList.add("product");
product2.style.width = "90%";
product2.style.height = "50px";
product2.style.margin = "30px";

const product2ptag = document.createElement("p");
product2ptag.innerText =  Products[1].name;;
product2ptag.style.alignContent = "center";
product2ptag.style.marginLeft = "20px";

const product2price = document.createElement("div");
product2price.classList.add("product");
product2price.innerText =  Products[1].price;;

const product2quantity = document.createElement("div");
product2quantity.classList.add("product");

const button2Div = document.createElement("div");
button2Div.classList.add("product-quantity");

const product2PlusButton = document.createElement("button");
product2PlusButton.classList.add("plus-minus");
product2PlusButton.innerText = "+";
product2PlusButton.style.fontSize = "large";

const product2Items = document.createElement("div");
product2Items.classList.add("product");
product2Items.style.width = "90%";
product2Items.style.height = "50px";
product2Items.style.margin = "10px";

product2PlusButton.addEventListener("click", function () {
  console.log(product2quntityptag.textContent);

  let quantity = parseInt(product2quntityptag.textContent);

  product2quntityptag.innerText = ++quantity;

  product2Items.innerHTML = "";

  const product2ptag = document.createElement("p");
  product2ptag.innerText =  Products[1].name;
  product2ptag.style.alignContent = "center";
  product2ptag.style.marginLeft = "20px";

  const product2ptag2 = document.createElement("p");
  product2ptag2.innerText = quantity + " X 200";
  product2ptag2.style.alignContent = "center";
  product2ptag2.style.marginRight = "20px";

  product2Items.appendChild(product2ptag);
  product2Items.appendChild(product2ptag2);
  cart.appendChild(product2Items);
  rightcontainer.appendChild(cart);

  addItems(product2price.textContent);
});

const product2quntityptag = document.createElement("p");
product2quntityptag.innerText = "0";
product2quntityptag.style.marginTop = "3%";

const product2MinusButton = document.createElement("button");
product2MinusButton.classList.add("plus-minus");
product2MinusButton.innerText = "-";
product2MinusButton.style.fontSize = "large";

product2MinusButton.addEventListener("click", function () {
  console.log(product2quntityptag.textContent);

  let quantity = parseInt(product2quntityptag.textContent);
  if (quantity === 0) {
    return;
  }
  product2quntityptag.innerText = --quantity;

  product2Items.innerHTML = "";

  var product2ptag = document.createElement("p");
  product2ptag.innerText =  Products[1].name;
  product2ptag.style.alignContent = "center";
  product2ptag.style.marginLeft = "20px";

  var product2ptag2 = document.createElement("p");
  product2ptag2.innerText = quantity + " X 200";
  product2ptag2.style.alignContent = "center";
  product2ptag2.style.marginRight = "20px";

  product2Items.appendChild(product2ptag);
  product2Items.appendChild(product2ptag2);
  cart.appendChild(product2Items);
  rightcontainer.appendChild(cart);

  subtractItems(product2price.textContent);

  if (quantity === 0) {
    cart.removeChild(product2Items);
  }
  if (sum === 0) {
    rightcontainer.removeChild(sumDiv);
  }
});

button2Div.appendChild(product2MinusButton);
button2Div.appendChild(product2quntityptag);
button2Div.appendChild(product2PlusButton);

product2.appendChild(product2ptag);
product2.appendChild(product2price);
product2.appendChild(button2Div);

//Product 3

const product3 = document.createElement("div");
product3.classList.add("product");
product3.style.width = "90%";
product3.style.height = "50px";
product3.style.margin = "30px";

const product3ptag = document.createElement("p");
product3ptag.innerText = Products[2].name;
product3ptag.style.alignContent = "center";
product3ptag.style.marginLeft = "20px";

const product3price = document.createElement("div");
product3price.classList.add("product");
product3price.innerText =Products[2].price;

const product3quantity = document.createElement("div");
product3quantity.classList.add("product");

const button3Div = document.createElement("div");
button3Div.classList.add("product-quantity");

const product3PlusButton = document.createElement("button");
product3PlusButton.classList.add("plus-minus");
product3PlusButton.innerText = "+";
product3PlusButton.style.fontSize = "large";

const product3Items = document.createElement("div");
product3Items.classList.add("product");
product3Items.style.width = "90%";
product3Items.style.height = "50px";
product3Items.style.margin = "10px";

product3PlusButton.addEventListener("click", function () {
  console.log(product3quntityptag.textContent);

  let quantity = parseInt(product3quntityptag.textContent);

  product3quntityptag.innerText = ++quantity;

  product3Items.innerHTML = "";

  var product3ptag = document.createElement("p");
  product3ptag.innerText = Products[2].name;
  product3ptag.style.alignContent = "center";
  product3ptag.style.marginLeft = "20px";

  var product3ptag3 = document.createElement("p");
  product3ptag3.innerText = quantity + " X 300";
  product3ptag3.style.alignContent = "center";
  product3ptag3.style.marginRight = "20px";

  product3Items.appendChild(product3ptag);
  product3Items.appendChild(product3ptag3);
  cart.appendChild(product3Items);
  rightcontainer.appendChild(cart);

  addItems(product3price.textContent);
});

const product3quntityptag = document.createElement("p");
product3quntityptag.innerText = "0";
product3quntityptag.style.marginTop = "3%";

const product3MinusButton = document.createElement("button");
product3MinusButton.classList.add("plus-minus");
product3MinusButton.innerText = "-";
product3MinusButton.style.fontSize = "large";

product3MinusButton.addEventListener("click", function () {
  console.log(product3quntityptag.textContent);

  let quantity = parseInt(product3quntityptag.textContent);

  if (quantity === 0) {
    return;
  }

  product3quntityptag.innerText = --quantity;
  product3Items.innerHTML = "";

  var product3ptag = document.createElement("p");
  product3ptag.innerText = Products[2].name;
  product3ptag.style.alignContent = "center";
  product3ptag.style.marginLeft = "20px";

  var product3ptag3 = document.createElement("p");
  product3ptag3.innerText = quantity + " X 300";
  product3ptag3.style.alignContent = "center";
  product3ptag3.style.marginRight = "20px";

  product3Items.appendChild(product3ptag);
  product3Items.appendChild(product3ptag3);
  cart.appendChild(product3Items);
  rightcontainer.appendChild(cart);

  subtractItems(product3price.textContent);

  if (quantity === 0) {
    cart.removeChild(product3Items);
  }
  if (sum === 0) {
    rightcontainer.removeChild(sumDiv);
  }
});

button3Div.appendChild(product3MinusButton);
button3Div.appendChild(product3quntityptag);
button3Div.appendChild(product3PlusButton);

product3.appendChild(product3ptag);
product3.appendChild(product3price);
product3.appendChild(button3Div);

leftcontainer.appendChild(product1);
leftcontainer.appendChild(product2);
leftcontainer.appendChild(product3);

function addItems(price) {

    
  sum1Items.innerHTML = "";
  sum += parseInt(price);

  const totalptag = document.createElement("p");
  totalptag.innerText = "Total : ";
  totalptag.style.alignContent = "center";
  totalptag.style.marginLeft = "20px";

  const sumtag = document.createElement("p");
  sumtag.innerText = sum;
  sumtag.style.alignContent = "center";
  sumtag.style.marginRight = "20px";

  sum1Items.appendChild(totalptag);
  sum1Items.appendChild(sumtag);
  sumDiv.appendChild(sum1Items);
  rightcontainer.appendChild(sumDiv);
}

function subtractItems(price) {
  sum1Items.innerHTML = "";
  sum -= parseInt(price);

  const totalptag = document.createElement("p");
  totalptag.innerText = "Total : ";
  totalptag.style.alignContent = "center";
  totalptag.style.marginLeft = "20px";

  const sumtag = document.createElement("p");
  sumtag.innerText = sum;
  sumtag.style.alignContent = "center";
  sumtag.style.marginRight = "20px";

  sum1Items.appendChild(totalptag);
  sum1Items.appendChild(sumtag);
  sumDiv.appendChild(sum1Items);
  rightcontainer.appendChild(sumDiv);
}

// const noteDiv = document.createElement("div");
// noteDiv.style.display ='flex'
// noteDiv.style.marginTop = '200px'
// noteDiv.style.marginLeft = '80px'

// const textarea = document.createElement("textarea");
// textarea.setAttribute("placeholder", "// Write a note here")
// textarea.style.height = '200px'
// textarea.style.width = '400px'
// textarea.style.borderRadius = '5px'
// textarea.style.boxShadow ='3px 3px 2px 3px grey'
// textarea.style.padding ='20px'

// const leftcontainer = document.getElementsByClassName("left-container")[0]
// const rightcontainer = document.getElementsByClassName("right-container")[0]

// const input = document.createElement("input");
// input.setAttribute("type","color")
// input.setAttribute("value","#00FFA1")

// input.style.marginLeft = '20px'
// input.style.marginTop = '60px'
// input.style.borderRadius ='3px'

// noteDiv.appendChild(textarea)
// noteDiv.appendChild(input)

// const buttontag = document.createElement("button")
// buttontag.innerText = 'Add Note'
// buttontag.style.textAlign = 'center'
// buttontag.style.height= '60px'
// buttontag.style.width= '190px'
// buttontag.style.borderRadius='40px'
// buttontag.style.border ='none'
// buttontag.style.background = 'orange'
// buttontag.style.marginLeft = '80px'
// buttontag.style.marginTop = '50px'
// buttontag.style.boxShadow ='3px 3px 5px 3px grey'

// buttontag.addEventListener('click', function()
// {
//     console.log(textarea.value)
//     if(textarea.value==='')
//     {
//         alert("Enter some text")
//         return
//     }

//     let text = textarea.value
//     pptag.innerHTML = ''
//     const textdiv = document.createElement("div")
//     textdiv.style.backgroundColor = input.value
//     textdiv.style.height = '140px'
//     textdiv.style.width = '140px'
//     textdiv.style.display = 'flex'
//     textdiv.style.justifyContent = 'space-between'

//     const ptag = document.createElement("p")
//     ptag.innerText = text
//     ptag.style.wordBreak = 'break-word';
//     ptag.style.alignContent = 'start'
//     textdiv.style.overflow = 'scroll'
//     ptag.style.marginTop = '12px'

//     const deletebtn = document.createElement("button")
//     deletebtn.innerText = 'X'
//     deletebtn.style.backgroundColor = 'transparent'
//     deletebtn.style.border = 'none'
//     deletebtn.style.marginLeft = '120px'
//     deletebtn.style.paddingLeft = '5px'
//     deletebtn.style.position ='absolute'
//     deletebtn.style.marginTop = '1px'
//     deletebtn.style.cursor ='pointer'
//     deletebtn.style.marginL

//     deletebtn.addEventListener("click", function()
// {
//     notesdivtag.removeChild(textdiv)
// })

//     textdiv.appendChild(ptag)
//     textdiv.appendChild(deletebtn)
//     notesdivtag.appendChild(textdiv)
//     rightcontainer.appendChild(notesdivtag)
//     console.log(text)

//     textarea.value = ''
// })

// leftcontainer.appendChild(noteDiv)
// leftcontainer.appendChild(buttontag)

// const h1 = document.createElement("h1")
// h1.innerText = 'Your Notes'
// h1.style.textAlign = 'center'

// const notesdivtag = document.createElement("div")
// notesdivtag.style.height = '300px'
// notesdivtag.style.width = '100%'
// notesdivtag.style.display = 'flex'
// notesdivtag.style.flexWrap = 'wrap'
// notesdivtag.style.marginLeft = '20px'
// notesdivtag.style.gap = "80px"

// const pptag = document.createElement("p")

// pptag.innerText = 'You have not added a note yet.'
// pptag.style.textAlign = 'center'

// rightcontainer.appendChild(h1)
// rightcontainer.appendChild(notesdivtag)
// rightcontainer.appendChild(pptag)
