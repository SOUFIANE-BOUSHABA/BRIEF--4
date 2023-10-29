function handleScroll() {
    const elements = document.querySelectorAll('.fade-in-element');
    for (let i = 0; i < elements.length; i++) {
        if (viewinSecrin(elements[i])) {
            elements[i].style.opacity = 1;
        }
    }
}
function viewinSecrin(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}
window.addEventListener('scroll', handleScroll);
handleScroll();


var goBack = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if ( document.documentElement.scrollTop > 20) {
    goBack.style.display = "block";
  } else {
    goBack.style.display = "none";
  }
};

function scroltoTOP() {
    var valuescroll = document.documentElement.scrollTop;

    if (valuescroll > 0) {
        window.requestAnimationFrame(scroltoTOP);
        window.scrollTo(0, valuescroll - valuescroll / 12);
    }
    }

goBack.addEventListener("click", function () {
  scroltoTOP();
});