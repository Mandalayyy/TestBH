import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper';
import './style.css'


document.addEventListener("DOMContentLoaded", function () {
  let dropdownSelect = document.querySelectorAll(".form_select li");
  let selectedCountry = document.getElementById("selected_country")


  dropdownSelect.forEach(function (link) {
      link.addEventListener("click", function (event) {
          event.preventDefault();
          var selectedText = link.textContent;
          selectedCountry.textContent = selectedText;
      });
  });
});


const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
  slidesPerView: 3,
  
  pagination:{
    el: '.swiper-pagination',
    
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  });

 const swiper2 = new Swiper ('.swiperTwo', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  
  pagination:{
    el: '.swiper-paginationTwo',
    clickable: true,
    
  }
 })
