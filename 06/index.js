const form = document.querySelector('#signup-form')
const userName = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
form.addEventListener('submit' , (e)=> {
    e.preventDefault();
    if(userName.value == '' || !isNaN(userName.value)) alert("Please Enter a Valid Name")
    if(email.value == '') alert("Please Enter Email Address")
    if(password.value == '') alert("Please Enter Password")
   
    window.open("msg.html");
    userName.value = null;
    email.value = null;
    password.value = null;
})