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
