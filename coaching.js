// PART ONE

// Get all numbers from the document and add the ELEMENTS to an array
// We'll handle the values later on

const numArr = Array.from(document.getElementsByClassName("number"));
const clickArr = [];

// When a number is clicked, add the element to an array of 'active numbers'

// Check whether the array already contains the element
// If it does, don't add it.

// When a number is clicked, give it the active class
// And remove the class if the element has the class already

// If a sixth element is clicked, remove the first element in the array
// Add the sixth element

function addActiveClass(element){
    element.classList.toggle("active");

    if (element.classList.contains("active")){
        clickArr.push(element);
    } else {
        clickArr.splice(clickArr.indexOf(element),1)
    }
    
    if (clickArr.length > 5){
        clickArr[0].classList.toggle("active");
        clickArr.shift();
    }
}

const newNum = numArr.map(function(number){
    number.addEventListener("click", event =>{
        addActiveClass(event.target);
    });
});

// PART TWO

// Get the button, and the radio button inputs

const goButton = document.getElementById("go-button");
const h3 = document.getElementById("result-output");
const doubler = document.getElementById("doubler");
const multiples = document.getElementById("multiples");
const radioArray = [doubler, multiples];

// Write a function that will output the numbers selected
// Replace the text 'Result' with the value of the first element of our array of clicked elements

function getsValuesFromElements(element){
    // Return the textContent of that element
    return element.textContent;
}

function replaceResult(){
    // use getsValuesFromElements() to map the textContent of each element into a new array. The new array will hold all of the 'values' i.e. the textContent
    const textArray = clickArr.map(element=>{
        return parseInt(getsValuesFromElements(element));
    })

    console.log(textArray[0] + textArray[1])

    h3.textContent = clickArr[0].textContent;
}

// Add an eventListener so that when the button is clicked, replace 'Result' text with the result

goButton.addEventListener("click", replaceResult);







