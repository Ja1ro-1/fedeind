
// Header winkelwagen

// stap 1 element selecteren uit html
const winkelmandIcon = document.querySelector("header .winkelmand-icon");

// stap 2, controleren of element bestaat
if (winkelmandIcon) {
  //stap 3, laat de button luisteren naar een klik
  winkelmandIcon.addEventListener("click", function (event) {
    event.preventDefault();
    //stap 4: animatie starten
    winkelmandIcon.classList.add("geklikt");
    // stap 5: animatie resetten
    setTimeout(() => {
      winkelmandIcon.classList.remove("geklikt");
    }, 400);
  });
}

// Alle winkelwagen popup icoon
const productCarts = document.querySelectorAll("article .cart-icon");
const popup = document.querySelector(".cart-popup");
const klikGeluid = new Audio("images/happy-logo-167474.mp3"); 

if (productCarts.length > 0 && popup) {
  productCarts.forEach(function (icon) {
    icon.addEventListener("click", function (event) {
      event.preventDefault();

      // Toon popup
      popup.classList.add("show");

      // 🎶 Speel geluid af
      klikGeluid.currentTime = 0;
      klikGeluid.play();

      // Verberg popup na 2s
      setTimeout(() => {
        popup.classList.remove("show");
      }, 2000);
    });
  });
}




// --- Slider (font size) https://stackoverflow.com/questions/18315749/how-to-create-slider-toggle-to-change-font-size-on-screen-with-html-css-js---
const slider = document.getElementById("fontSlider");
const fontValue = document.getElementById("fontValue");

if (slider && fontValue) {
  slider.addEventListener("input", () => {
    const px = slider.value + "px";
    document.documentElement.style.setProperty("--base-font-size", px);
    fontValue.textContent = px; // update de tekst
  });
}



// -- gehele Hamburger Menu bron: Codepen.io, huiswerk opdr + ChatGpt --- 

// stap 1: Alle elementen selecteren die ik later van het menu nodig heb in de code 
document.addEventListener("DOMContentLoaded", () => {
  const openButton = document.querySelector(".menu-open");
  const closeButton = document.querySelector(".menu-close");
  const menuPanel = document.querySelector(".menu-panel");
  const links = document.querySelectorAll("[data-target]");
  const backButtons = document.querySelectorAll(".menu-back");
  const klikGeluid = new Audio("geluid/");

  // Stap 2: laat de menu button luisteren naar kliks
  // tijdens het openen
  openButton.addEventListener("click", () => {
    menuPanel.classList.add("toonMenu");
  });

  // tijdens het Sluiten
  closeButton.addEventListener("click", () => {
    menuPanel.classList.remove("toonMenu");
    resetMenu();
  });
// Sluiten met Escape
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    menuPanel.classList.remove("toonMenu");
    resetMenu(); // zodat het weer naar niveau 1 teruggaat
  }
});

  // Stap 3: 
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Zorgt dat de link niet navigeert naar een andere pagina

      const target = e.currentTarget.getAttribute("data-target"); // Leest welk submenu geopend moet worden
    const current = document.querySelector(".menu-level.actief"); // Huidige actieve menu-niveau
    const next = document.querySelector(`.${target}`); // Het volgende menu dat moet verschijnen

    if (next) {
      current.classList.remove("actief"); // Verberg huidige
      current.classList.add("vorige"); // Markeer als 'vorige' (zodat we kunnen teruggaan)
      next.classList.add("actief"); // Toon het volgende menu
      }
    });
  });

  // Stap 4: terugknoppen laten werken
  backButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const current = document.querySelector(".menu-level.actief"); // huidige menu
      const previous = current.previousElementSibling; // Het vorige menu in de HTML-structuur
  
      if (current && previous && previous.classList.contains("menu-level")) {
        current.classList.remove("actief"); //verberg het huidige
        previous.classList.add("actief"); // toon het vorige
      }
    });
  });

  // Reset bij sluiten
  function resetMenu() {
    document.querySelectorAll(".menu-level").forEach((ul, i) => {
      ul.classList.remove("actief", "vorige"); // Verwijder alle zichtbare staten
      if (i === 0) ul.classList.add("actief"); // Alleen het eerste menu (niveau 1) blijft actief
    });
  }
});



const carrousel = document.querySelector("main > section > ul:first-of-type"); /*// Bron: gebaseerd op standaard JS carrousel scroll indicator logic (MDN + Stack Overflow) */
const indicators = document.querySelectorAll(".carrousel-indicator li");
carrousel.addEventListener("scroll", () => {
  const index = Math.round(carrousel.scrollLeft / carrousel.offsetWidth);
  indicators.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
});

