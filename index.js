var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let imag1 =document.getElementById('image1');
let imag2 =document.getElementById('image2');
let imag3 =document.getElementById('image3');
let image4=document.getElementById("imageprin") ;

  imag1.addEventListener("click",function(){
    if( image4.src == 'file:///C:/Users/Youcode/Desktop/BRIEF--4/images/detail/sofa%20princip.png'){
    image4.src = 'images/detail/sofa2.png'
   imag1.src ='images/detail/ptitprin.png' ;

    }
    else{
      image4.src='images/detail/sofa princip.png';
      imag1.src='images/detail/sofa 2.png'
    
    }
  });
  imag2.addEventListener("click",function(){
    if( image4.src == 'file:///C:/Users/Youcode/Desktop/BRIEF--4/images/detail/sofa%20princip.png'){
      image4.src = 'images/detail/sofa1.png'
     imag2.src ='images/detail/ptitprin.png' ;

      }
      else{
        image4.src='images/detail/sofa princip.png';
        imag2.src='images/detail/sofa 3.png'
      
      }
  
  });
  imag3.addEventListener("click",function(){
    if( image4.src == 'file:///C:/Users/Youcode/Desktop/BRIEF--4/images/detail/sofa%20princip.png'){
      image4.src = 'images/detail/sofa3.png'
     imag3.src ='images/detail/ptitprin.png' ;

      }
      else{
        image4.src='images/detail/sofa princip.png';
        imag3.src='images/detail/sofa 4.png'
      
      }
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
