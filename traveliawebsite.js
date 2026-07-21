let menu = document.getElementById("menu");
let show = document.getElementById("show");
let closeX = document.getElementById("close");
let lot_of_choices = document.getElementById("lot_of_choices");
let best_tour_guide = document.getElementById("best_tour_guide");
let easy_booking = document.getElementById("easy_booking");
let scrollup = document.getElementById("scrollup");
let sign_in = document.getElementById("btn1");
let sign_up = document.getElementById("btn2");
let sign_in_show = document.getElementById("btn3");
let sign_up_show = document.getElementById("btn4");
let view_all_Des = document.getElementById("view_all_Des");
let view_less_Des = document.getElementById("view_less_Des");
let card_Mecidiye1 = document.getElementById("card_Mecidiye1");
let card_Mecidiye2 = document.getElementById("card_Mecidiye2");
let card_Mecidiye3 = document.getElementById("card_Mecidiye3");
let card_Mecidiye4 = document.getElementById("card_Mecidiye4");
let card_Mecidiye5 = document.getElementById("card_Mecidiye5");
let card_Mecidiye6 = document.getElementById("card_Mecidiye6");
menu.addEventListener("click", ()=> {show.style.right = "0";document.body.style.overflow = 'hidden';});
closeX.addEventListener("click" , ()=> {show.style.right = "-100%";document.body.style.overflow = 'visible';});
sign_up.onclick = ()=> {location.assign("signuppage.html");}
sign_up_show.onclick = ()=> {location.assign("signuppage.html");}
sign_in.onclick = ()=> {location.assign("loginpage.html");}
sign_in_show.onclick = ()=> {location.assign("loginpage.html");}
view_all_Des.onclick = ()=> {card_Mecidiye1.style.display = "block";card_Mecidiye2.style.display = "block";card_Mecidiye3.style.display = "block";card_Mecidiye4.style.display = "block";card_Mecidiye5.style.display = "block";card_Mecidiye6.style.display = "block";view_all_Des.style.display = "none";view_less_Des.style.display = "block";}
view_less_Des.onclick = ()=> {card_Mecidiye1.style.display = "none";card_Mecidiye2.style.display = "none";card_Mecidiye3.style.display = "none";card_Mecidiye4.style.display = "none";card_Mecidiye5.style.display = "none";card_Mecidiye6.style.display = "none";view_less_Des.style.display = "none";view_all_Des.style.display = "block";}

if(navigator.onLine) {console.log(navigator.onLine);console.log("Welcome to my website"); } 
else {console.log(navigator.onLine);} 

scrollup.onclick = ()=> {window.scroll({behavior : "smooth",top : 0});}

const revealElements = document.querySelectorAll('.animate-on-scroll');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealElements.forEach((element, index) => {
  element.style.transitionDelay = `${index * 80}ms`;
  revealObserver.observe(element);
});