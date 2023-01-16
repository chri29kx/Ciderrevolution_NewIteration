const toggleButton = document.getElementsByClassName("toggle-menu")[0];
const nav2 = document.getElementById("full_screen_nav");
const mainHeader = document.querySelector("header");
const logo = document.querySelector(".logo");
const html = document.querySelector("html");
const body = document.querySelector("body");
const divMail = document.getElementById("mail_check");
const divTel = document.getElementById("tel_check");
const minusButton = document.querySelector("#minus");
const plusButton = document.querySelector("#plus");
const numberElement = document.querySelector("#number");
const minusButtonShop = document.querySelector("#minusShop");
const plusButtonShop = document.querySelector("#plusShop");
const numberElementShop = document.querySelector("#numberShop");
const topButton = document.getElementById("top-button");
const filtermenu = document.getElementById("filtermenu");
const toggleButton2 = document.getElementById("toggle-filtermenu");
const modal = document.querySelector("#modal");
const closeModal = document.querySelector(".close-button");
const closeModal2 = document.querySelector(".close-button2");
const openModals = document.querySelectorAll(".open-button");
let number = 0;

//tjek at dommen er loaded før script køres
window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  hideLogo();

  //lytter til om viewport ændrer sig og kører funktionen hideLogo hvis den gør
  window.addEventListener("resize", hideLogo);

  //lytter til klik på burger-menu
  toggleButton.addEventListener("click", () => {
    nav2.classList.toggle("open");
    toggleButton.classList.toggle("x");

    hideLogo();
    overflowThing();
  });

  function hideLogo() {
    if (
      nav2.classList.contains("open") ||
      window.matchMedia("(max-width: 600px)").matches
    ) {
      logo.style.display = "none";
    } else {
      logo.style.display = "block";
    }
  }

  function overflowThing() {
    if (nav2.classList.contains("open")) {
      html.style.overflowY = "hidden";
      body.style.overflowY = "hidden";
    } else {
      html.style.overflowY = "auto";
      body.style.overflowY = "auto";
    }
  }

  minusButton.addEventListener("click", () => {
    if (number === 0) {
      return;
    }
    number--;
    numberElement.textContent = number.toString();
  });

  plusButton.addEventListener("click", () => {
    number++;
    numberElement.textContent = number.toString();
  });
});

//Til topppen knap//
// Tilføjer en EventListener til knappen
topButton.addEventListener("click", function () {
  // Når knappen trykkes, skroll til toppen af siden
  window.scrollTo(0, 0);
});

// Mobil knap til kategori drop-down//
// Filternav

// Tilføj en klik-lytter til togglebutton2
toggleButton2.addEventListener("click", function () {
  // Når knappen trykkes, skift "collapsed" klassen på filtermenu
  filtermenu.querySelector("ul").classList.toggle("collapsed");
});

// Hent alle a-tags inde i filtermenu
const aTags = filtermenu.querySelectorAll("a");

// Tilføj en klik-lytter til hver a-tag
aTags.forEach(function (aTag) {
  aTag.addEventListener("click", function () {
    // Når a-tag'et trykkes, skift "collapsed" klassen på ul
    filtermenu.querySelector("ul").classList.toggle("collapsed");
  });
});

// Return to top button
// Først henter vi reference til det element, vi vil arbejde med
const otherStickyElement = document.getElementById("filter");

// Derefter definerer vi en funktion, der tjekker om "#filter" har nået toppen af viewporten
function isOtherStickyElementAtTopOfViewport() {
  // Vi bruger getBoundingClientRect() metoden til at få den aktuelle position og størrelse af "#filter"
  var rect = otherStickyElement.getBoundingClientRect();
  // Vi tjekker om toppen af "#filter" er ved toppen af viewporten
  return rect.top <= 0;
}

// Dernæst definerer vi en funktion der har til formål at enten tilføje eller fjerne en klasse fra vores topButton-element
function addVisibleIfSticky() {
  // Vi bruger en if else statement til at bestemme hvornår topButton skal vises på siden
  if (isOtherStickyElementAtTopOfViewport()) {
    // Hvis "#filter" er i toppen af viewporten tilføjes klassen "visible" til topButton
    topButton.classList.add("visible");
  } else {
    // Hvis "#filter" ikke er i toppen af viewporten fjernes klassen "visible" fra topButton
    topButton.classList.remove("visible");
  }
}

// Til sidst tilføjer vi "addVisibleIfSticky" funktionen til vinduets "scroll" event
window.addEventListener("scroll", addVisibleIfSticky);

//Modal script
//Vi lytter på alle knapper med elementer med klassen .open-button
openModals.forEach((openModal) => {
  //Vi tilføjer en EventListener og ved klik vises vores modal vindue
  openModal.addEventListener("click", () => {
    modal.showModal();
  });
});

//Vi lytter efter klik på knappen med klassen .close-button
closeModal.addEventListener("click", () => {
  //Ved klik lukkes modal vinduet
  modal.close();
});
//Vi lytter efter klik på knappen med klassen .close-button2
closeModal2.addEventListener("click", () => {
  //Ved klik lukkes modal vinduet
  modal.close();
});

minusButtonShop.addEventListener("click", () => {
  if (number === 0) {
    return;
  }
  number--;
  numberElementShop.textContent = number.toString();
});

plusButtonShop.addEventListener("click", () => {
  number++;
  numberElementShop.textContent = number.toString();
});
