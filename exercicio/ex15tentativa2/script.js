function verificarIdade() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('nasc')
    var res = document.querySelector('div#res')
    //var idade = Number(nasc) - Number(ano)
    //window.alert(`sua idade é ${idade} anos`)
    if (nasc.value.length == 0 || nasc > ano) {
        window.alert('o ano está vazio')
    }else {
        var sex = document.getElementsByName('sexo')
        var idade = ano - Number(nasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            genero = 'masculino'
            if (idade > 0 && idade < 12) {
                //criança
            }else if (idade < 18) {
                //adolescente
            }else if (idade >= 18 && idade < 65) {
                //adulto
            }else {
                //idoso
            }
        }else {
            genero = 'feminino'
            if (idade > 0 && idade < 12) {
                img.setAttribute('src', 'f-criança.jpg')
                
            }else if (idade < 18) {
                //adolescente
            }else if (idade < 65) {
                //adulto
            }else {
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `idade: ${idade} sexo: ${genero}`
        res.appendChild(img)
    }
}