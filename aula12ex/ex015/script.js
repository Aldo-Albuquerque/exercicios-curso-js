function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById("txtano")
    var res = window.document.querySelector("div#res")
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('Erro.. Por favor, verifique os dados e tente novamente.')
    }else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //bebê
                img.setAttribute('src', 'foto-bebe-m.png')
            }else if (idade >= 10 && idade <= 21) {
                //adolescente
                img.setAttribute('src', 'foto-jovem-m.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            }else {
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //bebê
                img.setAttribute('src', 'foto-bebe-f.png')
            }else if (idade >=10 && idade <= 21) {
                //adolescente
                img.setAttribute('src', 'foto-jovem-f.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            }else {
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} com ${idade} anos de idade.</br>`
        res.appendChild(img)
        img.style.borderRadius = '50%'
        img.style.padding = '10px'
    }
}