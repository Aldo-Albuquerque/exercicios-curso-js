let num = document.getElementById('number-intro')
let dis = document.getElementById('sel-display')
let res = document.getElementById('res')
let valores = []

function trueNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (trueNumber(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado`
        dis.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista :(')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores == 0) {
        window.alert('Por favor, adicione números, para então finalizar :)')
    } else {
        let total = valores.length
        let major = valores[0]
        let minor = valores[0]
        let soma = 0
        let media = 0
        for (let next in valores) {
            soma += valores[next]
            if (valores[next] > major)
                major = valores[next]
            if (valores[next] < minor)
                minor = valores[next]
        }
        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p> No total, temos ${total} números adicionados!</p>`
        res.innerHTML += `<p> O maior número é ${major}.</p>`
        res.innerHTML += `<p> O menor número é ${minor}.</p>`
        res.innerHTML += `<p> A soma dos números adicionados é ${soma}.</p>`
        res.innerHTML += `<p> A média dos números adicionados é ${media}</p>`
    }
}