const nav = document.querySelector(".nav");


window.addEventListener("scroll", () => {
    //ketika user scrol dari atas kebawah 80px maka jalankan
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        nav.classList.add("scrol");
        // document.getElementById("logo").style.fontSize = "25px";
      } 
      else {
        nav.classList.remove("scrol");
        nav.style.transition = "0.5s";
        // document.getElementById("logo").style.fontSize = "35px";
      }
});

// ======= AOS LIBRARY =============
AOS.init({
  once:true,
});


// ================ GSAP LIBRARY ==============
gsap.from(".main-img", {duration: 1.5, y: -100, opacity: 0, ease: "bounce" });
gsap.from(".main-text h1", {duration: 1, x:-50, opacity:0, delay:0.5, ease:"back"});