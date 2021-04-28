// PART ONE

// Get all numbers from the document and add the ELEMENTS to an array
// We'll handle the values later on

const numbers = document.getElementsByClassName("number");
const numArr = Array.from(numbers);

// Add an event listener to every element

// When a number is clicked, give it the active class
// And remove the class if the element has the class already

function addActiveClass(element){
    console.log(element);
    // if (element.classList.contains("active")){
    //     element.classList.remove("active");
    // } else {
    //     element.classList.add("active");
    // }
    element.classList.toggle("active");
}

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



// When a number is clicked, add the element to an array

// Only add the number if there are less than 5 numbers already

// Check whether the array already contains the element
// If it does, don't add it.

// If a sixth element is clicked, remove the first element in the array
// Add the sixth element