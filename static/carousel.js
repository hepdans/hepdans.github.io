let bannerIndex = 0;

function showCarousel() {
    const banners = document.getElementsByClassName("banner");
    for (let i = 0; i < banners.length; i++) {
        banners[i].style.display = "none";
    }
    bannerIndex++;
    if (bannerIndex > banners.length) {
        bannerIndex = 1;
    }
    banners[bannerIndex-1].style.display = "block";
    setTimeout(showCarousel, 5000);
}

document.addEventListener("DOMContentLoaded", showCarousel, false);
