test('las cadenas y boolean no son del mismo tipo', () =>{
  expect('a' === true).toBeFalsy();
})
test('los números y boolean no son del mismo tipo', () =>{
  expect(1 === true).toBeFalsy();
})

test('No es igual', () =>{
  expect(1).not.toBe(2);
})

describe('matchers', () => {
  test('many matchers pass', () => {
    expect(3).toBe(3); // Son iguales y del mismo tipo

    expect(null).toBeNull(); // es nulo
    expect(null).toBeDefined(); // Resulta que el nulo está definido
    expect(undefined).toBeUndefined(); // Una variable no está definida
    expect(true).toBeTruthy(); // Es cierto
    expect(1).toBeTruthy();  // Característica del lenguaje Javascript el 1 es true y el cero es false
    expect('a').toBeTruthy();// Característica del lenguaje Javascript las cadenas con contenido son true
    expect('').toBeFalsy();
    expect(false).toBeFalsy();
    expect(0).toBeFalsy();

    expect(3).toBeGreaterThan(1); // Mayor
    expect(1).toBeLessThanOrEqual(3); // igual o menor
    expect(NaN).toBeNaN();

    // Operamos con arrays
    expect([1, 2]).toContain(1);  
    expect([1, 2]).toContainEqual(1); // contiene un 1, con la misma estructura. Creo que aquí no tiene sentido

    expect(1).toBe(1);
    expect(1).toEqual(1);

    // Operamois con matrices
    expect({}).toEqual({}); // dos matrices vacías contienen lo mismo
    expect({}).not.toBe({}); // dos matrices vacías no son estrictamente iguales
    expect({ a: '1' }).toEqual({ a: '1' }); // Tienen el mismo contenido
    expect({ a: '1', b: undefined }).toEqual({ a: '1' });
    expect({ a: '1', b: undefined }).not.toStrictEqual({ a: '1' });

    expect({ a: '1' }).toHaveProperty('a');
    expect({ a: '1' }).toHaveProperty('a', '1');

    expect(() => {
      throw new Error('fail');
    }).toThrow(new EvalError('fail'));
    expect(() => {
      throw new Error('fail');
    }).toThrowError(new Error('fail'));
    expect(() => {
      throw new Error('fail');
    }).not.toThrowError(new Error());

    expect(1).toEqual(expect.anything());
    expect(1).toEqual(expect.any(Number));
    expect(1).not.toEqual(expect.any(String));

    expect([1, 2, 3]).toEqual(expect.arrayContaining([1, 2]));
    expect('patata').toEqual(expect.stringContaining('tata'));
  });
});
