import mainHeaderLang from "./items.js";
const ua = mainHeaderLang[1];

// header consts

const aHead = document.querySelector(".header__output");
const langText = document.querySelector(".lang__switch__sign");
const burgerMenuHeader = document.querySelector(".burger__menu__list");

// intro consts

const desTitle = document.querySelector(".description__title");

// about us consts

const aboutUs = document.querySelector(".about__us__block");

// requires consts

const requires = document.querySelector(".requires__block__des__text");

// contact form

const contactForm = document.querySelector(".contacts__block__form");

// joinGroup

const joinGroup = document.querySelector(".follow__block h3");
const footer = document.querySelector(".footer__block");

function ukrVersion() {
  aHead.innerHTML = `
        <ul class="header__list ${ua.lang}">
            <li><a href='#about__us'>${ua.aboutUs}</a></li>
            <li><a href='#requires'>${ua.info}</a></li>
            <li><a href='#contact'>${ua.contacts}</a></li>
        </ul>
    `;

  langText.innerHTML = `
      ${ua.langChange}
    `;

  // aboutUs block UA

  aboutUs.innerHTML = `
      <div class="about__us__block__des" data-aos="fade-down" data-aos-duration="1250">
                    <img src="./img/stocks/wheat-on-the-table-with-golden-coins.jpg" alt="">
                    <div class="about__us__block__des__text">
                        <h3>${ua.aboutUsBlock.aboutUsHFirst}</h3>
                        <p>${ua.aboutUsBlock.aboutUsDesFirst}</p>
                    </div>
                </div>
                <div class="about__us__block__des second" data-aos="fade-up" data-aos-duration="1250">
                    <div class="about__us__block__des__text">
                        <h3>${ua.aboutUsBlock.aboutUsHSecond}</h3>
                        <p>${ua.aboutUsBlock.aboutUsDesSecond}</p>
                    </div>
                    <img src="./img/stocks/handshake.jpg" alt="">
                </div>
                <div class="about__us__block__des" data-aos="fade-left" data-aos-duration="1250">
                    <img src="./img/stocks/wheat-graines--corn-graines--soy--canola--barley-o.jpg" alt="">
                    <div class="about__us__block__des__text">
                        <h3 id="center">${ua.aboutUsBlock.aboutUsHThird}</h3>
                        <p class="center">${ua.aboutUsBlock.aboutUsDesThird}</p>
                        <ul id="grains">
                        ${ua.aboutUsBlock.aboutUsLiThird}
                        </ul>
                    </div>
                </div>
                <div class="about__us__block__des second" data-aos="fade-right" data-aos-duration="1250">
                    <div class="about__us__block__des__text">
                        <h3>${ua.aboutUsBlock.aboutUsHFourth}</h3>
                        <p>${ua.aboutUsBlock.aboutUsDesFourth}</p>
                        <div class="about__us__block__des__text__db__list">
                            <div id="ports" data-aos="fade-up" data-aos-duration="1250">
                            ${ua.aboutUsBlock.aboutUsLiFourthOne}
                            </div>
                            <div id="customs" data-aos="fade-down" data-aos-duration="1250">
                            ${ua.aboutUsBlock.aboutUsLiFourthTwo}
                            </div>
                        </div>
                    </div>
                    <img src="./img/stocks/a-six-wheel-s-euro-truck-near-the-grain-elevator.jpg" alt="">
                </div>
                <h3 class="slogan" data-aos="zoom-in-up" data-aos-duration="1500">${ua.slogan}</h3>
    `;

  burgerMenuHeader.innerHTML = `
    <li><a href='#about__us'>${ua.aboutUs}</a></li>
    <li><a href='#requires'>${ua.info}</a></li>
    <li><a href='#contact'>${ua.contacts}</a></li>
    `;

  // desTitleUA

  desTitle.innerHTML = `
     <h3 class='right'>
         ${ua.businessDes}
     </h3>
   `;

  // requiresUA

  requires.innerHTML = `
        <h3>${ua.requiresList.ahead}</h3>
        <ol class="requires__block__ol">
            <li class="requires__block__li" data-aos="fade-left">
            ${ua.requiresList.one}
            </li>
            <li class="requires__block__li" data-aos="fade-left">
            ${ua.requiresList.two}
            </li>
            <li class="requires__block__li" data-aos="fade-left">
            ${ua.requiresList.three}
            </li>
            <li class="requires__block__li" data-aos="fade-left">
            ${ua.requiresList.four}
            </li>
            <li class="requires__block__li" data-aos="fade-left">
            ${ua.requiresList.five}
            </li>
            <li class="requires__block__li" data-aos="fade-left">
            ${ua.requiresList.six}
            </li>
            <li class="requires__block__li" data-aos="fade-left">
            ${ua.requiresList.seven}
            </li>
            <li class="requires__block__li" data-aos="fade-left">
            ${ua.requiresList.eight}
            </li>
            <li class="requires__block__li" data-aos="fade-left">
            ${ua.requiresList.nine}
            </li>
            <li class="requires__block__li" data-aos="fade-left">
            ${ua.requiresList.ten}
            </li>
        </ol>
    `;

  // contactFormUA

  contactForm.innerHTML = `
      <h3 id="center">${ua.contactForm.ahead}</h3>
      <input type="text" name="userName" id="userName" placeholder="${ua.contactForm.name}" pattern="(?=.*[а-я])(?=.*[А-Я]).{5,}" title="Ім'я має складатися з літер, від 5-ти символів, без цифр" required><br>
      <input type="email" name="userEmail" id="userEmail" placeholder="${ua.contactForm.email}"><br>
      <input type="text" name="userCompany" id="userCompany" placeholder="${ua.contactForm.companyName}" pattern=".{5,}" title="Назва фірми має складатися з літер, без цифр" required><br>
      <input type="text" name="userNumber" id="userNumber" placeholder="${ua.contactForm.phone}" required><br>
      <div id="alert"></div>
      <button class="contacts__block__form__btn" type="submit">${ua.contactForm.send}</button><br>
    `;

  // joinGroupUA

  joinGroup.innerHTML = `
      ${ua.joinGroup.joinAhead}
    `;

  // footerUA

  footer.innerHTML = `
        <div class="footer__info">
          <div class="footer__output">
            <ul class="footer__list">
              <li>
                <a href="#about__us">
                  ${ua.footer.list.aboutUs}
                </a>
              </li>
              <li>
                <a href="#requires">${ua.footer.list.info}</a>
              </li>
            </ul>
          </div>
          <div class="footer__contact">
            <a href="tel:+38096 870 6477">+38 096 870 6477</a>
          </div>
        </div>
        <div class="footer__sign">
          <span>${ua.footer.rights.general}</span>
          <a href='https://github.com/Heymall91'>${ua.footer.rights.developedBy}</a>
        </div>
    `;
}

export default ukrVersion();
