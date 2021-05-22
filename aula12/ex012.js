var agora = new Date() //exemplo de condicional aninhada
var hora = agora.getHours()
console.log(`Agora são ${hora} hora(s).`)
if (hora >= 5 && hora < 13) {
    console.log(`Bom dia!`)
} else if (hora >= 13 && hora < 18) {
    console.log(`Boa Tarde!`)
} else if (hora >= 18 && hora < 24 ) {
    console.log(`Boa Noite!`)
} else if (hora >= 0 && hora < 5) {
    console.log(`Boa madrugada!`)
}