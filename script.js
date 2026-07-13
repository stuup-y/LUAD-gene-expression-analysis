if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname + window.location.search);
}

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

const sections = document.querySelectorAll("main section[id], .hero");
const navLinks = document.querySelectorAll("nav a[href^='#']");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            const id = entry.target.getAttribute("id");
            const link = document.querySelector(`nav a[href="#${id}"]`);

            if (!link) return;

            if (entry.isIntersecting) {

                navLinks.forEach((l) => 
                    l.classList.remove("active")
                );

                link.classList.add("active");
            }
        });
    },
    { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => observer.observe(section));



const images = document.querySelectorAll(".graph-card img");

const overlay = document.createElement("div");
overlay.className = "image-overlay";

const enlargedImage = document.createElement("img");

overlay.appendChild(enlargedImage);
document.body.appendChild(overlay);



images.forEach((image) => {

    image.addEventListener("click", () => {

        enlargedImage.src = image.src;
        enlargedImage.alt = image.alt;

        overlay.classList.add("active");

    });

});



overlay.addEventListener("click", () => {

    overlay.classList.remove("active");

});



// Escape key closes image

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        overlay.classList.remove("active");

    }

});