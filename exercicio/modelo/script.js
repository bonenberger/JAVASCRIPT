function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('o ano não pode ser vazio')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')//adiciona uma tag H1, p, section, etc
        img.setAttribute('id', 'foto')//adiciona um atributo class id name etc
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade <12) {
                //criança
            }else if (idade < 18) {
                //jovem
            }else if (idade >= 18 && idade < 60) {
                //adulto
            }else {
                //idoso
            }
        }else {
            genero = 'mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} de ${idade}`
        res.appendChild(img)
    }
}