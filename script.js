// hamburger menu making it clickable
const bar = document.getElementById('bar');
const close = document.getElementById('close');
// on clicking the hamburger I want to see the Navbar
const nav = document.getElementById('navbar');

// check if the navbar is showing
 if (bar){
    // if the bar is clicked (event listener), then give me the function
    bar.addEventListener('click', ()=> {
        nav.classList.add('active');
    } )
 }

 if (close){
    // if the bar is clicked (event listener), then give me the function
    close.addEventListener('click', ()=> {
        nav.classList.remove('active');
    } )
 }