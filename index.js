
var mainImage = document.getElementById("imageprin");
var smallImages = document.querySelectorAll("#image1, #image2, #image3");
for (let i = 0; i < smallImages.length; i++) {
    smallImages[i].addEventListener("click", function() {
        var newImageSrc = smallImages[i].getAttribute("src");
        mainImage.setAttribute("src", newImageSrc);
    });
}



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




// window.onscroll = function () {
//   if ( document.documentElement.scrollTop > 20) {
//     goBack.style.display = "block";
//   } else {
//     goBack.style.display = "none";
//   }
// };

// function scroltoTOP() {
//     var valuescroll = document.documentElement.scrollTop;

//     if (valuescroll > 0) {
//         window.requestAnimationFrame(scroltoTOP);
//         window.scrollTo(0, valuescroll - valuescroll / 12);
//     }
//     }

// goBack.addEventListener("click", function () {
//   scroltoTOP();
// });
// =======================contact=====================
function boton(){
    var email = document.forms["form1"]["email"];
    var name = document.forms["form1"]["name"];
    var comentaire = document.forms["form1"]["comentaire"];
    
     if(!(/^[a-zA-Z]/g).test(name.value)){
        alert("entre votre nom correct");
        name.focus();
        return false;
     }
     if(!(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gi).test(email.value)){
        alert("entre votre email ");
        email.focus();
        return false;
     }
      if(!(/^[a-zA-Z]/g).test(comentaire.value)){
        alert("entre votre commentaire");
        comentaire.focus();
        return false;
     }
     return true;
    
     }
    
