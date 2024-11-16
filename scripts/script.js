
// header consts

const langToggle = document.querySelector(".lang__switch__toggle");


// burger menu 


const burgerMenu = document.querySelector('.header__burger__menu');
const burgerItem = document.querySelector('.burger__menu');
const burgerBlock = document.querySelector('.header__burger__menu__block');


burgerMenu.onclick = function (){
    burgerMenu.classList.toggle('active');
    burgerItem.classList.toggle('active');
    burgerBlock.classList.toggle('active');
};



// imask settings

const element = document.getElementById("userNumber");
const maskOptions = {
  mask: "+{38}(000)000-00-00",
};
const mask = IMask(element, maskOptions);


// verification form


const userName = document.querySelector("#userName");
const userCompany = document.querySelector("#userCompany");
const errorOutput = document.querySelector("#alert");

const indexLang = document.querySelector('html');
const langValue = indexLang.getAttribute('lang');

const userForm = document.querySelector(".contacts__block__form");

userForm.addEventListener("click", (e) => {
  let errors = [];

  if (langValue == 'ua' && userName.value.length && userCompany.value.length <= 3) {
    errors.push("*Ім'я або назва фірми є закороткими");
  }

  if(langValue == "en" && userName.value.length && userCompany.value.length <= 3){
    errors.push("*Incorrect or shortly name");
  }


  if (errors.length > 0) {
    e.preventDefault();
    errorOutput.textContent = errors.join(", ");
  } 
  
  else {
    errorOutput.textContent = "";
  }
  
});


// scrollTop




const scrollTop = function () {
  // create HTML button element
  const scrollBtn = document.createElement("button");
  scrollBtn.innerHTML = "&uarr;";
  scrollBtn.setAttribute("id", "scroll-btn");
  document.body.appendChild(scrollBtn);
  // hide/show button based on scroll distance
  const scrollBtnDisplay = function () {
    window.scrollY > window.innerHeight
      ? scrollBtn.classList.add("show")
      : scrollBtn.classList.remove("show");
  };
  window.addEventListener("scroll", scrollBtnDisplay);
  // scroll to top when button clicked
  const scrollWindow = function () {
    if (window.scrollY != 0) {
      setTimeout(function () {
        window.scrollTo(0, window.scrollY - 5000);
        scrollWindow();
      }, 10);
    }
  };
  scrollBtn.addEventListener("click", scrollWindow);
};
scrollTop();
