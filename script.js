// When a number is clicked, give it the active class
// And remove it if the element has the class already

const allNumbers = Array.from(document.getElementsByClassName("number"))

let activeNumbers = [];

function addActiveClass(event){
    event.target.classList.toggle('active');
}

allNumbers.forEach(element=>{
    addEventListener("click", addActiveClass);
})

// When a number is clicked, add the value to an array.



