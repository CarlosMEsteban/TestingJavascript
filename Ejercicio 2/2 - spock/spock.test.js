const spock = require('./spock');

test('Sin parámetros', () => {
    expect(spock()).toBe('NOT FIXED!');
  }); 

  test('Parámetros no esperados', () => {
    expect(spock('we', '')).toBe('NOT FIXED!');
  }); 

test('papel gana a piedra', () => {
    expect(spock('piedra', 'piedra')).toBe('piedra');
  }); 

test('papel gana a piedra', () => {
    expect(spock('papel', 'piedra')).toBe('papel');
  });

  test('papel gana a piedra al revés', () => {
    expect(spock('piedra', 'papel')).toBe('papel');
  });  

  test('tijera gana a papel', () => {
	expect(spock('tijera', 'papel')).toBe('tijera');
  });  

  test('lagarto gana a spock', () => {
	expect(spock('lagarto', 'spock')).toBe('lagarto');
  });  

  test('spock gana a tijera', () => {
	expect(spock('spock', 'tijera')).toBe('spock');
  });  
