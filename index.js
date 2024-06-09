document.getElementById("bars").addEventListener("click", function () {
    const bars = document.getElementById("bars");
    const menu = document.getElementById("burger-menu");
    const closeBtn = document.getElementById("close-btn");

    if (bars) {
        bars.addEventListener("click", function () {
            menu.style.display =
                menu.style.display === "flex" ? "none" : "flex";
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            menu.style.display = "none";
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const showMoreButton = document.getElementById("showMoreButton");
    const gallery = document.getElementById("gallery");
    const showMoreIcon = document.getElementById("showMoreIcon")

    showMoreButton.addEventListener("click", function () {
        gallery.classList.toggle("show-more");
        if (showMoreIcon.classList.contains("fa-chevron-down")) {
            showMoreIcon.classList.remove("fa-chevron-down");
            showMoreIcon.classList.add("fa-chevron-up");
        } else {
            showMoreIcon.classList.remove("fa-chevron-up");
            showMoreIcon.classList.add("fa-chevron-down");
        }
    });
});
