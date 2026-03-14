document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
});

});

});


const faders = document.querySelectorAll(".fade");

function reveal(){

faders.forEach(el => {

const rect = el.getBoundingClientRect();

if(rect.top < window.innerHeight - 100){

el.classList.add("show");

}

});

}

window.addEventListener("scroll", reveal);

reveal();



const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 120;

if(pageYOffset >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

}

});

});