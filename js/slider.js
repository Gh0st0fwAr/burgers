

const prev = document.querySelector(".slider__arrow--prev");
const next = document.querySelector(".slider__arrow--next");
const list = document.querySelector(".slider__list");
const widthContainer = document.querySelector(".slider").clientWidth;


const minRight = 0;
const itemsCount = list.children.length;
const maxRight = itemsCount * widthContainer - widthContainer;
const step = widthContainer;
let currentRight = 0;

list.style.right = currentRight;

next.addEventListener("click", function(e) {
    e.preventDefault();

    if (currentRight < maxRight) {
        currentRight += step;
        list.style.right = currentRight + "px";
    }
});

prev.addEventListener("click", function(e) {
    e.preventDefault();

    if (currentRight > minRight) {
        currentRight -= step;
        list.style.right = currentRight + "px";
    }
})




