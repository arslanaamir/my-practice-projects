const form = document.getElementById('form')
const date = document.getElementById('date')
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(date.value)
})