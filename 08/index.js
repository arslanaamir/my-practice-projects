const form = document.getElementById("subscribe-form")
    form.addEventListener('submit', (e)=>{
     e.preventDefault();
     const alertBox = document.createElement('div')
     alertBox.style.height = "250px"
     alertBox.style.width = '750px'
     alertBox.style.borderRadius = '20px'
     alertBox.style.position = 'absolute'
     alertBox.style.top = '30px'
     alertBox.style.left = '50%'
     alertBox.style.transform = 'translateX(-50%)'
     alertBox.style.backgroundColor = "blue"
     alertBox.style.display = 'flex'
     alertBox.style.flexDirection = 'column'
     const textArea = document.createElement('div')
     textArea.style.width = "100%"
     textArea.style.height = "70%"
     textArea.style.display = "flex"
     textArea.style.alignItems = "center"
     textArea.style.justifyContent = "center"
     textArea.style.color = "white"
     textArea.style.fontSize = "28px"
     textArea.style.textAlign = "center"
     const text = document.createTextNode("Congratulations!You have successfully registered in our Newsletters")
     
     textArea.appendChild(text)
     const btn = document.createElement('button')
     btn.innerHTML = "OK"
     btn.style.height = "auto"
     btn.style.width = "auto"
     btn.style.padding = "5px 20px"
     btn.style.backgroundColor = "white"
     btn.style.color = "#0165ff"
     btn.style.border = "3px solid #0165ff"
     btn.style.borderRadius = '5px'
     btn.addEventListener('mouseover' , ()=>{
        btn.style.backgroundColor = "#0165ff"
        btn.style.color = "white"
        btn.style.border = "3px solid white"
     })
     btn.addEventListener('mouseout', () => {
        btn.style.backgroundColor = "white"
     btn.style.color = "#0165ff"
     btn.style.border = "3px solid #0165ff"
     })
     btn.addEventListener("click", (e)=>{
        const parent = btn.parentElement
        const grandParent = parent.parentElement
        grandParent.remove()
     })
     const btnArea = document.createElement('div')
     btnArea.style.height = '20%'
     btnArea.style.width = '100%'
     btnArea.style.display = 'flex'
     btnArea.style.alignItems = 'center'
     btnArea.style.justifyContent = 'center'
     btnArea.appendChild(btn)
     alertBox.appendChild(textArea)
     alertBox.appendChild(btnArea)
     document.body.appendChild(alertBox)
    
     })