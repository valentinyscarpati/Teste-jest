const calculadora = require("./calculadora");

test('vou testar a soma', ()=>{
    expect (calculadora('+', [1,2,3])).toBe(6)
})

test('vou testar a subitração', ()=>{
    expect (calculadora('-', [9,8])).toBe(-17)
})
test('vou testar a multiplicação', ()=>{
    expect (calculadora('*', [3,6])).toBe(18)
})