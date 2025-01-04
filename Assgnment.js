
var container = document.querySelector(".main")

const datadiv = document.createElement("div");
datadiv.setAttribute("class", "data-div");
datadiv.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"

console.log("helloo")

const h1 = document.createElement("h1");
h1.setAttribute("class", "heading-1")
h1.innerText = "Feedback UI"
h1.style.color = "green"
h1.style.fontWeight = "600"
h1.style.paddingTop = "20px"
h1.style.textAlign = "center"
h1.style.fontSize = "xx-large"

const ratingdiv = document.createElement("div");
ratingdiv.setAttribute("class", "rating-div");
ratingdiv.style.display = "flex"
ratingdiv.style.justifyContent = 'space-evenly'
ratingdiv.style.textAlign = 'center'

ratingdiv.style.width = '100%'
ratingdiv.style.marginTop = '50px'

const unhappydiv = document.createElement("div");
unhappydiv.setAttribute("class", "unhappy-div");
unhappydiv.style.height = '120px'
unhappydiv.style.width = '130px'
unhappydiv.style.alignItems ='center'
unhappydiv.style.cursor = 'pointer'
unhappydiv.style.borderRadius = '10px'
unhappydiv.onmouseover = function()
{
    unhappydiv.style.transitionDuration ='300ms'
    unhappydiv.style.boxShadow = '5px 5px 5px 5px green'
    unhappydiv.style.backgroundColor ='rgb(130, 158, 137)'
    
}

unhappydiv.onmouseout = function()
{
    if (unhappydiv.classList.contains("active")) {

        unhappydiv.style.boxShadow = '5px 5px 5px 5px green';
        unhappydiv.style.backgroundColor = 'rgb(130, 158, 137)';
    } else {
        unhappydiv.style.boxShadow = 'none';
        unhappydiv.style.backgroundColor = 'rgb(170, 221, 183)';
    }
}
unhappydiv.addEventListener("click", () => {
    unhappydiv.classList.toggle("active");

    if (satisfieddiv.classList.contains("active")) {
        satisfieddiv.classList.toggle("active");
        satisfieddiv.style.boxShadow = 'none';
        satisfieddiv.style.backgroundColor = 'rgb(170, 221, 183)';
    } 
    
    if (neutraldiv.classList.contains("active")) {
        neutraldiv.classList.toggle("active");
        neutraldiv.style.boxShadow = 'none';
        neutraldiv.style.backgroundColor = 'rgb(170, 221, 183)';
    } 

 });

const unhappyptag = document.createElement("p");
unhappyptag.innerText = 'Unhappy'
unhappyptag.style.fontWeight = '200'
unhappyptag.style.color = 'green'

const unhappyimg = document.createElement("img");
unhappyimg.setAttribute("class", "unhappy-img");
unhappyimg.src = 'unhappy.png'
unhappyimg.style.height = '40px'
unhappyimg.style.width = '40px'
unhappyimg.style.marginTop = '10px'


unhappydiv.appendChild(unhappyimg)
unhappydiv.appendChild(unhappyptag)

const neutraldiv = document.createElement("div");
neutraldiv.setAttribute("class", "neutral-div");
neutraldiv.style.height = '120px'
neutraldiv.style.width = '130px'
neutraldiv.style.cursor = 'pointer'
neutraldiv.style.borderRadius = '10px'
neutraldiv.onmouseover = function()
{
    neutraldiv.style.transitionDuration ='300ms'
    neutraldiv.style.boxShadow = '5px 5px 5px 5px green'
    neutraldiv.style.backgroundColor ='rgb(130, 158, 137)'
    
}

neutraldiv.onmouseout = function()
{
    if (neutraldiv.classList.contains("active")) {
        
        neutraldiv.style.boxShadow = '5px 5px 5px 5px green';
        neutraldiv.style.backgroundColor = 'rgb(130, 158, 137)';
    } else {
        neutraldiv.style.boxShadow = 'none';
        neutraldiv.style.backgroundColor = 'rgb(170, 221, 183)';
    }
}
neutraldiv.addEventListener("click", () => {
    neutraldiv.classList.toggle("active");

    if (satisfieddiv.classList.contains("active")) {
        satisfieddiv.classList.toggle("active");
        satisfieddiv.style.boxShadow = 'none';
        satisfieddiv.style.backgroundColor = 'rgb(170, 221, 183)';
    } 
    
    if (unhappydiv.classList.contains("active")) {
        unhappydiv.classList.toggle("active");
        unhappydiv.style.boxShadow = 'none';
        unhappydiv.style.backgroundColor = 'rgb(170, 221, 183)';
    } 

 });


const neutralptag = document.createElement("p");
neutralptag.innerText = 'Neutral'
neutralptag.style.fontWeight = '200'
neutralptag.style.color = 'green'


const neutralimg = document.createElement("img");
neutralimg.setAttribute("class", "neutral-img");
neutralimg.src = 'neutral.png'
neutralimg.style.height = '40px'
neutralimg.style.width = '40px'
neutralimg.style.marginTop = '10px'

neutraldiv.appendChild(neutralimg)
neutraldiv.appendChild(neutralptag)


const satisfieddiv = document.createElement("div");
satisfieddiv.setAttribute("class", "satisfied-div");
satisfieddiv.style.height = '120px'
satisfieddiv.style.width = '130px'
satisfieddiv.style.cursor = 'pointer'
satisfieddiv.style.borderRadius = '10px'
satisfieddiv.onmouseover = function()
{
    satisfieddiv.style.transitionDuration ='300ms'
    satisfieddiv.style.boxShadow = '5px 5px 5px 5px green'
    satisfieddiv.style.backgroundColor ='rgb(130, 158, 137)'
    
}


satisfieddiv.onmouseout = function()
{
    if (satisfieddiv.classList.contains("active")) {
        
        satisfieddiv.style.boxShadow = '5px 5px 5px 5px green';
        satisfieddiv.style.backgroundColor = 'rgb(130, 158, 137)';
    } else {
        satisfieddiv.style.boxShadow = 'none';
        satisfieddiv.style.backgroundColor = 'rgb(170, 221, 183)';
    }
}
satisfieddiv.addEventListener("click", () => {
    satisfieddiv.classList.toggle("active");

    if (neutraldiv.classList.contains("active")) {
        neutraldiv.classList.toggle("active");
        neutraldiv.style.boxShadow = 'none';
        neutraldiv.style.backgroundColor = 'rgb(170, 221, 183)';
    } 
    
    if (unhappydiv.classList.contains("active")) {
        unhappydiv.classList.toggle("active");
        unhappydiv.style.boxShadow = 'none';
        unhappydiv.style.backgroundColor = 'rgb(170, 221, 183)';
    } 

 });

const satisfieptag = document.createElement("p");
satisfieptag.innerText = 'Satisfied'
satisfieptag.style.fontWeight = '200'
satisfieptag.style.color = 'green'

const satisfiedimg = document.createElement("img");
satisfiedimg.setAttribute("class", "satisfied-img");
satisfiedimg.src = 'satisfied.png'
satisfiedimg.style.height = '40px'
satisfiedimg.style.width = '40px'
satisfiedimg.style.marginTop = '10px'

satisfieddiv.appendChild(satisfiedimg)
satisfieddiv.appendChild(satisfieptag)



ratingdiv.appendChild(unhappydiv)
ratingdiv.appendChild(neutraldiv)
ratingdiv.appendChild(satisfieddiv)

const buttontag = document.createElement("button");
buttontag.setAttribute("class", "review-button");
buttontag.innerText = 'Send Review'
buttontag.style.color = 'white'
buttontag.style.width ='140px'
buttontag.style.height = '40px'
buttontag.style.backgroundColor = 'rgb(80, 135, 93)'
buttontag.style.marginLeft ='180px'
buttontag.style.marginTop ='60px'
buttontag.style.border ='0px'
buttontag.style.borderRadius = '5px'
buttontag.style.cursor = 'pointer'
buttontag.onmouseover = function()
{
    buttontag.style.transitionDuration ='300ms'
    buttontag.style.boxShadow = '5px 5px 5px 5px green'
    
}

buttontag.onmouseout = function()
{
    buttontag.style.boxShadow = 'none'
}

buttontag.addEventListener('click' , function()
{
    if(!unhappydiv.classList.contains('active') && !neutraldiv.classList.contains('active') && !satisfieddiv.classList.contains('active'))
    {
        return
    }
    
    let val = ''
    if(unhappydiv.classList.contains('active'))
    {
        
        val = unhappyptag.textContent;
        console.log(val)
    }
    if(neutraldiv.classList.contains('active'))
        {
            
            val = neutralptag.textContent;
            console.log(val)
        }
        if(satisfieddiv.classList.contains('active'))
            {
                
                val = satisfieptag.textContent;
                console.log(val)
            }
    datadiv.innerHTML = ''
    datadiv.style.width='500px'
    datadiv.style.height ='280px' 
    datadiv.style.marginTop = '240px'

    h1.innerText = 'Thank you!'
    datadiv.appendChild(h1)

    const value = document.createElement("p");
    value.innerText = 'Feedback: '+val
    value.style.color = "green"
     value.style.textAlign = 'center'
      value.style.color = "green"
    datadiv.appendChild(value)


    let text = "We'll use your feedback to improve our customer support."

    const txt = document.createElement("p");
    txt.innerText = text
    txt.style.color = "green"
    txt.style.textAlign = 'center'
    txt.style.color = "green"
    txt.style.letterSpacing = '3px'
    txt.style.fontWeight = '200'
    txt.style.marginTop = '50px'
    datadiv.appendChild(txt)
})

datadiv.appendChild(h1)
datadiv.appendChild(ratingdiv)
datadiv.appendChild(buttontag)
container.appendChild(datadiv)












// var container = document.querySelector(".main")

// const datadiv = document.createElement("div");
// datadiv.setAttribute("class", "data-div");
// datadiv.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
// datadiv.style.display = "flex"
// datadiv.style.alignItems = "center"
// datadiv.style.textAlign = "center"

// const text = document.createElement("p");

// text.innerHTML = "Press any keyboard key"

// document.addEventListener("keydown" , function(event)
// {

//     const code = event.key; 
//     const keyCode = event.keyCode; 

//     datadiv.innerHTML = ''
//     datadiv.style = ''

//     const keydiv = document.createElement("div");
//     keydiv.setAttribute("class", "key-div");
//     keydiv.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
//     keydiv.style.color ="green"
//     keydiv.style.display = "flex"
//     keydiv.style.alignItems = "center"
//     keydiv.style.justifyContent = "center"
//     keydiv.style.marginBottom = "20px"
//     keydiv.style.borderRadius = "5px"
    

//     const codediv = document.createElement("div");
//     codediv.setAttribute("class", "code-div");
//     codediv.style.color ="green"
//     codediv.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
//     codediv.style.display = "flex"
//     codediv.style.alignItems = "center"
//     codediv.style.justifyContent = "center"
//     codediv.style.borderRadius = "5px"


//     const codetext = document.createElement("p");

//     text.innerHTML = `<span style="color: black;text-shadow: 1px 1px 5px grey;">You pressed </span><span style="color: green; text-shadow: 1px 1px black;">${code}</span>`;
//     codetext.innerHTML = keyCode;
//     codetext.style.textAlign = "center"

//     console.log(code)
//     console.log(keyCode)
//     keydiv.appendChild(text)
//     codediv.appendChild(codetext)
//     datadiv.appendChild(keydiv)
//     datadiv.appendChild(codediv)

// }
// )

// datadiv.appendChild(text)
// container.appendChild(datadiv)


























// var container = document.querySelector(".main");
// var body = document.getElementsByTagName("body")[0];

// console.log(body);

// container.style.height = "100vh";
// container.style.width = "100wh";
// body.style.margin = "0px";
// body.style.padding = "0px";
// container.style.backgroundColor = "blue";

// const datadiv = document.createElement("div");
// datadiv.setAttribute("class", "data-div");

// const calculate = document.createElement("div");
// calculate.setAttribute("class", "calculate");

// const dateboxtag = document.createElement("input");
// dateboxtag.setAttribute("class", "dateboxtag");
// dateboxtag.type = "date";
// dateboxtag.style.height = "30px";
// dateboxtag.style.width = "120px";
// dateboxtag.style.borderRadius = "10px";
// dateboxtag.style.marginTop = "30px";

// const buttontag = document.createElement("button");
// buttontag.setAttribute("class", "calculate-btn");
// buttontag.innerText = "Calculate";
// buttontag.style.height = "35px";
// buttontag.style.width = "100px";

// buttontag.style.marginTop = "30px";
// buttontag.style.borderRadius = "10px";
// buttontag.style.backgroundColor = "white";

// buttontag.addEventListener("click", function () {
//   const datetext = dateboxtag.value;
//   console.log(datetext);
//   const dateObject = new Date(datetext);

//   const today = new Date();

//   if (today < dateObject) {
//     alert("Not born yet");
//     return;
//   }

//   let years = today.getFullYear() - dateObject.getFullYear();
//   let months = today.getMonth() - dateObject.getMonth();
//   let days = today.getDate() - dateObject.getDate();

//   if (days < 0) {
//     months--;

//     days = 30 + days;
//   }
//   if (months < 0) {
//     years--;

//     months = 12 + months;
//   }
//   if (years < 0) {
//     years = 0;
//   }

//   yeardiv.innerHTML = "";

//   const yeartag = document.createElement("p");
//   yeartag.innerText = years;
//   yeartag.style.color = "white";
//   yeartag.style.paddingBottom = "2px";
//   yeartag.style.marginLeft = "25px";

//   const yrptag = document.createElement("p");
//   yrptag.innerText = "Years";
//   yrptag.style.color = "white";
//   yrptag.style.paddingTop = "10px";
//   yrptag.style.marginLeft = "25px";

//   yeardiv.appendChild(yeartag);
//   yeardiv.appendChild(yrptag);

//   monthsdiv.innerHTML = "";

//   const mntag = document.createElement("p");
//   mntag.innerText = months;
//   mntag.style.color = "white";
//   mntag.style.paddingBottom = "2px";
//   mntag.style.marginLeft = "25px";

//   const monthsptag = document.createElement("p");
//   monthsptag.innerText = "Months";
//   monthsptag.style.color = "white";
//   monthsptag.style.marginTop = "10px";
//   monthsptag.style.marginLeft = "20px";

//   monthsdiv.appendChild(mntag);
//   monthsdiv.appendChild(monthsptag);

//   daysdiv.innerHTML = "";

//   const dytag = document.createElement("p");
//   dytag.innerText = days;
//   dytag.style.color = "white";
//   dytag.style.paddingBottom = "2px";
//   dytag.style.marginLeft = "25px";

//   const daysptag = document.createElement("p");
//   daysptag.innerText = "Days";
//   daysptag.style.color = "white";
//   daysptag.style.marginTop = "10px";
//   daysptag.style.marginLeft = "20px";

//   daysdiv.appendChild(dytag);
//   daysdiv.appendChild(daysptag);

//   console.log(years);
//   console.log(months);
//   console.log(days);
// });

// const agediv = document.createElement("div");
// agediv.setAttribute("class", "age-div");
// agediv.style.height = "50%";
// agediv.style.width = "100%";

// const yeardiv = document.createElement("div");
// yeardiv.setAttribute("class", "year-div");
// yeardiv.style.height = "100px";
// yeardiv.style.width = "100px";
// yeardiv.style.backgroundColor = "black";
// yeardiv.style.borderRadius = "20px";

// const yrptag = document.createElement("p");
// yrptag.innerText = "Years";
// yrptag.style.color = "white";
// yrptag.style.marginTop = "60px";
// yrptag.style.marginLeft = "25px";

// yeardiv.appendChild(yrptag);

// const monthsdiv = document.createElement("div");
// monthsdiv.setAttribute("class", "months-div");
// monthsdiv.style.height = "100px";
// monthsdiv.style.width = "100px";
// monthsdiv.style.backgroundColor = "black";
// monthsdiv.style.borderRadius = "20px";

// const monthsptag = document.createElement("p");
// monthsptag.innerText = "Months";
// monthsptag.style.color = "white";
// monthsptag.style.marginTop = "60px";
// monthsptag.style.marginLeft = "20px";

// monthsdiv.appendChild(monthsptag);

// const daysdiv = document.createElement("div");
// daysdiv.setAttribute("class", "days-div");
// daysdiv.style.height = "100px";
// daysdiv.style.width = "100px";
// daysdiv.style.backgroundColor = "black";
// daysdiv.style.borderRadius = "20px";

// const daysptag = document.createElement("p");
// daysptag.innerText = "Days";
// daysptag.style.color = "white";
// daysptag.style.marginTop = "60px";
// daysptag.style.marginLeft = "20px";

// daysdiv.appendChild(daysptag);

// agediv.appendChild(yeardiv);
// agediv.appendChild(monthsdiv);
// agediv.appendChild(daysdiv);

// calculate.appendChild(dateboxtag);
// calculate.appendChild(buttontag);
// datadiv.appendChild(calculate);
// datadiv.appendChild(agediv);
// container.appendChild(datadiv);

// console.log(calculate);
