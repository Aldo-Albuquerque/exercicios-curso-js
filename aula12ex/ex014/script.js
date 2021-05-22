function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 12) {
        msg.innerHTML += ` Um bom dia pra você! `
        img.src = "foto-manha.png"
        document.body.style.background = "#75CEDA"
    }else if (hora > 12 && hora < 18) {
        msg.innerHTML += ` Boa tarde pra você! `
        img.src = "foto-tarde.png"
        document.body.style.background = "#EE7A28"
    }else {
        msg.innerHTML += ` Boa noite pra você! `
        img.src = "foto-noite.png"
        document.body.style.background = "rgb(90, 88, 88)"
    }
}

