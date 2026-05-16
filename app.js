const listenav = document.querySelector(".listenav");
const logomenu = document.querySelector(".logomenu");
const lienmenu = document.querySelectorAll(".item-nav");

logomenu.addEventListener("click", () => {
    listenav.classList.toggle("active");
});

lienmenu.forEach((lien) => {
    lien.addEventListener("click", () => {
        listenav.classList.toggle("active");
    });
});

document.getElementById("current-year").textContent = new Date().getFullYear();
