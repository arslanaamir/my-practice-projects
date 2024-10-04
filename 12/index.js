//stars checked 
const firstStar = document.getElementById('firstStar')
const secondStar = document.getElementById('secondStar')
const thirdStar = document.getElementById('thirdStar')
const fourthStar = document.getElementById('fourthStar')
const fifthStar = document.getElementById('fifthStar')
let rating = 0;
firstStar.addEventListener('click',()=>{
    if(firstStar.className === "fa-regular fa-star checked"){
        firstStar.className = "fa-regular fa-star"
        rating = 0;
    }
    else{
      firstStar.className = "fa-regular fa-star checked"
      rating = 1;
    }
    return rating
})
secondStar.addEventListener('click',()=>{
    if(secondStar.className === "fa-regular fa-star checked") {
        firstStar.className = "fa-regular fa-star"
        secondStar.className = "fa-regular fa-star"
        rating = 0;
    }
    else{
      firstStar.className = "fa-regular fa-star checked";
      secondStar.className = "fa-regular fa-star checked";
      rating = 2;
    }
    return rating
})
thirdStar.addEventListener('click',()=>{
    if(thirdStar.className === "fa-regular fa-star checked") {
        firstStar.className = "fa-regular fa-star"
        secondStar.className = "fa-regular fa-star"
        thirdStar.className = "fa-regular fa-star"
        rating = 0;
    }
    else{
      firstStar.className = "fa-regular fa-star checked";
      secondStar.className = "fa-regular fa-star checked";
      thirdStar.className = "fa-regular fa-star checked";
      rating = 3;
    }
    return rating
})
fourthStar.addEventListener('click',()=>{
    if(fourthStar.className === "fa-regular fa-star checked") {
        firstStar.className = "fa-regular fa-star"
        secondStar.className = "fa-regular fa-star"
        thirdStar.className = "fa-regular fa-star"
        fourthStar.className = "fa-regular fa-star"
        rating = 0;
    }
    else{
      firstStar.className = "fa-regular fa-star checked";
      secondStar.className = "fa-regular fa-star checked";
      thirdStar.className = "fa-regular fa-star checked";
      fourthStar.className = "fa-regular fa-star checked";
      rating = 4;
    }
    return rating
})
fifthStar.addEventListener('click',()=>{
    if(fifthStar.className === "fa-regular fa-star checked") {
        firstStar.className = "fa-regular fa-star"
        secondStar.className = "fa-regular fa-star"
        thirdStar.className = "fa-regular fa-star"
        fourthStar.className = "fa-regular fa-star"
        fifthStar.className = "fa-regular fa-star"
        rating = 0;
    }
    else{
      firstStar.className = "fa-regular fa-star checked";
      secondStar.className = "fa-regular fa-star checked";
      thirdStar.className = "fa-regular fa-star checked";
      fourthStar.className = "fa-regular fa-star checked";
      fifthStar.className = "fa-regular fa-star checked";
      rating = 5;
    }
    return rating
})
//form
let username = document.getElementById('name');
let email = document.getElementById('email');
let comment = document.getElementById('message')
const form = document.getElementById('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(username.value === "" || !isNaN(username.value) || email.value === "" || comment.value === "") alert("Please Enter Valid Details")
    else{
        alert("Form is Submitted") 
        console.log("Name:", username.value);
        console.log("Email:", email.value);
        console.log("Comment:", comment.value);
        console.log("Rating:", rating)
    }
})