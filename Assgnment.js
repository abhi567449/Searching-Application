var container = document.querySelector(".main");

let page =1
const accessKey ='msCG8NItt7Xc38_yT4Xn5iyUsUwFbw7jgXltteVh7-M'




const heading = document.createElement("h1");
heading.innerText ='Images Search App'
heading.style.textAlign ='center'
heading.style.top ='20px'

const inputData = document.createElement("input");
inputData.setAttribute("type", "text");
inputData.setAttribute("placeholder", "Search for images...");
inputData.style.width ='20%'
inputData.style.height ='4%'
inputData.style.padding ='5px'
inputData.style.borderRadius ='5px'
inputData.style.border ='None'
inputData.style.left = '35%'
inputData.style.top ='50px'

const button = document.createElement("button");
button.innerText = 'Search'
button.style.width ='10%'
button.style.height ='5%'
button.style.padding ='5px'
button.style.borderRadius ='5px'
button.style.border ='None'
button.style.left = '35%'
button.style.cursor = 'pointer'
button.style.backgroundColor = 'lightgreen'
button.style.top ='50px'
button.style.boxShadow = "3px 3px 3px 1px rgba(136, 95, 82, 0.69) "



const imageDiv = document.createElement("div");
imageDiv.style.display ='flex'
imageDiv.style.justifyContent ='space-around'
imageDiv.style.flexWrap ='wrap'
imageDiv.style.overflow ='scroll'
imageDiv.style.top ='150px'
button.addEventListener('click', ()=>
{
    const promise = new Promise(function(resolve,reject)
    {
        resolve();
    })

    promise.then(function()
{
    
load()
showbutton.addEventListener('click', () =>
{
    load()
})
})

async function load(params) {
    if(page===1)
        {
            imageDiv.innerHTML = ''
        }
        
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData.value}&client_id=${accessKey}`;
    let response =await fetch(url)
    let data = await response.json();
    console.log(data.results)

    const res = data.results
    page++;

    res.map(result => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        image.style.height = '200px'
        image.style.width = '100%'
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;
    
        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        imageDiv.appendChild(imageWrapper);
    });

    
container.appendChild(showbutton)
}
})

container.appendChild(heading)
container.appendChild(inputData)
container.appendChild(button)
container.appendChild(imageDiv)

const showbutton = document.createElement("button");
showbutton.innerText = 'Show More'
showbutton.style.width ='8%'
showbutton.style.height ='5%'
showbutton.style.padding ='10px'
showbutton.style.borderRadius ='5px'
showbutton.style.border ='None'
showbutton.style.backgroundColor ='blue'
showbutton.style.color ='white'
showbutton.style.cursor ='pointer'
showbutton.style.marginLeft ='47%'
showbutton.style.marginTop ='10%'
showbutton.style.marginBottom ='10%'


