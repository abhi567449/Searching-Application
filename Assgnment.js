var container = document.querySelector(".main");

const jokeDiv = document.createElement('div')
jokeDiv.style.height = '300px'
jokeDiv.style.width = '500px'
jokeDiv.style.backgroundColor = 'rgba(238, 102, 60, 0.692)'
jokeDiv.style.position = 'absolute'
jokeDiv.style.top = '38%'
jokeDiv.style.left = '33%'
jokeDiv.style.borderRadius = '20px'

const headpan1 = document.createElement('p')
headpan1.innerText = 'Dad Jokes Generator'
headpan1.style.color = 'white'
headpan1.style.fontSize ='20px'
headpan1.style.top ='10px'
headpan1.style.left ='30%'

const jokepan1 = document.createElement('p')
jokepan1.innerText = 'Dad Joke'
jokepan1.style.color = 'white'
jokepan1.style.fontSize ='20px'
jokepan1.style.top ='40px'
jokepan1.style.textAlign ='center'


const button = document.createElement('button')
button.innerText = 'Tell me a Joke'
button.style.border = 'none'
button.style.borderRadius = '20px'
button.style.color = 'white'
button.style.fontSize ='20px'
button.style.top ='200px'
button.style.left ='30%'
button.style.width ='200px'
button.style.cursor ='pointer'
button.style.backgroundColor = 'rgba(238, 102, 60, 0.692)'
button.style.boxShadow = '3px 3px 3px 1px rgba(136, 95, 82, 0.69) '
button.style.position = 'absolute'
button.addEventListener('click', getJoke)

jokeDiv.appendChild(headpan1)
jokeDiv.appendChild(jokepan1)
jokeDiv.appendChild(button)
container.appendChild(jokeDiv)

let api_url = 'https://api.api-ninjas.com/v1/dadjokes?';
let options = {
    method : 'GET',
    headers : {
        'X-Api-Key' : 'Y/CmmirbQHgq7LVJEILY0w==I181IgAvrrszpwl8'
    }
}


async function getJoke()
{
    try
    {
        jokepan1.innerText = 'Updating...'

        let response = await fetch(api_url,options)
        const data = await response.json();
        jokepan1.innerText = data[0].joke
        
        console.log(data[0].joke)
    }
    catch(error)
    {
        console.error()
    };
    
    
}