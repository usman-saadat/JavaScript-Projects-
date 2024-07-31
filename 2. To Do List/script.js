const inputBox = document.getElementById('input-box');
const listcontainer = document.getElementById('list-container');

function addTask() {
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else {
        let li = document.createElement('li'); // creating 'li' element (not the value) just 'li'
        li.innerHTML = inputBox.value; // adding value for li element
        listcontainer.appendChild(li); // to display the added li element in the list-contaier
        let span = document.createElement('span');
        span.innerHTML = "\u00d7"; // adding 'cross' icon's code, it will add one cross icon in span tag
        li.appendChild(span); // to display the  span
    }
    inputBox.value = ''; // so that 'Add your text' area becomes empty after we add some value
    saveData(); // we have to call 'saveData' function every time we add any changes (new task etc) to save new data in browser. 
}

// code for check/uncheck and delete task (when clicked on cross icon)
listcontainer.addEventListener("click", function(e){ // in list container we store all created tasks, swo when we click on it
    if(e.target.tagName === "LI"){ // it will check where we clicked, if we clicked on LI
        e.target.classList.toggle("checked"); // it will add the checked class name, if checked class name is already there, it will remove it because we have added 'classList.toggle' from the target element (if the clicked target element is LI).
        saveData(); // call 'saveData' when we check or uncheck task
    }
    else if(e.target.tagName === "SPAN") { // if clicked target element is SPAN
        e.target.parentElement.remove() // then it will delete the parent element (which is LI element), so the task will be deleted
        saveData(); //call 'saveData' when we delete the task
    }
}, false);

// the tasks get deleted when we refresh the browser, create function to fix that
function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML); // it will save the content in listcontainer in browser with the name of 'data'.
}

// to display the data whenever we open the website again 
function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data"); // it will get all the content stored in browser with the name 'data'.
}
showTask(); //calling the function 
