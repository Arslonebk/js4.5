let body = document.querySelector('#body');
let button = document.querySelector('button');

button.addEventListener('click', function () {
    if (button.innerHTML == "Light Mode") {
        button.innerHTML = "Dark Mode";
        body.style.background = 'black'; 
    } else if (button.innerHTML == "Dark Mode") {
        button.innerHTML = "Light Mode";
        body.style.background = 'white'; 
        button.style = ' box-shadow: none;'
    }
});