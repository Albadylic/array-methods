// PART ONE

// Get all numbers from the document and add the ELEMENTS to an array
// We'll handle the values later on

const numbers = document.getElementsByClassName("number");
const numArr = Array.from(numbers);
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

    // element.classList.contains("active") ? clickArr.push(element) : clickArr.splice(clickArr.indexOf(element),1);

    if (element.classList.contains("active")){
        clickArr.push(element);
    } else {
        clickArr.splice(clickArr.indexOf(element),1)
    }

    console.log("25: ", clickArr)
    
    if (clickArr.length > 5){
        clickArr[0].classList.toggle("active");
        clickArr.shift();
    }

}

// Add an event listener to every element

// for(let i = 0; i < numArr.length; i++){
//     numArr[i].addEventListener("click", e=>{
//         addActiveClass(e);
//     }); 
// };

const newNum = numArr.map(function(number){
    number.addEventListener("click", event =>{
        addActiveClass(event.target);
    });
});




