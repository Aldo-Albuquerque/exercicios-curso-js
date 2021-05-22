var num = [5,2,9,3,0]
num.push(8)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O valor da terceira posição é ${num[2]}`)
var pos = num.indexOf(7) //.indexOf() busca um valor específico dentro de um vetor
if (pos == -1) {
    console.log(`Desculpe. Valor não encontrado. :(`)
} else {
    console.log(`O valor está na posição: ${pos}`)
}
