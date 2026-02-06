// suma.test.js

// Esto describe un bloque de pruebas. Es solo para organizar y leer mejor el reporte.
describe('Pruebas generales del sistema', () => {

  // 'test' define una prueba individual. 
  // El primer argumento es el nombre de la prueba, el segundo es la función con la lógica.
  test('Comprobación de sanidad (1 + 1 es 2)', () => {
    
    // 'expect' es la afirmación. Si 1 + 1 no es 2, esto lanzará un error y GitHub Actions marcará rojo.
    expect(1 + 1).toBe(2); 
    
  });
});
