
var container = document.querySelector(".main")

const noteDiv = document.createElement("div");
noteDiv.style.display ='flex'
noteDiv.style.marginTop = '200px'
noteDiv.style.marginLeft = '80px'

const textarea = document.createElement("textarea");
textarea.setAttribute("placeholder", "// Write a note here")
textarea.style.height = '200px'
textarea.style.width = '400px'
textarea.style.borderRadius = '5px'
textarea.style.boxShadow ='3px 3px 2px 3px grey'
textarea.style.padding ='20px'

const leftcontainer = document.getElementsByClassName("left-container")[0]
const rightcontainer = document.getElementsByClassName("right-container")[0]

const input = document.createElement("input");
input.setAttribute("type","color")
input.setAttribute("value","#00FFA1")


input.style.marginLeft = '20px'
input.style.marginTop = '60px'
input.style.borderRadius ='3px'

noteDiv.appendChild(textarea)
noteDiv.appendChild(input)


const buttontag = document.createElement("button")
buttontag.innerText = 'Add Note'
buttontag.style.textAlign = 'center'
buttontag.style.height= '60px'
buttontag.style.width= '190px'
buttontag.style.borderRadius='40px'
buttontag.style.border ='none'
buttontag.style.background = 'orange'
buttontag.style.marginLeft = '80px'
buttontag.style.marginTop = '50px'
buttontag.style.boxShadow ='3px 3px 5px 3px grey'


buttontag.addEventListener('click', function()
{
    console.log(textarea.value)
    if(textarea.value==='')
    {
        alert("Enter some text")
        return
    }

    let text = textarea.value
    pptag.innerHTML = ''
    const textdiv = document.createElement("div")
    textdiv.style.backgroundColor = input.value
    textdiv.style.height = '140px'
    textdiv.style.width = '140px'
    textdiv.style.display = 'flex'
    textdiv.style.justifyContent = 'space-between'

    const ptag = document.createElement("p")
    ptag.innerText = text
    ptag.style.wordBreak = 'break-word'; 
    ptag.style.alignContent = 'start'
    textdiv.style.overflow = 'scroll'
    ptag.style.marginTop = '12px'
    
    const deletebtn = document.createElement("button")
    deletebtn.innerText = 'X'
    deletebtn.style.backgroundColor = 'transparent'
    deletebtn.style.border = 'none'
    deletebtn.style.marginLeft = '120px'
    deletebtn.style.paddingLeft = '5px'
    deletebtn.style.position ='absolute'
    deletebtn.style.marginTop = '1px'
    deletebtn.style.cursor ='pointer'
    deletebtn.style.marginL

    deletebtn.addEventListener("click", function()
{
    notesdivtag.removeChild(textdiv)
})

    textdiv.appendChild(ptag)
    textdiv.appendChild(deletebtn)
    notesdivtag.appendChild(textdiv)
    rightcontainer.appendChild(notesdivtag)
    console.log(text)

    textarea.value = ''
})

leftcontainer.appendChild(noteDiv)
leftcontainer.appendChild(buttontag)

const h1 = document.createElement("h1")
h1.innerText = 'Your Notes'
h1.style.textAlign = 'center'

const notesdivtag = document.createElement("div")
notesdivtag.style.height = '300px'
notesdivtag.style.width = '100%'
notesdivtag.style.display = 'flex'
notesdivtag.style.flexWrap = 'wrap'
notesdivtag.style.marginLeft = '20px'
notesdivtag.style.gap = "80px"


const pptag = document.createElement("p")

pptag.innerText = 'You have not added a note yet.'
pptag.style.textAlign = 'center'

rightcontainer.appendChild(h1)
rightcontainer.appendChild(notesdivtag)
rightcontainer.appendChild(pptag)





