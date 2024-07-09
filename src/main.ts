import './style.css'
import { toolbar } from './components/toolbar/toolbar';
import { home } from './components/home/home.ts';
import { products } from './components/prducts/products.ts';

const app: HTMLDivElement = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  ${toolbar()}
  ${home()}
  ${products()}
`;
