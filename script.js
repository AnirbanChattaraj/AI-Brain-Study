
// Smooth scroll
function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

// Dark Mode
function toggleDarkMode(){
    document.body.classList.toggle("dark-mode");
}

// Impact Test
function impactTest(){
    let answer = confirm("Can you stay focused for 30 minutes without checking your phone?");
    if(answer){
        alert("Great! Your attention span is strong.");
    } else {
        alert("You might be affected by short-form dopamine loops.");
    }
}

// Scroll Top Button
window.onscroll = function(){
    let btn = document.getElementById("topBtn");
    if(document.documentElement.scrollTop > 200){
        btn.style.display="block";
    } else {
        btn.style.display="none";
    }
}

function scrollToTop(){
    window.scrollTo({top:0,behavior:'smooth'});
}

// Modal
function openModal(){
    document.getElementById("researchModal").style.display="flex";
}

function closeModal(){
    document.getElementById("researchModal").style.display="none";
}

// Counter animation
let minutes = 0;
let counter = setInterval(function(){
    minutes++;
    document.getElementById("minutes").innerText = minutes;
    if(minutes == 145){
        clearInterval(counter);
    }
},20);

