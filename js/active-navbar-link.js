document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navigation-list__item");
    const sections = document.querySelectorAll("section[id]");

    function changeActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {} // Adjust 50 to the header height if needed

        navLinks.forEach((link) => link.classList.remove("navigation-list__item--active"));
        if (index >= 0) {
            navLinks[index].classList.add("navigation-list__item--active");
        }
    }

    function handleNavClick(event) {
        navLinks.forEach((link) => link.classList.remove("navigation-list__item--active"));
        event.target.classList.add("navigation-list__item--active");
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", handleNavClick);
    });

    changeActiveLink();
    window.addEventListener("scroll", changeActiveLink);
});