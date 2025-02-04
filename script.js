<!-- script.js -->
let currentPage = 0;
const pages = document.querySelectorAll(".page");
pages[currentPage].style.display = "flex";

document.getElementById("backgroundMusic").play();

function nextPage() {
    if (currentPage < pages.length - 1) {
        pages[currentPage].classList.add("flip-out");
        setTimeout(() => {
            pages[currentPage].style.display = "none";
            pages[currentPage].classList.remove("flip-out");
            currentPage++;
            pages[currentPage].style.display = "flex";
            pages[currentPage].classList.add("flip-in");
            setTimeout(() => pages[currentPage].classList.remove("flip-in"), 600);
        }, 600);
    }
}
