(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();function n(){return`
    <header class="toolbar">
      <nav class="toolbar-content">
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Contactos</a>
      </nav>
    </header>
  `}function i(){return`
    <section class="landing-container">
      <article class="home-container">
        <div class="card-transparent">
           <h1>Caléndula</h1>
           <h2>
              Distribuidor de productos de peluquería y estética donde ofencemos las principales marcas del sector
              con la mayor calidad y un trato personalizado
            </h2>
          <div class="card-products">           
             <img src="https://1000logos.net/wp-content/uploads/2020/07/MAC-Cosmetics-Logo.jpg" alt="prduct">                     
             <img src="https://logonoid.com/images/academie-logo.jpg" alt="prduct">                     
             <img src="https://1000logos.net/wp-content/uploads/2020/07/MAC-Cosmetics-Logo.jpg" alt="prduct">                     
             <img src="https://1000logos.net/wp-content/uploads/2020/07/MAC-Cosmetics-Logo.jpg" alt="prduct">                     
             <img src="https://1000logos.net/wp-content/uploads/2020/07/MAC-Cosmetics-Logo.jpg" alt="prduct">                     
             <img src="https://1000logos.net/wp-content/uploads/2020/07/MAC-Cosmetics-Logo.jpg" alt="prduct">                             
          </div>
        </div>        
        <div class="center">
          <i class="fas fa-chevron-down" aria-hidden="true"></i>
        </div>
      </article>
    </section>
  `}function a(){return`
    <section>
      <h1>Productos</h1>
      <article>
        
      </article>
    </section>
  `}document.querySelector("#app").innerHTML=n()+i()+a();
