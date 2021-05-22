function contar() {
    var inicio = document.getElementById('cont-inicio')
    var fim = document.getElementById('cont-fim')
    var passo = document.getElementById('cont-passo')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length ==0 || passo.value.length == 0) {
        res.innerHTML = `Impossível contar!`
        //Verifica se o valor é nulo
    } else {
        //Contagem crescente
        res.innerHTML = `Contando.. </br>`
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido. Considerar Passo : 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for (calc = i; calc <= f; calc = calc + p)
            res.innerHTML += ` ${calc} \u{1F449}`
        } else {
            //Contagem decrescente
            for (calc = i; calc >= f; calc = calc - p)
            res.innerHTML += ` ${calc} \u{1F449}`
        }
        res.innerHTML += ` \u{1F3F4}`
    }
}
