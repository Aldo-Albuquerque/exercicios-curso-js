let sujeito = {nome: 'Junior', sexo: 'M', peso: 65, engordar(p = 0){ 
    console.log('Engordou')
    this.peso += p
}}

sujeito.engordar(10)
console.log(`O peso do ${sujeito.nome} é ${sujeito.peso}`)

//Exemplo de objeto em JavaScript

