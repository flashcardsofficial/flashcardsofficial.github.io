let wrong_element = document.getElementById("wrong-element");
let correct_element = document.getElementById("correct-element");

console.log(localStorage.getItem("wrong"));
wrong_element.innerHTML = "Wrong: " + localStorage.getItem("wrong");
correct_element.innerHTML = "Correct: " + localStorage.getItem("correct");
