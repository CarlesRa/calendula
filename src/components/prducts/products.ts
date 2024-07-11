export function products(): string {
  return `
    <section id="products">
      <h1 class="center" aria-label="productos">Productos</h1>
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
  `
}

export function setProductAnimation(product: HTMLElement) {
  const options: any = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  const observer: IntersectionObserver = new IntersectionObserver(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, options);
  observer.observe(product);
}
