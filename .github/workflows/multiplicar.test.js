const multiplicar = require('./multiplicar');

test('multiplicar 3 x 3 es igual a 9', () => {
  expect(multiplicar(3, 3)).toBe(9);
});

// Prueba que fallaría si el código estuviera mal
test('multiplicar 5 x 0 es igual a 0', () => {
  expect(multiplicar(5, 0)).toBe(0);
});
