
var mainImage = document.getElementById("imageprin");
var smallImages = document.querySelectorAll("#image1, #image2, #image3");

smallImages.forEach(element => {
    element.addEventListener("click", function() {
        var newImageSrc = element.getAttribute("src");
        mainImage.setAttribute("src", newImageSrc);
    });
});



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
        Swal.fire({
            position: 'bottom-end',
            icon: 'warning',
            title: 'enter a valid name',
            showConfirmButton: false,
            timer: 1500
          })
          
        return false;
     }
     if(!(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gi).test(email.value)){
        Swal.fire({
            position: 'bottom-end',
            icon: 'warning',
            title: 'enter a valid email',
            showConfirmButton: false,
            timer: 1500
          })
        return false;
     }
      if(!(/^[a-zA-Z]/g).test(comentaire.value)){
        Swal.fire({
            position: 'bottom-end',
            icon: 'warning',
            title: 'enter a valid comment',
            showConfirmButton: false,
            timer: 1500
          })
        return false;
     }
     const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
      })
      return true;
    
     }
    
