const nav = document.querySelector(".nav");

let typed = new Typed(".typing",{
    strings:["A Creative Freelancer & Full Stack Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

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