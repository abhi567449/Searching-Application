
const mainDiv = document.querySelector('.main')[0]
const navImg = document.querySelector('#nav-img')
const sideNav = document.querySelector('#side-nav')
const chatDiv = document.querySelector('.chat-div')
const recentChatDiv = document.querySelector('.recent')

const chatIcon = document.querySelector('.chat-icon')
const footerSpan = document.querySelectorAll('.footer-span')

const chatSpan = document.createElement('span')




let historyCount = 0;
if(localStorage.getItem('count'))
{

    historyCount = localStorage.getItem('count')
}

navImg.addEventListener('click',()=>
{
    const expand =  sideNav.classList.toggle('expanded')
 
    if(expand)
    {
        const recentptag = document.createElement('p')
        recentptag.innerText='Recent'
        
        recentChatDiv.appendChild(recentptag)

        chatSpan.innerText = '  New Chat'
        chatDiv.style.width = '100px'
        chatDiv.appendChild(chatSpan)
        
        const div = document.createElement('div')
        div.style.height='200px'
        div.style.overflow='scroll'

        for(let i=0;i<historyCount;i++)
        {
            const historyDiv = document.createElement('div')
            historyDiv.classList.add('chats')
            const chatp = document.createElement('p')
            chatp.classList.add('recent-chat-ptags')
            const chat = localStorage.getItem('chat'+i)
            chatp.innerText =chat
            const chatIconImg = document.createElement('img')
            chatIconImg.src ="./Classic_Search/icons8-chat-48.png"
            chatIconImg.classList.add('chats-icon')
            historyDiv.appendChild(chatIconImg)
            historyDiv.appendChild(chatp)
            div.appendChild(historyDiv)
            recentChatDiv.appendChild(div)
            

            historyDiv.addEventListener('click',()=>
            {
                value = localStorage.getItem('chat'+i)

                console.log(value)
                fetching(value);

            })

        }

        chatDiv.addEventListener('click',()=>
        {
            resultDiv.innerHTML=''
            resultDiv.style.visibility='hidden'
        })
       
       

        footerSpan.forEach(element => {
            element.style.visibility = 'visible'
        });

        
        chatIcon.style.visibility = 'hidden'
        recentChatDiv.style.visibility = 'visible'
    }
    else{
        footerSpan.forEach(element => {
            element.style.visibility = 'hidden'
        });
        chatIcon.style.visibility = 'visible'
        recentChatDiv.style.visibility = 'hidden'
        recentChatDiv.innerHTML=''
        
        chatDiv.style.width = '20px'
        
        chatDiv.removeChild(chatSpan)
    }
})



const input = document.getElementById('search')
const sentButton = document.getElementById('sent')
const resultDiv = document.getElementsByClassName('result')[0];



let value =''
sentButton.addEventListener('click',()=>
{
   
    value = input.value;
    input.innerText =''

    fetching(value);
    
})

function fetching(value)
{
     resultDiv.innerHTML =''
    resultDiv.style.visibility = 'visible'

    const radio_api = document.querySelector('input[name="api-type"]:checked')

    const radioButtons = document.querySelectorAll('input[name="api-type"]');

    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            
            resultDiv.innerHTML =''
            const radio_api = document.querySelector('input[name="api-type"]:checked')
            if(radio_api.value==='google')
                google();
            else if(radio_api.value==='wiki')
                 wiki();
            else if(radio_api.value==='gemini')
                gemini();
            else if(radio_api.value==='aiimages')
                aiimages();
        });
    });
    

 

    const arr =[]
    for(let i=0;i<historyCount;i++)
    {
         arr.push(localStorage.getItem('chat'+i)) 

    }
   
    if(!arr.includes(value))
    {
        localStorage.setItem('chat'+historyCount,value)
        historyCount++;
        localStorage.setItem('count',historyCount)
    }
    console.log(arr)
    


    console.log(radio_api.value)

if(radio_api.value==='google')
    google();
else if(radio_api.value==='wiki')
     wiki();
else if(radio_api.value==='gemini')
    gemini();
else if(radio_api.value==='aiimages')
    aiimages();
}
//API Implementation  -- AI Images

function aiimages()
{
    const url = 'https://chatgpt-42.p.rapidapi.com/texttoimage3';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '892c9464efmsh4c57f6e16601a61p13d7a8jsna042a0377d13',
		'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		text: value,
		width: 512,
		height: 512,
		steps: 1
	})
};

async function fetchImages() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        const div = document.createElement('div');
                //div.classList.add('result-div');

                const desc = document.createElement('img');
                desc.src = result.generated_image;
                desc.style.marginTop ='10px'
                
                div.appendChild(desc);
                resultDiv.appendChild(div);


    } catch (error) {
        console.error(error);
    }
}
fetchImages()


}

//API Implementation  -- Gemini


function gemini() {
    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCXPoQnsiyZD2YSru7fmv7yiGSOVJ0L4vo';

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({  
            "contents": [{
                "parts": [{ "text": value }]
            }]
        })
    };

    async function fetchData() {
        try {
            console.log("Fetching data...");
            const response = await fetch(url, options);
            const result = await response.json();
            console.log("API Response:", result);

            if (result && result.candidates && result.candidates.length > 0) {
                const textResponse = result.candidates[0]?.content?.parts[0]?.text || "No response from AI";

                const div = document.createElement('div');
                div.classList.add('result-div');

                const desc = document.createElement('p');
                desc.innerText = textResponse;
                desc.style.marginTop ='10px'

                div.appendChild(desc);
                resultDiv.appendChild(div);
            } else {
                console.error("Unexpected API response format:", result);
            }

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    fetchData(); 
}


//API Implementation  -- Wiki

function wiki()
{
    const url = `https://wikipedia-api1.p.rapidapi.com/get_summary?q=${value}&lang=en&sentences=3`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '892c9464efmsh4c57f6e16601a61p13d7a8jsna042a0377d13',
		'x-rapidapi-host': 'wikipedia-api1.p.rapidapi.com'
	}
};


async function fetchWiki() {
    try {
       const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        const div = document.createElement('div')
        div.classList.add('result-div')

        const desc = document.createElement('p')
        desc.innerText = result.data

        div.appendChild(desc)
        resultDiv.appendChild(div)
        
    } catch (error) {
        console.error(error);
    }
}

fetchWiki()
}

//API Implementation  -- Google

function google()
{

    const url = `https://google-search74.p.rapidapi.com/?query=${value}&limit=10&related_keywords=true`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '892c9464efmsh4c57f6e16601a61p13d7a8jsna042a0377d13',
            'x-rapidapi-host': 'google-search74.p.rapidapi.com'
        }
    };
    
    fetchGoogleApi()
    
    async function fetchGoogleApi() {
        try {
             const response = await fetch(url, options);
    
           const result = await response.json();

          // const result =  response;
            console.log(result.results);
            
            renderData(result)
            
            
        } catch (error) {
            console.error(error);
        }
    
       
    }
}


function renderData(result)
{
    result.results.forEach(element =>
        {
            const div = document.createElement('div')
            div.classList.add('result-div')
            const link = document.createElement('a')
            link.href = element.url;
            link.innerText = element.title
    
            const desc = document.createElement('p')
            desc.innerText = element.description
    
            div.appendChild(link)
            div.appendChild(desc)
            resultDiv.appendChild(div)
        })
}

