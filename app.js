
// =========== Typed Library =============
let typed = new Typed(".typing",{
  strings:["A Creative Freelancer","Full Stack Developer"],
  typeSpeed:100,
  backSpeed:60,
  loop:true,
});

// ======= AOS LIBRARY =============
AOS.init({
  // once:true,
});


// ================ GSAP LIBRARY ==============
gsap.registerPlugin(TextPlugin);
gsap.from(".main-img", {duration: 1.5, y: -100, opacity: 0, delay:0.2,ease: "bounce" });
gsap.from(".main-text h1", {duration: 1, x:-50, opacity:0, delay:0.4, ease:"back"});
gsap.to(".main-text h1", {duration: 3, text: "Muhammad Asman",delay:0.4, ease: "none"});
gsap.from(".nav",{duration: 1.5, y: -100, opacity: 0,delay:0.3})
//scroll 
window.addEventListener("scroll", () => {
    //ketika user scrol dari atas kebawah 80px maka jalankan
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.querySelector(".nav").classList.add("scrol");
        // document.getElementById("logo").style.fontSize = "25px";
      } 
      else {
        document.querySelector(".nav").classList.remove("scrol");
        document.querySelector(".nav").style.transition = "0.5s";
        // document.getElementById("logo").style.fontSize = "35px";
      }
});


// ===== Navbar Active ======
const navbar = document.querySelector(".nav");
const navList = navbar.querySelectorAll("li");
const allSection = document.querySelectorAll(".section");

for(let i=0;i<navList.length;i++){
  const a = navList[i].querySelector("a");

  a.addEventListener("click", function () {
    //remove kelas active disemua tag a
    for (let j = 0; j < navList.length; j++) {
      navList[j].querySelector("a").classList.remove("active");
    }
   //tambahkan kelas active pada kelas yang diklik
    this.classList.add("active");
  });

}

// ======= respnsive burger menu =======
const nav = document.querySelector(".nav-link");

// const toggle = document.querySelector(".fa-bars");

// toggle.addEventListener("click",function () {
//   nav.classList.toggle("on");
// })


// =============== Scrol active a ==============
const li = document.querySelectorAll(".nav-link li a");
const sec = document.querySelectorAll("section");

function activeMenu(){
  let len=sec.length;

  // check the current height by using scrollY
  //check the current page height -> offsetTop
  while(--len && window.scrollY + 80 < sec[len].offsetTop){}
  // while (len >= 0 && window.scrollY + 50 < sec[len].offsetTop) {
  //   len--
  // }

  //loop through the section and adding active class
  li.forEach((list) => list.classList.remove("active"));
  li[len].classList.add("active")
}
activeMenu();
window.addEventListener("scroll", activeMenu);


const toggle = document.querySelector(".fa-bars");

toggle.addEventListener("click",function () {
  nav.classList.toggle("on");
})