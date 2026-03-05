const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});

// Modal
const modal = document.querySelector(".modal");
const openBtns = document.querySelectorAll(".open-modal");
const closeBtn = document.querySelector(".close");

openBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        modal.style.display = "flex";
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", e => {
    if(e.target === modal) modal.style.display = "none";
});

// Form
document.getElementById("appointment-form")
?.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Заявка отправлена!");
    modal.style.display = "none";
});
function filterServices(category) {
    const services = document.querySelectorAll(".service");

    services.forEach(service => {
        if(category === "all") {
            service.style.display = "block";
        } else {
            service.style.display =
                service.classList.contains(category) ? "block" : "none";
        }
    });
}