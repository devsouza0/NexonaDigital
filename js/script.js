const menuMobile = document.getElementById("menuMobile");
const nav = document.getElementById("nav");

menuMobile.addEventListener("click", () => {
    nav.classList.toggle("active");

    const icon = menuMobile.querySelector("i");

    if (nav.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");

        const icon = menuMobile.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});
