import './style.css'
import { toolbar, setGoToHomeListener } from './components/toolbar/toolbar.ts';
import { home } from './components/home/home.ts';
import { products, setProductAnimation } from './components/prducts/products.ts';
import { floatingButton } from './components/floating-button/floating-button.ts';

document.addEventListener('DOMContentLoaded', () => {

  const app: HTMLDivElement = document.querySelector<HTMLDivElement>('#app')!;
  app.innerHTML = `
    ${ toolbar() }
    ${ home() }
    ${ products() }
    ${ floatingButton() }
  `;

  const startBtn: HTMLAnchorElement = document.querySelector<HTMLAnchorElement>('#startBtn')!
  setGoToHomeListener(startBtn);

  const productsSection = document.querySelectorAll<any>('.product');
  productsSection.forEach(product => {
    setProductAnimation(product)
  });
});

