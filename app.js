// ===========gallery section start===============
var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic) {
    fullImgBox.style.display = "flex";
    // @ts-ignore
    fullImg.src = pic;
}

function closeFullImg() {
    fullImgBox.style.display = "none";
}
// ===========gallery section end===============

//hamburger menu toggle start
const toggle = document.getElementById("toggle");
const sidebar = document.getElementById("sidebar");

document.onclick = function (e) {
    if (e.target.id !== "sidebar" && e.target.id !== "toggle") {
        toggle.classList.remove("active");
        sidebar.classList.remove("active")
    }
}

toggle.onclick = function () {
    toggle.classList.toggle("active");
    sidebar.classList.toggle("active")
}
//hamburger menu toggle end