        const menuBtn = document.getElementById("menuBtn");
        const navLinks = document.getElementById("navLinks");
        const navAnchors = document.querySelectorAll(".nav-links a");
        const sections = document.querySelectorAll("section");
        const revealEls = document.querySelectorAll(".reveal");
        const filterBtns = document.querySelectorAll(".filter-btn");
        const menuItems = document.querySelectorAll(".menu-item");
        const bookingForm = document.getElementById("bookingForm");
        const formMessage = document.getElementById("formMessage");

        menuBtn.addEventListener('click', () => {
          navLinks.classList.toggle("show");
        });

        navAnchors.forEach(link => {
          link.addEventListener("click", () =>
          navLinks.classList.remove("show"));
        });

        function setActiveNav() {
          let current = "";
          sections.forEach(section => {
            const sectionTop = section.offsetTop - 130;
            if(window.scrollY >= sectionTop) {
                current = section.getAttribute("Id");
            }
          });

          navAnchors.forEach(link => {
            link.classList.remove("active");
            if(link.getAttribute("href") === `#${current}`){
            link.classList.add("active");
            }
          });
        }

        function revealOnScroll() {
            const trigger = window.innerHeight* 0.88;
            revealEls.forEach(el => {
                const top = 
                el.getBoundingClientRect().top;
                if(top < trigger){
                    el.classList.add("show");
                }
            });
        }

        window.addEventListener("scroll", () => {
            setActiveNav();
            revealOnScroll();
        });

        setActiveNav();
        revealOnScroll();

        filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {

        // Change active button
        filterBtns.forEach(b => {
            b.classList.remove("active");
        });

        btn.classList.add("active");

        // Get selected category
        const filter = btn.dataset.filter;

        // Show/hide dishes
        menuItems.forEach(item => {

            if (filter === "all" || item.dataset.category === filter) {
                item.classList.remove("hidden");
            } else {
                item.classList.add("hidden");
            }

        });
    });
});

        bookingForm.addEventListener("submit",function(e){
          e.preventDefault();
          formMessage.style.display = "block";
          bookingForm.reset();

          setTimeout(() => {
            formMessage.style.display = "none";
          },3000);
        })
    