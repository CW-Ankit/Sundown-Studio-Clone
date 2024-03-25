const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var elem = document.querySelector(".elem-container")
var fixed = document.querySelector("#fixed-image")

elem.addEventListener("mouseenter", function () {
    fixed.style.display = "block"
})

elem.addEventListener("mouseleave", function () {
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});

var loader = document.querySelector("#loader")
setTimeout(function () {
    loader.style.top = "-100%"
}, 4200)