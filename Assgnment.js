const container  = document.getElementsByClassName('.main')[0]

const firstname = prompt('Enter First Name')
localStorage.setItem('firstname',firstname)
const lastname = prompt('Enter Last Name ')
localStorage.setItem('lastname',lastname)
const country = prompt('Enter Country ')
localStorage.setItem('country',country)
const phoneNo = prompt('Enter Phone No.')
localStorage.setItem('phoneNo',phoneNo)
const state = prompt('Enter State')
localStorage.setItem('state',state)
const city = prompt('Enter City')
localStorage.setItem('city',city)
const village = prompt('Enter Village')
localStorage.setItem('village',village)

const firstnameTag  = document.getElementById('firstname')
firstnameTag.innerText  = localStorage.getItem('firstname')

const lastnameTag  = document.getElementById('lastname')
lastnameTag.innerText  = localStorage.getItem('lastname')

const countryTag  = document.getElementById('country')
countryTag.innerText  =  localStorage.getItem('country')

const phoneNoTag  = document.getElementById('phoneNo')
phoneNoTag.innerText  =  localStorage.getItem('phoneNo')

const stateTag  = document.getElementById('state')
stateTag.innerText  =  localStorage.getItem('state')

const cityTag  = document.getElementById('city')
cityTag.innerText  =  localStorage.getItem('city')

const villageTag  = document.getElementById('village')
villageTag.innerText  =  localStorage.getItem('village')

