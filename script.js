/* ==========================
   DARK MODE TOGGLE
========================== */

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        darkBtn.innerHTML = "☀️";
    } else {
        darkBtn.innerHTML = "🌙";
    }

});


/* ==========================
   ANIMATED COUNTERS
========================== */

function animateCounter(id, target){

    let count = 0;

    let speed = target / 100;

    let interval = setInterval(() => {

        count += Math.ceil(speed);

        if(count >= target){

            count = target;

            clearInterval(interval);

        }

        document.getElementById(id).innerText = count + "+";

    },20);

}

animateCounter("students", 500);
animateCounter("workshops", 50);
animateCounter("volunteers", 100);


/* ==========================
   SCROLL TO TOP BUTTON
========================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


/* ==========================
   NAVBAR SHADOW ON SCROLL
========================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 5px 20px rgba(0,0,0,0.2)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


/* ==========================
   FADE-IN ANIMATION ON SCROLL
========================== */

const observer = new IntersectionObserver(

(entries) => {

entries.forEach((entry) => {

    if(entry.isIntersecting){

        entry.target.classList.add("show");

    }

});

},

{
threshold:0.15
}

);

document.querySelectorAll(".card, .stat-box, .section")
.forEach((element) => {

    observer.observe(element);

});


/* ==========================
   CONTACT FORM SUCCESS MESSAGE
========================== */

const form = document.querySelector(".contact-form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert(
    "Thank you for contacting NayePankh Foundation! We will get back to you soon."
    );

    form.reset();

});


/* ==========================
   LOADING SCREEN
========================== */

window.addEventListener("load",()=>{

    const loader = document.querySelector(".loader");

    if(loader){

        loader.style.opacity = "0";

        setTimeout(()=>{

            loader.style.display = "none";

        },500);

    }

});


/* ==========================
   HERO BUTTON ANIMATION
========================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn)=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform = "translateY(-5px) scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform = "translateY(0px) scale(1)";

    });

});


/* ==========================
   TYPEWRITER EFFECT
========================== */

const heading = document.querySelector(".hero h1");

const text =
"Empowering Students Through Education & Opportunities";

let i = 0;

function typeWriter(){

    if(!heading) return;

    if(i < text.length){

        heading.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,50);

    }

}

/* Uncomment if you want typewriter */
/*
heading.innerHTML = "";
typeWriter();
*/