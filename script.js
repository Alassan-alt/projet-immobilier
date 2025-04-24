document.addEventListener("DOMContentLoaded",()=>{
    //quand commence à scroller
    document.addEventListener("scroll",()=>{
        const header = document.querySelector(".sticky-header");
        header.classList.toggle("sticky",window.scrollY >70)

        const sections = document.querySelectorAll("section");
        const screenPosition = window.innerHeight /1.5;

        sections.forEach((section)=>{
            const sectionPosition = section.getBoundingClientRect().top;
            if (sectionPosition < screenPosition) {
                section.classList.add("fade-in")
                
            }else{
                section.classList.remove("fade-in")
            }
        })
        const navlinks = document.querySelectorAll("nav ul li a");
        let current = "";
        sections.forEach((section)=>{
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop -(sectionTop/10)) {
                current =  section.id;
                
            }
        });
        navlinks.forEach(link =>{
            link.classList.remove("active")
            if (link.href.includes(current)){
                link.classList.add("active")
            }
            
        })

    })
    const slides = document.querySelectorAll(".testimonial");
    const prev = document.querySelector(".prev-slide");
    const next = document.querySelector(".next-slide");

    let currentSlide = 0;

    function showSlide(index){
        slides.forEach((slide,i)=>{
            slide.classList.remove("active");
            if(i == index){
                slide.classList.add("active");
            }
        });
    }
    next.addEventListener("click",()=>{
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    })
    prev.addEventListener("click",()=>{
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
      })
      showSlide(0);
      const hamburger = document.querySelector(".hamburger");
      hamburger.addEventListener("click",(e)=>{
        const nav = document.querySelector("nav ul");
        nav.classList.toggle("open");
        hamburger.classList.toggle("active");
      })
 });
 document.addEventListener("DOMContentLoaded", function () {
    const userIconContainer = document.getElementById("userIconContainer");
    const userIconLink = document.getElementById("userIconLink");
  
    // Vérifie si l'utilisateur est connecté
    const isLoggedIn = localStorage.getItem("loggedIn");
  
    if (isLoggedIn === "true") {
      // Changer l’icône pour un profil ou déconnexion
      userIconLink.innerHTML = '<i class="fas fa-sign-out-alt"></i>';
      userIconLink.href = "#";
      
      userIconLink.addEventListener("click", function (e) {
        e.preventDefault();
        // Déconnexion
        localStorage.removeItem("loggedIn");
        window.location.reload(); // Recharge la page
      });
    } else {
      // Icône par défaut
      userIconLink.innerHTML = '<i class="fas fa-user-circle"></i>';
      userIconLink.href = "connexion.html";
    }
  });
  

