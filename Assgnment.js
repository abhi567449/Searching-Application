var container = document.querySelector(".main")

const datadiv = document.createElement("div");
datadiv.setAttribute("class", "data-div");
datadiv.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
datadiv.style.display = "flex"
datadiv.style.alignItems = "center"
datadiv.style.textAlign = "center"

const text = document.createElement("p");

text.innerHTML = "Press any keyboard key"

document.addEventListener("keydown" , function(event)
{

    const code = event.key; 
    const keyCode = event.keyCode; 

    datadiv.innerHTML = ''
    datadiv.style = ''

    const keydiv = document.createElement("div");
    keydiv.setAttribute("class", "key-div");
    keydiv.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    keydiv.style.color ="green"
    keydiv.style.display = "flex"
    keydiv.style.alignItems = "center"
    keydiv.style.justifyContent = "center"
    keydiv.style.marginBottom = "20px"
    keydiv.style.borderRadius = "5px"
    

    const codediv = document.createElement("div");
    codediv.setAttribute("class", "code-div");
    codediv.style.color ="green"
    codediv.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    codediv.style.display = "flex"
    codediv.style.alignItems = "center"
    codediv.style.justifyContent = "center"
    codediv.style.borderRadius = "5px"


    const codetext = document.createElement("p");

    text.innerHTML = `<span style="color: black;text-shadow: 1px 1px 5px grey;">You pressed </span><span style="color: green; text-shadow: 1px 1px black;">${code}</span>`;
    codetext.innerHTML = keyCode;
    codetext.style.textAlign = "center"

    console.log(code)
    console.log(keyCode)
    keydiv.appendChild(text)
    codediv.appendChild(codetext)
    datadiv.appendChild(keydiv)
    datadiv.appendChild(codediv)

}
)

datadiv.appendChild(text)
container.appendChild(datadiv)


























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
