// Mobile menu

const menu = document.querySelector(".menu");
const navLinks = document.querySelector("nav ul");


menu.addEventListener("click",()=>{

    navLinks.classList.toggle("show");

});





// Typing effect

const text = [
    "Computer Science Student",
    "Java Developer",
    "Data Science Enthusiast"
];


let index = 0;
let char = 0;

const typing = document.querySelector(".hero h2");


function typeEffect(){


    if(char < text[index].length){

        typing.innerHTML += text[index].charAt(char);

        char++;

        setTimeout(typeEffect,100);

    }

    else{


        setTimeout(()=>{

            typing.innerHTML="";

            char=0;

            index=(index+1)%text.length;

            typeEffect();


        },1500);


    }

}


typing.innerHTML="";
typeEffect();








// Navbar shadow on scroll


window.addEventListener("scroll",()=>{


    const header=document.querySelector("header");


    if(window.scrollY>50){

        header.style.boxShadow="0 5px 25px #0066ff";

    }

    else{

        header.style.boxShadow="none";

    }


});







// Project button animation


const cards=document.querySelectorAll(".card,.skill-card,.project-card");


cards.forEach(card=>{


card.addEventListener("mousemove",(e)=>{


let x=e.offsetX;
let y=e.offsetY;


card.style.transform=
`perspective(500px)
rotateX(${(y-card.offsetHeight/2)/20}deg)
rotateY(${-(x-card.offsetWidth/2)/20}deg)
translateY(-10px)`;


});



card.addEventListener("mouseleave",()=>{


card.style.transform="";


});


});






// Current year footer

document.querySelector("footer p").innerHTML =
"Designed & Developed by Sakshi | "+new Date().getFullYear();