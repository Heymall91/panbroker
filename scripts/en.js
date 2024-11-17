import mainHeaderLang from './items.js';
const en = mainHeaderLang[0];


// header consts

const aHead = document.querySelector(".header__output");
const langText = document.querySelector(".lang__switch__sign");
const burgerMenuHeader = document.querySelector(".burger__menu__list");

// intro consts

const desTitle = document.querySelector(".description__title");

// about us consts

const aboutUs = document.querySelector('.about__us__block');

// requires consts

const requires = document.querySelector(".requires__block__des__text");

// contact form

const contactForm = document.querySelector(".contacts__block__form");

// joinGroup

const joinGroup = document.querySelector(".follow__block h3");
const footer = document.querySelector(".footer__block");


function englishVer() {
  aHead.innerHTML = `
    <ul class="header__list ${en.lang}">
        <li><a href='#about__us'>${en.aboutUs}</a></li>
        <li><a href='#requires'>${en.info}</a></li>
        <li><a href='#contact'>${en.contacts}</a></li>
    </ul>
`;


burgerMenuHeader.innerHTML = `
<li><a href='#about__us'>${en.aboutUs}</a></li>
<li><a href='#requires'>${en.info}</a></li>
<li><a href='#contact'>${en.contacts}</a></li>
`;

  langText.innerHTML = `
  ${en.langChange}
`;

  // aboutUs block EN

  aboutUs.innerHTML = `
  <div class="about__us__block__des first" data-aos="fade-down" data-aos-duration="1250">
                <img src="./img/stocks/wheat-on-the-table-with-golden-coins.jpg" alt="">
                <div class="about__us__block__des__text">
                    <h3>${en.aboutUsBlock.aboutUsHFirst}</h3>
                    <p>${en.aboutUsBlock.aboutUsDesFirst}</p>
                </div>
            </div>
            <div class="about__us__block__des second" data-aos="fade-up" data-aos-duration="1250">
                <div class="about__us__block__des__text">
                    <h3>${en.aboutUsBlock.aboutUsHSecond}</h3>
                    <p>${en.aboutUsBlock.aboutUsDesSecond}</p>
                </div>
                <img src="./img/stocks/handshake.jpg" alt="">
            </div>
            <div class="about__us__block__des" id="about__us__offer" data-aos="fade-left" data-aos-duration="1250">
                   <div class="about__us__block__des__text">
                        <h3 id="center">${en.aboutUsBlock.aboutUsHThird}</h3>
                        <p class="center">${en.aboutUsBlock.aboutUsDesThird}</p>
                        <div id="grains">
                          <div class='grains__list'>
                            <div class='grains__list__item' data-aos="fade-up" data-aos-duration="1250">
                              <img src="${en.aboutUsBlock.aboutUsLiThird.wheat.img}" alt='wheat'>
                              <h4>${en.aboutUsBlock.aboutUsLiThird.wheat.item}</h4>
                            </div>
                            <div class='grains__list__item' data-aos="fade-down" data-aos-duration="1250">
                              <img src="${en.aboutUsBlock.aboutUsLiThird.barley.img}" alt='barley'>
                              <h4>${en.aboutUsBlock.aboutUsLiThird.barley.item}</h4>
                            </div>
                            <div class='grains__list__item' data-aos="fade-up" data-aos-duration="1250">
                              <img src="${en.aboutUsBlock.aboutUsLiThird.sunSeeds.img}" alt='sunseeds'>
                              <h4>${en.aboutUsBlock.aboutUsLiThird.sunSeeds.item}</h4>
                            </div>
                            <div class='grains__list__item' data-aos="fade-down" data-aos-duration="1250">
                              <img src="${en.aboutUsBlock.aboutUsLiThird.corn.img}" alt='corn'>
                              <h4>${en.aboutUsBlock.aboutUsLiThird.corn.item}</h4>
                            </div>
                            <div class='grains__list__item' data-aos="fade-up" data-aos-duration="1250">
                              <img src="${en.aboutUsBlock.aboutUsLiThird.soya.img}" alt='soya'>
                              <h4>${en.aboutUsBlock.aboutUsLiThird.soya.item}</h4>
                            </div>
                            <div class='grains__list__item' data-aos="fade-down" data-aos-duration="1250">
                              <img src="${en.aboutUsBlock.aboutUsLiThird.rapeseed.img}" alt='rapeseed'>
                              <h4>${en.aboutUsBlock.aboutUsLiThird.rapeseed.item}</h4>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            <div class="about__us__block__des second" data-aos="fade-left" data-aos-duration="1250">
                <div class="about__us__block__des__text">
                    <h3>${en.aboutUsBlock.aboutUsHFourth}</h3>
                    <p>${en.aboutUsBlock.aboutUsDesFourth}</p>
                    <div class="about__us__block__des__text__db__list">
                        <div id="ports" data-aos="fade-up" data-aos-duration="1250">
                        ${en.aboutUsBlock.aboutUsLiFourthOne}
                        </div>
                    </div>
                </div>
                <img src="./img/stocks/a-six-wheel-s-euro-truck-near-the-grain-elevator.jpg" alt="">
            </div>
          <h3 class="slogan" data-aos="zoom-in-up" data-aos-duration="1500">${en.slogan}</h3>
`;

  // desTitleEN

  desTitle.innerHTML = `
  <h3 class='right'>
      ${en.businessDes}
  </h3>
`;

  // requiresEN

  requires.innerHTML = `
    <h3>${en.requiresList.ahead}</h3>
    <ol class="requires__block__ol">
        <li class="requires__block__li">
        ${en.requiresList.one}
        </li>
        <li class="requires__block__li">
        ${en.requiresList.two}
        </li>
        <li class="requires__block__li">
        ${en.requiresList.three}
        </li>
        <li class="requires__block__li">
        ${en.requiresList.four}
        </li>
        <li class="requires__block__li">
        ${en.requiresList.five}
        </li>
        <li class="requires__block__li">
        ${en.requiresList.six}
        </li>
        <li class="requires__block__li">
        ${en.requiresList.seven}
        </li>
        <li class="requires__block__li">
        ${en.requiresList.eight}
        </li>
        <li class="requires__block__li">
        ${en.requiresList.nine}
        </li>
        <li class="requires__block__li">
        ${en.requiresList.ten}
        </li>
    </ol>
`;

  // contactFormEN

  contactForm.innerHTML = `
  <h3 id="center">${en.contactForm.ahead}</h3>
  <input type="text" name="userName" id="userName" placeholder="${en.contactForm.name}" pattern="(?=.*[a-z])(?=.*[A-Z]).{5,}" title="Name should contains at least 5 characters without digits" required><br>
  <input type="email" name="userEmail" id="userEmail" placeholder="${en.contactForm.email}"><br>
  <input type="text" name="userCompany" id="userCompany" placeholder="${en.contactForm.companyName}" pattern=".{5,}" title="Company name should contains at least 5 characters without digits" required><br>
  <input type="text" name="userNumber" id="userNumber" placeholder="${en.contactForm.phone}" required><br>
  <div id="alert"></div>
  <button class="contacts__block__form__btn" type="submit">${en.contactForm.send}</button><br>
`;

  // joinGroupEN

  joinGroup.innerHTML = `
  ${en.joinGroup.joinAhead}
`;

  // footerEN
  footer.innerHTML = `
    <div class="footer__info">
      <div class="footer__output">
        <ul class="footer__list">
          <li>
            <a href="#about__us">
              ${en.footer.list.aboutUs}
            </a>
          </li>
          <li>
            <a href="#requires">${en.footer.list.info}</a>
          </li>
        </ul>
      </div>
      <div class="footer__contact">
        <a href="tel:+38096 870 6477">+38 096 870 6477</a>
      </div>
    </div>
    <div class="footer__sign">
      <span>${en.footer.rights.general}</span>
      <a href='https://github.com/Heymall91'>${en.footer.rights.developedBy}</a>
    </div>
`;
}

export default englishVer();