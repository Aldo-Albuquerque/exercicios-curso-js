var val = [9,4,0,6,8,2]

console.log(val)
console.log(val.length)
/*
for (pos = 0; pos < val.length; pos++) {
    console.log(`O valor da posição ${pos} é ${val[pos]}`)
}
*/
for (var pos in val) { //Exemplo de repetição for/in
    console.log(`O valor da posição ${pos} é ${val[pos]}`)
}