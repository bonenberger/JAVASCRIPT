function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('img')
    var data = new Date()
    var atual = data.getHours()
    msg.innerHTML = `agora são ${atual} horas`
    if (atual >= 0 && atual < 12){
        foto.src = "imagens/manha.jpg"
    }else if (atual >= 12 && atual < 18) {
        foto.src = "imagens/tarde.jpg"
    }else {
        foto.src = "imagens/noite.jpg"
    }
}


