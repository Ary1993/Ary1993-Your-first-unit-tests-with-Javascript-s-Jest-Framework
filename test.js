// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son  1.0950602 dólares, entonces 3.5 euros debe ser (3.5 *  1.0950602)
    const expected = 3.5 *  1.0950602;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.8327107000000002); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 *  1.0950602)
})

test("One dollar should be 156.5 yen", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yen = fromDollarToYen(3.5);

    // Si 1 dolar son 156.5 yenes, entonces 3.5 dolares debe ser (3.5 * 156.5)
    const expected = 3.5 * 144.81133;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3.5)).toBe(506.839655); // 1 dolar son 156.5 yenes, entonces 3.5 dolares deberían ser = (3.5 * 156.5)
})

test("One yen should be 0.87 Pound", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const yen = fromYenToPound(3.5);

    // Si 1 yen son 0.0054161547 pounds, entonces 3.5 yenes debe ser (3.5 * 0.87)
    const expected = 3.5 * 0.0054161547;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(3.5)).toBe(0.01895654145); // 1 yen son 0.87 pounds, entonces 3.5 yenes deberían ser = (3.5 * 0.87)
})