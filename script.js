// When a number is clicked, give it the active class
// And remove it if the element has the class already

const allNumbers = Array.from(document.getElementsByClassName("number"))

let activeNumbers = [];

function addActiveClass(event){
    if (activeNumbers.length < 5 && !activeNumbers.includes(event.target)){
        event.target.classList.toggle('active');
        activeNumbers.push(event.target);
    } else if (activeNumbers.includes(event.target)){
        let currentIndex = activeNumbers.indexOf(event.target);
        activeNumbers.splice(currentIndex, 1);
        event.target.classList.toggle('active');
    } else {
        event.target.classList.toggle('active');
        activeNumbers.push(event.target);
        let currentVal = activeNumbers.shift();
        currentVal.classList.remove('active');
    }
}

allNumbers.forEach(element=>{
    element.addEventListener("click", addActiveClass);
})

// When a number is clicked, add the element to an array
// Only add the number if there are less than 5 numbers already

// Check whether the array already contains the element
// If it does, don't add it.

// If a sixth element is clicked, remove the first value in the array
// Add the sixth element