

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


const scroll = window.requestAnimationFrame || function (callback) { window.setTimeout(callback, 1000 / 60); };

const elementsToShow = document.querySelectorAll(".show-on-scroll");

function loop() {
    elementsToShow.forEach((element) => {
        if (isElementInViewport(element)) {
            element.classList.add("is-visible");
        } else {
            element.classList.remove("is-visible");
        }
    });
    scroll(loop);
}

document.addEventListener('DOMContentLoaded', loop);
