function carregarTempo(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    if(hora >= 5 && hora < 12 ){
        msg.innerHTML = `Agora são ${hora} horas. Boa Dia!` 
        img.src = './public/manha_.png'
        document.body.style.background='#614420'
    }
    else if(hora >= 12 && hora < 18 ){
        msg.innerHTML = `Agora são ${hora} horas. Boa Tarde!` 
        img.src = './public/tarde_.png'
        document.body.style.background='#741e01'

    }
    else{

        msg.innerHTML = `Agora são ${hora} horas. Boa Noite!` 
        img.src = './public/noite_.png'
        document.body.style.background='#091b22'
    }
}  

