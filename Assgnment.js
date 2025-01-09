var container = document.querySelector(".main");


const TimeDiv = document.createElement('div')
TimeDiv.style.height = '150px'
TimeDiv.style.width = '400px'
TimeDiv.style.backgroundColor = 'transparent'
TimeDiv.style.position = 'absolute'
TimeDiv.style.top = '40%'
TimeDiv.style.left = '35%'
TimeDiv.style.display = 'flex'
TimeDiv.style.justifyContent = 'space-between'

const img = document.createElement('img')
img.src = 'wallpaper.jpg'
img.style.width = '100vw'
img.style.height = '100vh'
img.style.height = 'absolute'
img.style.backgroundRepeat = 'no-repeat'

const h1 = document.createElement('h1')
h1.innerText = 'Digital Clock'
h1.style.color = 'yellow'
h1.style.position = 'absolute'
h1.style.top = '30%'
h1.style.left = '40%'
h1.style.fontWeight = '100'


function update()
{
    TimeDiv.innerHTML =''
const date = new Date();

let ampm = "AM";
if(date.getHours()>11)
{
    ampm = 'PM'
}

console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())







const hourDiv = document.createElement('div')
hourDiv.style.height = '150px'
hourDiv.style.width = '100px'
hourDiv.style.backgroundColor = 'transparent'
hourDiv.style.textAlign ='center'
hourDiv.style.background = 'rgba(0,0,0, 0.9)'
hourDiv.style.borderRadius = '10px'

const hourspan = document.createElement('span')
hourspan.innerText = (date.getHours() % 12)
hourspan.style.color = 'white'
hourspan.style.fontSize ='50px'

const hourspan1 = document.createElement('p')
hourspan1.innerText = 'Minutes'
hourspan1.style.color = 'white'
hourspan1.style.fontSize ='20px'
hourspan1.style.top ='50px'

hourDiv.appendChild(hourspan)
hourDiv.appendChild(hourspan1)

TimeDiv.appendChild(hourDiv)
const minuteDiv = document.createElement('div')
minuteDiv.style.height = '150px'
minuteDiv.style.width = '100px'
minuteDiv.style.background = 'rgba(0,0,0, 0.9)'
minuteDiv.style.textAlign ='center'
minuteDiv.style.borderRadius = '10px'

const minutespan = document.createElement('span')
minutespan.innerText = date.getMinutes()
minutespan.style.color = 'white'
minutespan.style.fontSize ='50px'

const minutepan1 = document.createElement('p')
minutepan1.innerText = 'Minutes'
minutepan1.style.color = 'white'
minutepan1.style.fontSize ='20px'
minutepan1.style.top ='50px'

minuteDiv.appendChild(minutespan)
minuteDiv.appendChild(minutepan1)

TimeDiv.appendChild(minuteDiv)

const secondsDiv = document.createElement('div')
secondsDiv.style.height = '150px'
secondsDiv.style.width = '100px'
secondsDiv.style.background = 'rgba(0,0,0, 0.9)'
secondsDiv.style.textAlign ='center'
secondsDiv.style.borderRadius = '10px'

secondsDiv.style.flexDirection ='column'
secondsDiv.style.alignContent ='space-between'

const secondspan = document.createElement('span')
secondspan.innerText = date.getSeconds()
secondspan.style.color = 'white'
secondspan.style.fontSize ='50px'

const secondspan1 = document.createElement('p')
secondspan1.innerText = 'Seconds'
secondspan1.style.color = 'white'
secondspan1.style.fontSize ='20px'
secondspan1.style.top ='50px'

secondsDiv.appendChild(secondspan)
secondsDiv.appendChild(secondspan1)
TimeDiv.appendChild(secondsDiv)

const ampmSpan = document.createElement('span')
ampmSpan.innerText = ampm
ampmSpan.style.color = 'white'
ampmSpan.style.textAlign ='center'
ampmSpan.style.fontSize ='20px'
ampmSpan.style.top = '86%'

TimeDiv.appendChild(secondsDiv)
TimeDiv.appendChild(ampmSpan)


container.appendChild(h1)
container.appendChild(TimeDiv)
    setTimeout(()=>
        {
            update()
        },1000)
}
container.appendChild(img)
update()
