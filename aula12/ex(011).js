/*var idade = 19 //exemplo de condição aninhada
console.log(`Você tem ${idade} anos`)
if (idade < 16 || idade >= 65) {
    console.log("Não vota")
} else if (idade >= 18) {
    console.log("Voto obrigatório")
}
*/

var discos = 300 //exemplo de condição aninhada
console.log(`Você tem ${discos} discos.`)
if (discos >= 30 && discos <= 150) {
    console.log(`Ok. Você é um colecionados de discos.`)
} else if (discos > 150) {
    console.log(`Nossa. Você é um colecionador compulsivo.`)
} else if (discos < 30) {
    console.log(`Você ainda não possui ama vasta coleção.`)
}