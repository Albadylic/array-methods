// When a number is clicked, give it the active class
// And remove it if the element has the class already

const allNumbers = Array.from(document.getElementsByClassName("number"))

let activeNumbers = [];

function addActiveClass(event){
    if (activeNumbers.length < 5){
        event.target.classList.toggle('active');
        activeNumbers.push(event.target);
    }
    console.log(activeNumbers)
}

allNumbers.forEach(element=>{
    element.addEventListener("click", addActiveClass);
})

// When a number is clicked, add the element to an array
// Only add the number if there are less than 5 numbers already



