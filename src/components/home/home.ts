export function home(): string {
  return `
    <section class="landing-container">
      <article class="home-container">
        <div class="card-transparent">
           <h1>Caléndula</h1>
           <h2>
              Distribuidor de productos de peluquería y estética. Ofrecemos las principales marcas del sector
              con la mayor calidad y un asesoramiento personalizado
            </h2>
          <div class="card-products">           
            <img src="https://1000logos.net/wp-content/uploads/2020/07/MAC-Cosmetics-Logo.jpg" alt="prduct">                     
            <img src="https://logonoid.com/images/academie-logo.jpg" alt="prduct">
            <img src="https://logonoid.com/images/academie-logo.jpg" alt="prduct">                     
            <img src="https://1000logos.net/wp-content/uploads/2020/07/MAC-Cosmetics-Logo.jpg" alt="prduct">                     
          </div>
        </div>        
      </article>        
    </section>
    <div class="chevron">
      <i class="bi bi-chevron-compact-down"></i>
    </div>    
  `
}