// const template = document.createElement('template');
// template.innerHTML = `
//   <style>
//   @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
//     :host {
//       display: block;
//       width: 100%;
//       font-family: "League Spartan", sans-serif;
//     }

//     .footer {
//       background: #111;
//       color: #ccc;
//       padding: 2rem 1rem;
//       text-align: center;
//     }

//     .footer-section {
//       margin-bottom: 2rem;
//     }

//     .footer h5 {
//       text-transform: uppercase;
//       margin-bottom: 1rem;
//       color: white;
//       font-size: 1.1rem;
//     }

//     .footer p,
//     .footer a {
//       font-size: 14px;
//       line-height: 1.8;
//       color: rgba(255, 255, 255, 0.75);
//       text-decoration: none;
//       display: block;
//       margin: 0.5rem 0;
//     }

//     .footer a:hover {
//       color: #74C0FC;
//     }

//     .btn-link i {
//       margin-right: 8px;
//       color: #74C0FC;
//     }

//     .contact-icons {
//       display: flex;
//       justify-content: center;
//       gap: 10px;
//       margin-top: 1rem;
//     }

//     .btn-square {
//       width: 38px;
//       height: 38px;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       background: white;
//       color: #74C0FC;
//       font-size: 16px;
//     }

//     .copyright {
//       background: #222;
//       font-size: 13px;
//       color: #aaa;
//       padding: 1rem;
//       text-align: center;
//     }

//     .copyright a {
//       color: white;
//       font-weight: bold;
//     }

//     .copyright a:hover {
//       color: #74C0FC;
//     }

//     @media (min-width: 768px) {
//       .footer .container {
//         display: flex;
//         flex-wrap: wrap;
//         justify-content: space-around;
//         max-width: 1200px;
//         margin: 0 auto;
//         text-align: left;
//       }

//       .footer-section {
//         flex: 1;
//         min-width: 200px;
//         margin: 0 1rem;
//       }
//     }

//     .copyright {
//     background: #222222;
// }

// .copyright a {
//     color: var(--bs-white);
// }

// .copyright a:hover {
//     color: #74C0FC;
// }

// ."footer-section a i {
//     position: relative;
//     color: #74C0FC;
//     margin-right: 10px;
// }
//   </style>

//   <div class="footer">
//     <div class="container">
//       <div class="footer-section">
//         <h5>CONTACTEZ ANGUS</h5>
//         <p><i class="fa fa-phone-alt"></i> +212 710-621240</p>
//         <div class="contact-icons">
//           <a class="btn-square" href="https://www.instagram.com/crystal_wash_cars?igsh=MWozdGs2ZnUza3pwbg==">
//             <i class="fab fa-instagram"></i>
//           </a>
//           <a class="btn-square" href="https://maps.app.goo.gl/c8MRDTdE1gM2RKD66?g_st=aw">
//             <i class="fas fa-map-marker-alt"></i>
//           </a>
//         </div>
//       </div>

//       <div class="footer-section">
//         <h5>QUICK LINKS</h5>
//         <a class="btn-link" href="#"><i class="fas fa-angle-right"></i> Home</a>
//         <a class="btn-link" href="#"><i class="fas fa-angle-right"></i> About us</a>
//         <a class="btn-link" href="#"><i class="fas fa-angle-right"></i> Our services</a>
//       </div>

//       <div class="footer-section">
//         <h5>HEURES DE TRAVAIL</h5>
//         <p>Vendredi: jour de congé</p>
//         <p>Les autres jours: 09:00 - 23:00</p>
//       </div>
//     </div>

//     <div class="copyright">
//       <div>&copy; <a href="https://github.com/YoussefAitBelfadil">YAB</a>, All Right Reserved.</div>
//       <div>Designed By <a href="https://github.com/YoussefAitBelfadil">YAB</a></div>
//     </div>
//   </div>
// `;

// class AngusFooter extends HTMLElement {
//  constructor() {
//   super();
//   this.attachShadow({ mode: 'open' });
  
//   // Add Font Awesome to shadow DOM
//   const faLink = document.createElement('link');
//   faLink.rel = 'stylesheet';
//   faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
//   this.shadowRoot.appendChild(faLink);
  
//   // Then add your template
//   this.shadowRoot.appendChild(template.content.cloneNode(true));
// }
// }

// customElements.define('angus-footer', AngusFooter);


const template = document.createElement('template');
template.innerHTML = `
  <style>
    @import url("https://fonts.googleapis.com/css?family=IBM%20Plex%20Sans:500|IBM%20Plex%20Sans:300");
    
    :host {
      --m: 4rem;
      display: block;
      font-family: "League Spartan", sans-serif;
      font-weight: 500;
      color: #d5d5d5;
      position: relative;
    }

    * {
      box-sizing: border-box;
      scroll-behavior: smooth;
    }

    h2 {
      font-weight: 500;
      text-align: center;
      font-size: var(--m);
      margin: 0;
    }

    h4 {
      font-weight: 500;
      font-size: calc(0.4 * var(--m));
      margin: 0;
    }

    #footer {
      z-index: 500;
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: flex-end;
      padding: 5rem 2vw;
      position: relative;
    }

    #footer::before {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
        rgba(0, 0, 0, 0) 5%,
        rgba(0, 0, 0, 0.3) 20%,
        rgba(0, 0, 0, 0.6) 30%,
        rgba(0, 0, 0, 0.8) 40%,
        rgba(0, 0, 0, 1) 50%,
        rgb(0, 0, 0)
      );
      z-index: -7;
    }

    .backdrop {
      z-index: -5;
      position: absolute;
      inset: 0;
      backdrop-filter: blur(40px);
      -webkit-backdrop-filter: blur(40px);
      mask-image: linear-gradient(
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.5) 10%,
        rgba(0, 0, 0, 0.8) 20%,
        rgba(0, 0, 0, 1) 30%,
        rgb(0, 0, 0)
      );
      -webkit-mask-image: linear-gradient(
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.5) 10%,
        rgba(0, 0, 0, 0.8) 20%,
        rgba(0, 0, 0, 1) 30%,
        rgb(0, 0, 0)
      );
    }

    .col {
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: calc(0.3 * var(--m)) calc(0.8 * var(--m));
      width: 28%;
    }

    .col2,
    .col3 {
      background-color: #121212;
      border-radius: calc(0.5 * var(--m));
    }

    img {
      height: calc(0.3 * var(--m));
      object-fit: cover;
    }

    .social {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      gap: 1rem;
      margin: 1rem 0;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    .link {
      width: calc(0.8 * var(--m));
      height: calc(0.8 * var(--m));
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: calc(0.1 * var(--m));
      display: flex;
      justify-content: center;
      align-items: center;
      transition: transform 0.2s;
    }

    .link:hover {
      transform: scale(1.1);
    }

    .copyright {
      color: #818181;
      font-size: smaller;
      margin-top: 1rem;
    }

    @media screen and (max-width: 1000px) {
      :host {
        --m: 3rem;
      }
    }

    @media screen and (max-width: 700px) {
      #footer {
        flex-direction: column;
        padding: 5rem 20vw;
      }
      .col {
        width: 100%;
        margin-bottom: 2rem;
      }
      .card {
        width: 80%;
        margin: 2rem auto;
      }
    }
      .lin p {
        transition: all 0.3s ease;
        }

      .lin p:hover {
        color: #74C0FC;
        transition: color 0.3s ease;
        transform: translateX(0.5rem);
      }
      .tel p img{
         transition: all 0.3s infinite;
      }
      .tel p img:hover {
        transform: scale(1.2);
        }  


  </style>

  <footer id="footer">
    <div class="col col1">
      <h4>CRYSTAL WASH CAR</h4>
      <div class="social">
        <a href="https://www.instagram.com/crystal_wash_cars?igsh=MWozdGs2ZnUza3pwbg==" target="_blank" class="link"><img src="images/icons/instagram.png" alt="CodePen"></a>
        <a href="https://maps.app.goo.gl/c8MRDTdE1gM2RKD66?g_st=aw" target="_blank" class="link"><img src="images/icons/cartes-et-drapeaux.png" alt="Twitter"></a> <br/> 
        </div>
        <p class="copyright">2025 © All Rights Reserved</p>
    </div>
    <div class="col col2 lin">
    <p><a href="index.html"> Home</a></p>
    <p><a href="about.html">About Us</a></p>
    <p><a href="index.html#slideSrv">Our services</a></p>
    <p><a href="index.html#brands">Brands</a></p>
    </div>
    <div class="col col3 tel">
      <p>Contac us on : </p>
      <p><a href="tel:+212710621240"><img src="images/icons/telephone.png" alt="CodePen"> +212 710-621240</a></p>
    </div>
    <div class="backdrop"></div>
  </footer>
`;

class ScrollFooterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('scroll-footer', ScrollFooterComponent);