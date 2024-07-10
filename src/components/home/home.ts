export function home(): string {
  return `
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
  `
}