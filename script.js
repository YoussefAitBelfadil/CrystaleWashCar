new Swiper('.services-swiper', {
  loop:true, autoplay:{delay:2500, disableOnInteraction:false},
  slidesPerView:1, spaceBetween:20,
  breakpoints:{640:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:3}}
});
new Swiper('.brands-swiper', {
  loop:true, autoplay:{delay:2000, disableOnInteraction:false},
  slidesPerView:2, spaceBetween:30,
  breakpoints:{640:{slidesPerView:3},768:{slidesPerView:4},1024:{slidesPerView:6}}
});

  document.querySelector(".menu-toggle").onclick = () => {
    document.querySelector(".nav-links").classList.toggle("show");
};


const navbar = document.getElementById('navbar');
const navLinks = document.querySelector('.nav-links');
const toggleBtn = document.querySelector('.menu-toggle');

// 👇 Fonction pour gérer la fermeture du menu en scrollant tout en bas
function handleScroll() {
  if (window.innerWidth <= 768) {
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight) {
      navLinks.classList.remove('show');
    }
  }
}

function positionOffcanvas() {
  if (window.innerWidth <= 768) {
    const navbarHeight = navbar.offsetHeight;
    navLinks.style.top = navbarHeight + 'px';
    navLinks.style.height = `calc(100vh - ${navbarHeight}px)`;
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.style.color = 'black';
    });
    navLinks.style.position = 'absolute';

    // Ajouter le scroll listener UNE SEULE FOIS
    window.removeEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll);
  } else {
    // Réinitialiser les styles sur desktop
    navLinks.style.position = '';
    navLinks.style.top = '';
    navLinks.style.height = '';
    navLinks.classList.remove('show');
    
    window.removeEventListener('scroll', handleScroll);
  }
}
window.addEventListener('resize', positionOffcanvas);
window.addEventListener('load', positionOffcanvas);
document.addEventListener('DOMContentLoaded', positionOffcanvas);



//customElements(MyCard);

class MyCard extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    const style = `
      <style>
        :host {
          display: block;
          max-width: 1000px;
          margin: 0 auto;
          padding: 1rem;
        }

        :root {
          --t: 0.5s;
          --primary-color: #4f46e5;
          --secondary-color: #7c3aed;
          --text-color: #f8fafc;
          --bg-color: #0f172a;
          --card-bg: #1e293b;
          --border-radius: 16px;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "League Spartan", sans-serif;
          font-optical-sizing: auto;
          font-weight: 400;
        }

        .gallery-container {
          position: relative;
          width: 100%;
          min-height: 400px;
          margin: 0 auto;
        }

        section {
          --p: var(--k);
          --abs-p: abs(var(--k) - var(--p));
          --end: clamp(0, var(--abs-p) - 1, 1);
          --dir: calc((1 - 2*var(--end))*sign(var(--k) - var(--p)));
          --fwd: calc(.5*(1 + var(--dir)));
          --v: var(--k);
          --abs-v: abs(var(--v) - var(--p));
          --prg: calc(var(--abs-v)/(1 - var(--end) + var(--end)*(var(--n) - 1)));
          display: grid;
          grid-gap: 1.5em;
          grid-template:
            repeat(2, max-content) 1fr max-content /
            max-content 1fr;
          place-self: center;
          color: var(--text-color);
          font: 1em 'Poppins', sans-serif;
          counter-reset: k calc(1 + var(--k)) n var(--n);
          transition: --p 0s var(--t), --v var(--t);
          position: relative;
          width: 100%;
          height: 100%;
          padding: 0 3rem;
        }

        section::before {
          grid-area: 1 / 2;
          width: 3ch;
          text-align: right;
          content: counter(k) '/' counter(n);
          font-size: 0.9em;
          color: rgba(248, 250, 252, 0.7);
        }

        @supports not (scale: Abs(-2)) {
          section {
            --abs-p: max(var(--k) - var(--p), var(--p) - var(--k));
            --abs-v: max(var(--v) - var(--p), var(--p) - var(--v));
          }
        }

        @supports not (scale: Sign(-2)) {
          section {
            --dir: clamp(-1, (var(--k) - var(--p))*100000, 1);
          }
        }

        article {
          --abs-top: abs(var(--k) - var(--i));
          --not-top: min(1, var(--abs-top));
          --top: calc(1 - var(--not-top));
          --val-mov: ((1 - var(--fwd))*var(--p) + var(--fwd)*var(--k) - var(--i));
          --abs-mov: abs(var(--val-mov));
          --not-mov: min(1, var(--abs-mov));
          --mov: calc(1 - var(--not-mov));
          grid-area: 1 / 1 / -1 / -1;
          grid-template: subgrid / subgrid;
          z-index: mod(calc(var(--n) - 1 + var(--i) - var(--k)), var(--n));
          transition: all var(--t) cubic-bezier(0.68, -0.55, 0.27, 1.55);
          background: var(--card-bg);
          border-radius: var(--border-radius);
          padding: 1.5em;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          opacity: var(--top);
          transform: 
            translateY(calc(var(--not-top) * 20px)) 
            scale(calc(0.9 + var(--top) * 0.1));
          display: flex;
          flex-direction: column;
          position: relative;
        }

        @media (min-width: 768px) {
          article {
            flex-direction: row;
            gap: 2rem;
          }
        }

        @supports not (scale: Abs(-2)) {
          article {
            --abs-top: max(var(--k) - var(--i), var(--i) - var(--k));
            --abs-mov: max(var(--val-mov), -1 * var(--val-mov));
          }
        }

        .card-content {
          flex: 1;
        }

        h2 {
          grid-area: 2 / 2;
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 600;
          margin-bottom: 0.5rem;
          color:black;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        

        .gallery-section {
          width: 100%;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 768px) {
          .gallery-section {
            width: 50%;
            margin-bottom: 0;
          }
        }

        .main-image {
          width: 100%;
          margin-bottom: 1rem;
          border-radius: 20px;
          overflow: hidden;
        }

        .main-image img {
          width: 100%;
          height: auto;
          aspect-ratio: 1;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .main-image video {
          width: 100%;
          height: auto;
          aspect-ratio: 1;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .main-image img:hover {
          transform: scale(1.02);
        }

        .thumbnail-container {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .thumbnail-container img {
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .thumbnail-container img:hover {
          transform: scale(1.05);
          border-color: var(--primary-color);
        }

        .thumbnail-container img.active {
          border-color: var(--primary-color);
          transform: scale(1.1);
          box-shadow: 0 0 10px rgba(79, 70, 229, 0.5);
        }

        .nav-button {
          --prc: calc(var(--hov, 0) * 100%);
          --c: color-mix(in hsl, var(--primary-color) var(--prc), var(--secondary-color));
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgb(from var(--c) r g b / 0.2);
          color: color-mix(in hsl, var(--primary-color) var(--prc), currentcolor);
          font: 900 1.5em/1.5 sans-serif;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          overflow: hidden;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-button.prev {
          left: 0;
        }

        .nav-button.next {
          right: 0;
        }

        .nav-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .nav-button::after {
          content: '';
          width: 12px;
          height: 12px;
          border: solid 2px currentColor;
          border-width: 2px 2px 0 0;
          transition: all 0.3s ease;
        }

        .nav-button.next::after {
          transform: rotate(45deg) translateX(-2px);
        }

        .nav-button.prev::after {
          transform: rotate(-135deg) translateX(-2px);
        }

        .nav-button:hover {
          --hov: 1;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
        }

        .nav-button:hover::before {
          opacity: 1;
        }

        .nav-button:active {
          transform: translateY(-50%) scale(0.95);
        }

        .cat-info {
          grid-area: 3 / 2;
          line-height: 1.6;
          font-size: clamp(0.9rem, 3vw, 1rem);
          color: rgba(0, 0, 0, 0.8);
        }

        /* Slide animation */
        @keyframes slideInFromRight {
          from { transform: translateX(30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideInFromLeft {
          from { transform: translateX(-30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideOutToRight {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(30px); opacity: 0; }
        }

        @keyframes slideOutToLeft {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(-30px); opacity: 0; }
        }

        .slide-in-right {
          animation: slideInFromRight var(--t) ease-out forwards;
        }

        .slide-in-left {
          animation: slideInFromLeft var(--t) ease-out forwards;
        }

        .slide-out-right {
          animation: slideOutToRight var(--t) ease-in forwards;
        }

        .slide-out-left {
          animation: slideOutToLeft var(--t) ease-in forwards;
        }

        /* Responsive adjustments */
        @media (max-width: 767px) {
          section {
            padding: 0 1rem;
          }
          
          .nav-button {
            width: 40px;
            height: 40px;
          }
          
          article {
            padding: 1rem;
          }
          
          .thumbnail-container img {
            width: 50px;
            height: 50px;
          }
        }
      </style>
    `;

    const container = document.createElement('div');
    container.innerHTML = `
      ${style}
      <div class="gallery-container">
        <button class="nav-button prev" aria-label="previous" data-inc="-1"></button>
        <section id="cat-gallery" style="--n: 0; --k: 0;"></section>
        <button class="nav-button next" aria-label="next" data-inc="1"></button>
      </div>
    `;
    shadow.appendChild(container);

    const cats = {
      'Lavage extérieur': {
        name: 'Lavage extérieur',
        images: [
          { src: 'images/slide/v.jpg', alt: 'Lavage extérieur' },
          { src: 'images/slide/vv.jpg', alt: 'Lavage extérieur' },
          { src: 'images/slide/vvv.jpg', alt: 'Lavage extérieur' }
        ],
        info: `Redonnez Son Éclat à Votre Voiture<br>
        Notre lavage extérieur professionnel allie techniques économes en eau et produits écologiques premium pour éliminer en toute sécurité saletés, traces de route et sels tout en protégeant la carrosserie.<br><br>
        <hr><br><strong>Notre Prestation :</strong><br>
        ✅ Prélavage haute pression (élimine les débris)<br>
        ✅ Lavage main au savon pH neutre<br>
        ✅ Nettoyage profond jantes & pneus<br>
        ✅ Séchage en microfibre douce`
      },
      'Détails intérieurs': {
        name: 'Détails intérieurs',
        images: [
          { src: 'images/slide/d.jpg', alt: 'Détails intérieurs' },
          { src: 'images/slide/dd.jpg', alt: 'Détails intérieurs' },
          { src: 'images/slide/ddd.jpg', alt: 'Détails intérieurs' }
        ],
                info: `Rénovation Intérieure Professionnelle<br>
                Redonnez à votre habitacle son éclat d'origine avec notre détail intérieur certifié. Nous nettoyons, assainissons et protégeons chaque centimètre carré avec des produits professionnels écologiques.<br><br>
                <hr><br><strong>Notre Méthode :</strong><br>
                ✅ Nourriture cuir/plastiques pour éviter le craquelage<br>
                ✅ Shampouinage tissus & moquettes avec protection antitaches<br>
                ✅ Nettoyage aérations & interstices (élimine 99% des allergènes)<br>
                ✅ Traitement anti-UV tableau de bord<br><br>`
      },
      'lavage de motos': {
        name: 'lavage de motos',
        images: [
          { src: 'images/slide/gs.jpg', alt: 'Blue-eyed leopard resting' },
          { src: 'images/slide/bok.jpg', alt: 'Leopard in tree' },
          { src: 'images/slide/tmax.jpg', alt: 'Leopard closeup' }
        ],
        info: `Nettoyage Expert pour Votre Moto<br>
      Le lavage moto <strong> Crystal wash car </strong> prend soin de votre bolide comme vous. Nous utilisons des produits doux et pH neutre ainsi que des microfibres ultra-souples pour protéger la peinture, la chaîne et les composants électroniques.<br>
      Idéal pour les passionnés comme pour les utilisateurs quotidiens !<br><br>
      <hr><br>
      ✅ Lavage manuel minutieux<br>
      ✅ Dégraissage chaîne et jantes<br>
      ✅ Économie d’eau garantie`

      },
      'lavage de canapés et matelas': {
        name: 'lavage de canapés et matelas',
        images: [
          { type: 'video',src: 'images/slide/c.mp4', alt: 'lavage de canapés et matelas' },
          { type: 'video',src: 'images/slide/cc.mp4', alt: 'lavage de canapés et matelas' },
          { type: 'video',src: 'images/slide/mm.mp4', alt: 'lavage de canapés et matelas' },
          { type: 'video',src: 'images/slide/m.mp4', alt: 'lavage de canapés et matelas' }
                ],
        info: `Offrez une seconde jeunesse à vos canapés et matelas avec le lavage professionnel d'<strong>Crystal wash car</strong>.<br>
        Grâce à notre nettoyage à vapeur et nos produits écologiques, nous éliminons en profondeur saletés, allergènes et taches sans abîmer les tissus.<br>
        Idéal pour les familles avec enfants, animaux ou allergies<br><br>
        <hr><br>
        ✅ Nettoyage profond pour tous types de tissus<br>
        ✅ Élimination des taches et odeurs<br>
        ✅ Traitement hypoallergénique<br>
        ✅ Séchage rapide`

      }
    };

    const rand = (max, min, prc = 2) => +(min + (max - min) * Math.random()).toFixed(prc);
    const entries = Object.entries(cats);
    const section = shadow.querySelector('#cat-gallery');
    section.style.setProperty('--n', entries.length);

    entries.forEach(([title, data], i) => {
      const article = document.createElement('article');
      article.style.setProperty('--i', i);
      article.style.setProperty('--a', `${rand(15, -15)}deg`);
      
      // Create gallery HTML
      const galleryHTML = `
        <div class="gallery-section animate__animated animate__fadeInUp">
          <div class="gallery-container">
            <div class="main-image">
              ${data.images[0].type === 'video' 
  ? `<video id="displayed-image-${i}" src="${data.images[0].src}" autoplay muted loop playsinline style="width:100%; border-radius:20px;"></video>` 
  : `<img id="displayed-image-${i}" src="${data.images[0].src}" alt="${data.images[0].alt}">`}
            </div>
            <div class="thumbnail-container">
              ${data.images.map((img, idx) => `
                  ${img.type === 'video'
                    ? `<video src="${img.src}" muted loop playsinline
                        onclick="this.getRootNode().host.changeImage(${i}, ${idx}, this)"
                        style="width:60px; height:60px; object-fit:cover; border-radius:8px; cursor:pointer; ${idx === 0 ? 'border:2px solid var(--primary-color);' : ''}">
                      </video>`
                    : `<img src="${img.src}" alt="${img.alt}"
                        onclick="this.getRootNode().host.changeImage(${i}, ${idx}, this)"
                        ${idx === 0 ? 'class="active"' : ''}>`
                }`).join('')}

            </div>
          </div>
        </div>
        <div class="card-content animate__animated animate__fadeInUp animate__delay-1s">
          <h2>${title}</h2>
          <div class="cat-info">${data.info}</div>
        </div>
      `;
      
      article.innerHTML = galleryHTML;
      section.appendChild(article);
    });

    let currentIndex = 0;
    const prevBtn = shadow.querySelector('.prev');
    const nextBtn = shadow.querySelector('.next');
    const articles = shadow.querySelectorAll('article');
    
    // Add changeImage method to the component
    this.changeImage = (cardIndex, imgIndex, element) => {
      const card = articles[cardIndex];
      const mainImg = card.querySelector(`#displayed-image-${cardIndex}`);
      const thumbnails = card.querySelectorAll('.thumbnail-container img');
      
      // Update main image
      mainImg.src = element.src;
      mainImg.alt = element.alt;
      
      // Update active thumbnail
      thumbnails.forEach(thumb => thumb.classList.remove('active'));
      element.classList.add('active');
      
      // Add animation
      mainImg.classList.add('animate__animated', 'animate__fadeIn');
      setTimeout(() => {
        mainImg.classList.remove('animate__animated', 'animate__fadeIn');
      }, 1000);
    };

    const updateGallery = (direction) => {
      // Add exit animation to current card
      const currentCard = articles[currentIndex];
      currentCard.classList.add(direction > 0 ? 'slide-out-left' : 'slide-out-right');
      
      // Update index
      currentIndex = (currentIndex + direction + entries.length) % entries.length;
      section.style.setProperty('--k', currentIndex);
      
      // Add enter animation to new card
      setTimeout(() => {
        const newCard = articles[currentIndex];
        newCard.classList.remove('slide-in-left', 'slide-in-right');
        void newCard.offsetWidth; // Trigger reflow
        newCard.classList.add(direction > 0 ? 'slide-in-right' : 'slide-in-left');
        
        // Remove exit animation from previous card
        currentCard.classList.remove('slide-out-left', 'slide-out-right');
      }, 50);
    };

    prevBtn.addEventListener('click', () => {
      prevBtn.style.transform = 'translateY(-50%) scale(0.9)';
      setTimeout(() => {
        prevBtn.style.transform = 'translateY(-50%) scale(1.1)';
        updateGallery(-1);
      }, 100);
    });

    nextBtn.addEventListener('click', () => {
      nextBtn.style.transform = 'translateY(-50%) scale(0.9)';
      setTimeout(() => {
        nextBtn.style.transform = 'translateY(-50%) scale(1.1)';
        updateGallery(1);
      }, 100);
    });

    // Initialize first card
    articles[0].classList.add('slide-in-right');
  }
}
customElements.define('my-card', MyCard);


//Comparaison 
class ComparisonSlider extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :host {
          display: block;
          background:white;
          padding: 20px;
          font-family: 'Arial', sans-serif;
        }

        .container {
          max-width: 800px;
          margin: auto;
          margin-bottom : 40px;
          text-align: center;
        }

        
        .subtitle {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.1rem;
          margin-bottom: 30px;
        }

        .comparison-slider {
          position: relative;
          width: 100%;
          height: 500px;
          overflow: hidden;
          border-radius: 15px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          cursor: ew-resize;
          user-select: none;
        }

        .image-container, .after-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .after-container {
          width: 50%;
          overflow: hidden;
        }

        .before-image, .after-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .after-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }


        .slider-line {
          position: absolute;
          top: 0;
          left: 50%;
          width: 4px;
          height: 100%;
          background: white;
          transform: translateX(-50%);
          z-index: 10;
          box-shadow: 0 0 10px rgba(0,0,0,0.5);
        }

        .slider-handle {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 50px;
          height: 50px;
          background: white;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          transition: transform 0.2s ease;
        }

        .slider-handle:hover {
          transform: translate(-50%, -50%) scale(1.1);
        }

        .slider-handle::before, .slider-handle::after {
          content: '';
          width: 0;
          height: 0;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
        }

        .slider-handle::before {
          border-left: 8px solid #333;
          margin-right: 2px;
        }

        .slider-handle::after {
          border-right: 8px solid #333;
          margin-left: 2px;
        }

        .label {
          position: absolute;
          top: 20px;
          padding: 8px 16px;
          background: rgba(0,0,0,0.7);
          color: white;
          border-radius: 20px;
          font-size: 14px;
          font-weight: bold;
          backdrop-filter: blur(10px);
        }

        .label-before {
          left: 20px;
        }

        .label-after {
          right: 20px;
        }

        @media (max-width: 768px) {
          .comparison-slider {
            height: 300px;
          }

          

          .slider-handle {
            width: 40px;
            height: 40px;
          }
        }
      </style>
      <div class="container">
        <p class="subtitle">Drag the slider to see the amazing transformation</p>
        <div class="comparison-slider" id="comparisonSlider">

          <div class="image-container">
            <img src="images/w.jpg" class="before-image">
            <div class="label label-before">Dirty</div>
          </div>

          <div class="after-container" id="afterContainer">
            <img src="images/ww.jpg" class="after-image">
            <div class="label label-after">Clean</div>
          </div>

          <div class="slider-line" id="sliderLine">
            <div class="slider-handle" id="sliderHandle"></div>
          </div>
        </div>
      </div>
    `;

    const afterContainer = shadow.getElementById('afterContainer');
    const sliderLine = shadow.getElementById('sliderLine');
    const sliderHandle = shadow.getElementById('sliderHandle');
    const container = shadow.getElementById('comparisonSlider');

    let isDragging = false;
    let currentPosition = 50;

    const updateSliderPosition = (clientX) => {
      const rect = container.getBoundingClientRect();
      let position = ((clientX - rect.left) / rect.width) * 100;
      position = Math.max(0, Math.min(100, position));
      currentPosition = position;
      afterContainer.style.width = position + '%';
      sliderLine.style.left = position + '%';
    };

    const startDrag = (e) => {
      isDragging = true;
      e.preventDefault();
    };

    const stopDrag = () => {
      isDragging = false;
    };

    const onDrag = (e) => {
      if (!isDragging) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      updateSliderPosition(clientX);
    };

    sliderHandle.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', stopDrag);

    sliderHandle.addEventListener('touchstart', startDrag);
    document.addEventListener('touchmove', onDrag);
    document.addEventListener('touchend', stopDrag);

    container.addEventListener('click', (e) => {
      if (isDragging) return;
      updateSliderPosition(e.clientX);
    });

    shadow.host.style.opacity = '0';
    shadow.host.style.transform = 'translateY(20px)';
    setTimeout(() => {
      shadow.host.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      shadow.host.style.opacity = '1';
      shadow.host.style.transform = 'translateY(0)';
    }, 100);
  }
}
customElements.define('comparison-slider', ComparisonSlider);


