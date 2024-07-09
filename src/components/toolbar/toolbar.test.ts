import { expect, test } from 'vitest';
import { toolbar } from './toolbar';

test('Return the toolbar', () => {
  expect(toolbar()).equal(`
    <header class="toolbar">
      <nav class="toolbar-content">
        <a href="#">Inicio</a>
        <a href="#products">Productos</a>
        <a href="#">Contacto</a>
      </nav>
    </header>
  `)
})