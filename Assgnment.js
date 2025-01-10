var container = document.querySelector(".main");


const TimeDiv = document.createElement('div')
TimeDiv.style.height = '150px'
TimeDiv.style.width = '700px'
TimeDiv.style.backgroundColor = 'transparent'
TimeDiv.style.position = 'absolute'
TimeDiv.style.top = '60%'
TimeDiv.style.left = '25%'
TimeDiv.style.display = 'flex'
TimeDiv.style.justifyContent = 'space-between'


const startButton = document.createElement('button')
startButton.innerText = 'Start'
startButton.style.border = '0px'
startButton.style.height = '70px'
startButton.style.width = '200px'
startButton.style.backgroundColor = '#ce6767de'
startButton.style.boxShadow = '5px 5px 5px 2px rgba(189, 115, 115, 0.87)'

startButton.style.borderRadius = '20px'
startButton.style.fontSize = '30px'
startButton.style.cursor = 'pointer'


const calculateDiv = document.createElement('div')
calculateDiv.style.height = '150px'
calculateDiv.style.width = '700px'
calculateDiv.style.backgroundColor = 'transparent'
calculateDiv.style.position = 'absolute'
calculateDiv.style.top = '30%'
calculateDiv.style.left = '30%'
calculateDiv.style.display = 'flex'

const hourspan1 = document.createElement('span')


function updateHours(hours)
{
    if(hours<10)
        {
            hours='0'+hours;
        }

    hourspan1.innerText = '00'+':'
    hourspan1.style.color = '#ce6767de'
    hourspan1.style.fontSize ='120px'
    hourspan1.style.top ='50px'
    calculateDiv.appendChild(hourspan1)
}

updateHours(0)

const minutepan1 = document.createElement('span')

function updateMinutes(minutes)
{
    if(minutes<10)
        {
            minutes='0'+minutes;
        }
    minutepan1.innerHTML=''
    minutepan1.innerText = minutes+':'
    minutepan1.style.color = '#ce6767de'
    minutepan1.style.fontSize ='120px'
    minutepan1.style.top ='50px'

    calculateDiv.appendChild(minutepan1)
}
updateMinutes(0)

const secondspan1 = document.createElement('span')
function updateSeconds(second)
{
    if(second<10)
    {
        second='0'+second;
    }
    secondspan1.innerHTML = ''
    secondspan1.innerText = second
    secondspan1.style.color = '#ce6767de'
    secondspan1.style.fontSize ='120px'
    secondspan1.style.top ='50px'

    calculateDiv.appendChild(secondspan1)
}
updateSeconds(0)


container.appendChild(calculateDiv)

const stopButton = document.createElement('button')
stopButton.innerText = 'Stop'
stopButton.style.border = '0px'
stopButton.style.height = '70px'
stopButton.style.width = '200px'
stopButton.style.backgroundColor = '#ce6767de'
stopButton.style.boxShadow = '5px 5px 5px 2px rgba(189, 115, 115, 0.87)'

stopButton.style.borderRadius = '20px'
stopButton.style.fontSize = '30px'
stopButton.style.cursor = 'pointer'
stopButton.disabled = true
stopButton.addEventListener('click', () =>
{
    stopButton.disabled = true
    startButton.disabled = false
    timer =false
})

const resetButton = document.createElement('button')
resetButton.innerText = 'Reset'
resetButton.style.border = '0px'
resetButton.style.height = '70px'
resetButton.style.width = '200px'
resetButton.style.backgroundColor = '#ce6767de'
resetButton.style.boxShadow = '5px 5px 5px 2px rgba(189, 115, 115, 0.87)'

resetButton.style.borderRadius = '20px'
resetButton.style.fontSize = '30px'
resetButton.style.cursor = 'pointer'
resetButton.addEventListener('click', ()=>
{
    timer =false;
     count = 0;
 second = 0;
 minutes = 0;
 hours = 0;
 updateHours(0)
 updateMinutes(0)
  updateSeconds(0)
  calculateDiv.removeChild(millispan1)
  stopButton.disabled = true
  startButton.disabled = false

})

startButton.addEventListener('click', () =>
{
    stopButton.disabled = false
    startButton.disabled = true
    timer =true;
    start();
})

const millispan1 = document.createElement('span')

let count = 0;
let second = 0;
let minutes = 0;
let hours = 0;
let timer = true;
function start()
{
    if(timer)
    {
    if(count==100)
    {
        count=0
        second++
       updateSeconds(second)
    }
    if(second==60)
        {
            second=0
            minutes++
            updateMinutes(minutes)
            updateSeconds(second)
        }
        if(minutes==60)
            {
                minutes=0
                hours++
                updateHours(hours)
                updateMinutes(minutes)
                 updateSeconds(second)
            }

    millispan1.innerHTML =''
millispan1.innerText = ':'+ parseInt(count++)
millispan1.style.color = '#ce6767de'
millispan1.style.fontSize ='120px'
millispan1.style.top ='50px'
calculateDiv.appendChild(millispan1)
setTimeout(()=>
{
start()
},10)
}
}
TimeDiv.appendChild(startButton)
TimeDiv.appendChild(stopButton)
TimeDiv.appendChild(resetButton)

container.appendChild(TimeDiv)

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

container.appendChild(TimeDiv)
    setTimeout(()=>
        {
            update()
        },1000)
}
//update()
