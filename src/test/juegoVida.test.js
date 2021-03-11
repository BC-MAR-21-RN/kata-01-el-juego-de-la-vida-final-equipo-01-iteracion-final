const JuegoVida = require('../app/juegoVida')

const testJuegoVida = new JuegoVida(4,4)
const resultJuegoVida = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
const resultInitialLife = [
    [expect.any(Number),expect.any(Number),expect.any(Number),expect.any(Number)],
    [expect.any(Number),expect.any(Number),expect.any(Number),expect.any(Number)],
    [expect.any(Number),expect.any(Number),expect.any(Number),expect.any(Number)],
    [expect.any(Number),expect.any(Number),expect.any(Number),expect.any(Number)]
]
const max = 4;

test('Generar grid completo: 4 x 4', ()=>{
    expect(testJuegoVida.createGrid()).toEqual(expect.arrayContaining(resultJuegoVida))
})

test('Generar nuevo grid con primera generación: 4 x 4', () => {
    expect(testJuegoVida.createInitialLife(testJuegoVida.grid)).toEqual(expect.arrayContaining(resultInitialLife))
})

test('Comprobar celdas válidas del grid', () => {
    expect(testJuegoVida.validateCell(0,0,testJuegoVida.grid)).toBeLessThan(2);
})

test(`Generar número aleatorio para la celda que contendrá una 
célula viva dependiendo el número máximo indicado`, () => {
    expect(testJuegoVida.getRandomCell(max)).toBeLessThan(max);
})

test(`Generar grid con la generación siguiente 4 x 4`, () => {
    expect(testJuegoVida.rulesAnalizer(resultInitialLife))
    .toEqual(expect.arrayContaining(resultInitialLife))
})

test('Si la celula vive, pero tiene menos de 2 o mas de 3 celulas vecinas, muere.', () => {
    expect(testJuegoVida.applyRules(1,1)).toBe(0)
})

test('Si la celula vive y tiene 2 o 3 celulas vecinas, se mantiene.', () => {
    expect(testJuegoVida.applyRules(2,1)).toBe(1)
})

test('Si la celula esta muerta y tiene 3 celulas vecinas vivas, revive.', () => {
    expect(testJuegoVida.applyRules(3,0)).toBe(1)
})