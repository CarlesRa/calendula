import { expect, test } from 'vitest';
import { home } from './home';

test('Return the home section', () => {
  expect(home()).contain('<h1>Caléndula</h1>');
});