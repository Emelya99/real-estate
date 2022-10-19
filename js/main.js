const body = document.body;
const openPopup = document.getElementById('open-popup');
const closePopup = document.getElementById('close-popup');
const closePopupMenuLink = document.getElementById('close-popup-menu-link')
const popup = document.getElementById('popup');
const mybutton = document.getElementById("toTop");

// Popup
openPopup.addEventListener('click', function(e){
    e.preventDefault();
    popup.classList.add('active');
    body.classList.add('disabled');
})

closePopup.addEventListener('click', () => {
    popup.classList.remove('active');
    body.classList.remove('disabled');
})

closePopupMenuLink.addEventListener('click', () => {
    popup.classList.remove('active');
    body.classList.remove('disabled');
})



// toTop
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}