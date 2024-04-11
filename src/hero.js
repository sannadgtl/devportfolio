const texts = ["Web Designer", "Web Developer"]
const ul = document.querySelector("#hero"); 
let counter = 0

function addAnimation() {
    const li = document.createElement("li"); 
    li.innerText = texts[counter]; 
    ul.appendChild(li); 

    li.classList.add("animated-item"); 
    li.addEventListener('animationend', (e) => {
        e.target.remove();
        counter++;
        if(counter == texts.length) counter = 0;
        addAnimation();
      });
    }

    addAnimation(); 