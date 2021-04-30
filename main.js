let readBtn = document.querySelector(".page-content .text .text-body span");
let moreText = document.querySelector(".more-text");
let closeBtn = document.querySelector(".more-text span i");

readBtn.onclick = function () {
    document.querySelector(".page-content").style.filter = "blur(8px)";
    moreText.style.visibility = "visible";
    moreText.style.opacity = "1";
}

closeBtn.onclick = function () {
    document.querySelector(".page-content").style.filter = "none";
    moreText.style.visibility = "hidden";
    moreText.style.opacity = "0";
}