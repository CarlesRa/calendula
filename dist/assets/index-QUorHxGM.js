(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();function c(){return`
    <header class="toolbar">
      <nav class="toolbar-content">
        <a id="startBtn" href="#">Inicio</a>
        <a href="#products">Productos</a>
        <a href="#">Contacto</a>
      </nav>
    </header>
  `}function n(a){a.addEventListener("click",()=>{window.scroll({top:0,behavior:"smooth"})})}function d(){return`
    <section class="landing-container">
      <article class="home-container">
        <div class="card-transparent">
           <h1>Caléndula</h1>
           <h2>
              Distribuidor de productos de peluquería y estética. ofreciéndole las principales marcas del sector
              con la mayor calidad y un trato personalizado
            </h2>
          <div class="card-products">           
            <img src="https://1000logos.net/wp-content/uploads/2020/07/MAC-Cosmetics-Logo.jpg" alt="prduct">                     
            <img src="https://logonoid.com/images/academie-logo.jpg" alt="prduct">                          
          </div>
        </div>        
      </article>        
    </section>
    <div class="chevron">
      <!--<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-chevron-down"
        viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
      </svg>-->
      <i class="bi bi-chevron-compact-down"></i>
    </div>    
  `}function l(){return`
    <section id="products">
      <h1 class="center">Productos</h1>
      <article class="product">
        <div class="center">
          <h2>Por qué elegimos distribuir Mac Cosmetics</h2>
          <div class="product-image-container">
            <img src="https://1000logos.net/wp-content/uploads/2020/07/MAC-Cosmetics-Logo.jpg" alt="Mac Cosmetics">
          </div>
          <h3>Inovación y calidad</h3>
        </div>
        <div class="product-container">
          <p class="product-text">
            MAC Cosmetics es sinónimo de innovación y calidad. Sus productos están formulados para ofrecer resultados 
            profesionales, asegurando una experiencia de maquillaje superior. Desde bases que se adaptan perfectamente 
            a cada tono de piel hasta labiales de larga duración, MAC garantiza excelencia en cada aplicación.
          </p>
        </div>
        <h3 class="center">Diversidad e inclusión</h3>
        <div class="product-container">
          <p class="product-text">
            MAC celebra la diversidad en todas sus formas. Con una amplia gama de tonos y productos, MAC se asegura de 
            que todos puedan encontrar el maquillaje perfecto para su piel y estilo. Esta filosofía inclusiva es algo que 
            valoramos profundamente y queremos compartir con nuestros clientes.
          </p>
        </div>
      </article>
      <article class="product">
        <div class="center">
          <h2>Por qué elegimos distribuir academie</h2>
          <div class="product-image-container">
            <img src="https://logonoid.com/images/academie-logo.jpg" alt="academie">
          </div>
          <h3>Elevando el arte de la cosmética</h3>
        </div>
        <div class="product-container">
          <p class="product-text">
            Con más de cento cincuenta años de experiencia en la industria, Academie se distingue por su compromiso con 
            la innovación y la excelencia. Nuestra marca es sinónimo de productos que no solo embellecen, sino que 
            también nutren y protegen la piel. Cada producto que ofrecemos está respaldado por investigaciones 
            científicas avanzadas y formulaciones desarrolladas por expertos en dermatología y cosmética.
          </p>
        </div>       
      </article>
    </section>
  `}function u(a){const t={root:null,rootMargin:"0px",threshold:.5};new IntersectionObserver((s,e)=>{s.forEach(o=>{o.isIntersecting&&(o.target.classList.add("animate"),e.unobserve(o.target))})},t).observe(a)}function p(){return`
    <i class="bi bi-whatsapp whatsapp-icon"></i>
  `}document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelector("#app");a.innerHTML=`
    ${c()}
    ${d()}
    ${l()}
    ${p()}
  `;const t=document.querySelector("#startBtn");n(t),document.querySelectorAll(".product").forEach(s=>{u(s)})});
