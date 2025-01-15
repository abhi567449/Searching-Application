const text = document.getElementById('text-area')

text.value  = localStorage.getItem('text')

text.addEventListener('input', ()=>
{
    localStorage.clear()
    localStorage.setItem('text',text.value)
    
})
