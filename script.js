// When a number is clicked, give it the active class
// And remove it if the element has the class already

// When a number is clicked, add the element to an array
// Only add the number if there are less than 5 numbers already

// Check whether the array already contains the element
// If it does, don't add it.

// If a sixth element is clicked, remove the first value in the array
// Add the sixth element

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

// Now that we have a maximum of five numbers
// When the button is clicked, replace 'Result' with the result

// Let's start with a function which outputs the numbers selected

const goButton = document.getElementById("go-button");
const output = document.getElementById("result-output");

const calculateResult = () => {
    let numbersContent = activeNumbers.map(element => element.textContent)

    console.log(onlyDivisible(numbersContent))

    output.textContent = numbersContent.join(", ")
}

goButton.addEventListener("click", calculateResult);

// Now let's write specific functions for doubling and dividing
// We'll call these functions inside calculateResult

const doubler = (valuesArray) => {
    return valuesArray.map((value)=> value *=2)
}

const onlyDivisible = (valuesArray) => {
    return valuesArray.filter((value)=> value % 3 === 0)
}