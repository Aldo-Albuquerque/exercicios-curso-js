function fatorial(n/*<-parâmetro(s)*/) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat = fat * c
    }
    return/*<-ação*/ fat/*<-retorno*/
}

console.log(fatorial(5))/*<-chamada*/

//5! = 5 x 4 x 3 x 2 x 1 = 120