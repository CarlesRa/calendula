export function toolbar(): string {
  return `
    <header class="toolbar">
      <nav class="toolbar-content">
        <a id="startBtn" href="#">Inicio</a>
        <a href="#products">Productos</a>
        <a href="#">Contacto</a>
      </nav>
    </header>
  `
}

export function setGoToHomeListener(element: HTMLAnchorElement): void {
  element.addEventListener('click', () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  })
}