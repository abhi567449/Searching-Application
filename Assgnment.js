const mainDiv = document.getElementById('movies')

let Api_url = 'https://www.omdbapi.com/?&apikey=2c50ccf6&s=%27cartoon%27&page=2'

fetchMovies()

async function fetchMovies()
{
    
    const response = await fetch(Api_url)
    const data = await response.json();

    console.log(data.Search)
    data.Search.forEach(element => {

    const div = document.createElement('div')
    div.classList.add('image-div')
    div.style.marginTop = '30px'

    const h1 = document.createElement('h1')
    h1.innerText = element.Title
    h1.style.fontSize ='12px'
    h1.style.marginBottom = '10px'
    const img = document.createElement('img')
    img.src=element.Poster
    img.style.borderRadius='15px'
    img.style.width='200px'
    img.style.height ='300px'
    div.appendChild(h1)
    div.appendChild(img)
    mainDiv.appendChild(div)

    });
}

const searchBox = document.getElementById('search')
searchBox.addEventListener('input',()=>
{
    let movieName = search.value;  
})