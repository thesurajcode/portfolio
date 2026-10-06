/* ===========================
   THEME TOGGLE (Night / Day Mode)
=========================== */

const themeToggleBtn = document.getElementById("theme-toggle");

const updateThemeIcon = (theme) => {
    if(!themeToggleBtn) return;
    const icon = themeToggleBtn.querySelector("i");
    if(icon){
        if(theme === "light"){
            icon.className = "fa-solid fa-sun";
            themeToggleBtn.setAttribute("title", "Switch to Night Mode");
            themeToggleBtn.setAttribute("aria-label", "Switch to Night Mode");
        } else {
            icon.className = "fa-solid fa-moon";
            themeToggleBtn.setAttribute("title", "Switch to Day Mode");
            themeToggleBtn.setAttribute("aria-label", "Switch to Day Mode");
        }
    }
};

const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
updateThemeIcon(currentTheme);

if(themeToggleBtn){
    themeToggleBtn.addEventListener("click", () => {
        const activeTheme = document.documentElement.getAttribute("data-theme") || "dark";
        const newTheme = activeTheme === "dark" ? "light" : "dark";
        
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateThemeIcon(newTheme);
    });
}

/* ===========================
   MOBILE MENU
=========================== */

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

if(toggle && menu){

    toggle.addEventListener("click", () => {
        const isOpen = menu.classList.toggle("active");
        toggle.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
            toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
    });

}

/* ===========================
   ACTIVE NAV LINK ON SCROLL
=========================== */

const sections = document.querySelectorAll("section[id]");

if(sections.length && navLinks.length){

    const spyObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                const id = entry.target.getAttribute("id");

                navLinks.forEach(link => {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === `#${id}`
                    );
                });

            }

        });

    }, { rootMargin: "-45% 0px -45% 0px" });

    sections.forEach(section => spyObserver.observe(section));

}

/* ===========================
   SCROLL REVEAL
=========================== */

const revealTargets = document.querySelectorAll(
    ".about-grid, .project-card, .skill-category, .timeline-item, .info-card, .cert-column"
);

revealTargets.forEach(el => el.classList.add("reveal"));

if(revealTargets.length){

    const revealObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            }

        });

    }, { threshold: .15 });

    revealTargets.forEach(el => revealObserver.observe(el));

}