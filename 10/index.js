    const firstStar = document.getElementById('firstStar')
    const secondStar = document.getElementById('secondStar')
    const thirdStar = document.getElementById('thirdStar')
    const fourthStar = document.getElementById('fourthStar')
    const fifthStar = document.getElementById('fifthStar')
    firstStar.addEventListener('click',()=>{
        if(firstStar.className === "fa-regular fa-star checked") firstStar.className = "fa-regular fa-star"
        else{
          firstStar.className = "fa-regular fa-star checked";
        }
    })
    secondStar.addEventListener('click',()=>{
        if(secondStar.className === "fa-regular fa-star checked") {
            firstStar.className = "fa-regular fa-star"
            secondStar.className = "fa-regular fa-star"
        }
        else{
          firstStar.className = "fa-regular fa-star checked";
          secondStar.className = "fa-regular fa-star checked";
        }
    })
    thirdStar.addEventListener('click',()=>{
        if(thirdStar.className === "fa-regular fa-star checked") {
            firstStar.className = "fa-regular fa-star"
            secondStar.className = "fa-regular fa-star"
            thirdStar.className = "fa-regular fa-star"
        }
        else{
          firstStar.className = "fa-regular fa-star checked";
          secondStar.className = "fa-regular fa-star checked";
          thirdStar.className = "fa-regular fa-star checked";
        }
    })
    fourthStar.addEventListener('click',()=>{
        if(fourthStar.className === "fa-regular fa-star checked") {
            firstStar.className = "fa-regular fa-star"
            secondStar.className = "fa-regular fa-star"
            thirdStar.className = "fa-regular fa-star"
            fourthStar.className = "fa-regular fa-star"
        }
        else{
          firstStar.className = "fa-regular fa-star checked";
          secondStar.className = "fa-regular fa-star checked";
          thirdStar.className = "fa-regular fa-star checked";
          fourthStar.className = "fa-regular fa-star checked";
        }
    })
    fifthStar.addEventListener('click',()=>{
        if(fifthStar.className === "fa-regular fa-star checked") {
            firstStar.className = "fa-regular fa-star"
            secondStar.className = "fa-regular fa-star"
            thirdStar.className = "fa-regular fa-star"
            fourthStar.className = "fa-regular fa-star"
            fifthStar.className = "fa-regular fa-star"
        }
        else{
          firstStar.className = "fa-regular fa-star checked";
          secondStar.className = "fa-regular fa-star checked";
          thirdStar.className = "fa-regular fa-star checked";
          fourthStar.className = "fa-regular fa-star checked";
          fifthStar.className = "fa-regular fa-star checked";
        }
    })
    const form = document.getElementById('form')
    const username = document.getElementById('name')

    form.addEventListener('submit' , (e)=>{
        e.preventDefault()
        alert('Your Form has been Submitted, Thanks for your time & your Valueable response')
    })