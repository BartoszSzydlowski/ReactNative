const pizzas = ['Margherita', 'Marinara', 'Prosciutto e funghi', 'Quattro Stagioni', 'Capricciosa'];

console.log('for')
console.time('for')
for(let i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i])
}
console.timeEnd('for')

console.log('foreach')
console.time('foreach')
pizzas.forEach(el => {
    console.log(el)
})
console.timeEnd('foreach')