//Exemplo de função com Recursividade
function fatorial(n/*<-parâmetro(s)*/) { 
    if (n == 1) {
        return/*<-ação*/ 1/*<-retorno*/
    } else {
        return/*<-ação*/ n * fatorial(n-1)/*<-retorno*/
    }
} console.log(fatorial(4)) /*<-chamada*/

/*
5! = 5 x 4 x 3 x 2 x 1 = 120
5! = 5 x 4!

n! = n x (n-1)!

1! = 1 
*/