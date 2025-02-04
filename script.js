<!-- script.js -->
let currentPage = 0;
const pages = document.querySelectorAll(".page");

function nextPage() {
    if (currentPage < pages.length - 1) {
        pages[currentPage].style.display = "none";
        currentPage++;
        pages[currentPage].style.display = "block";
    }
}

document.getElementById("backgroundMusic").play();
