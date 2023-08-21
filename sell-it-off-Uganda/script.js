// hamburger menu making it clickable
const bar = document.getElementById('bar');
// on clicking the hamburger I want to see the Navbar
const nav = document.getElementById('navbar');

// check if the navbar is showing
 if (bar){
    // if the bar is clicked (event listener), then give me the function
    bar.addEventListener('click', ()=> {
        nav.classList.add('active');

    } )
 }