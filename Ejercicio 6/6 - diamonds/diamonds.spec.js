async function mineAsync(s) {
  const promises = [];

  while (s.includes('<>')) {
    s = s.replace('<>', '');
    promises.push( // Crea una promesa para cada diamante encontrado
      new Promise((resolve) => { 
        setTimeout(() => { // Retardo
          resolve(1);
        }, 100); // 100 ms
      })
    );
  }

  return (await Promise.all(promises)).length; // Esperamos que todas las promesas se resuelvan y devolvemos cuántas habíamos lanzado
}

test('diamantes ASÍNCRONOS', async () => {
  await expect(mineAsync('')).resolves.toBe(0);
  await expect(mineAsync('<>')).resolves.toEqual(1);
  await expect(mineAsync('<<>>')).resolves.toEqual(2);
  await expect(mineAsync('<><<>><<')).resolves.toEqual(3);

});





function mine(s)
{
  let diamonds = 0;

  while (s.includes("<>"))
  {
    s = s.replace("<>", "");
    diamonds++;
  }
  return diamonds
}


  
test('diamantes síncronos', async () => {
  expect(mine('')).toBe(0);
  expect(mine('<>')).toEqual(1);
  expect(mine('<<>>')).toEqual(2);
  expect(mine('<><<>><<')).toEqual(3);

});
