function verificar() {
    let data = new Date();
    let FormAno = data.getFullYear();
    let ano = document.getElementById('ano').value;
    let res = document.getElementById('res');
    let fsex = document.getElementsByName('Selec');
    let suaFoto = document.getElementById('foto');

    if (ano == 0) {
        window.alert("ANO 0? POR ACASO DEVO LHE CHAMAR DE DEUS? REESCREVA SUA DATA.");
        return;
    }
    if (ano > FormAno) {
        window.alert("PARECE QUE VOCE NEM NASCEU AINDA, REESCREVA SUA DATA.");
        return;
    }

    let idade = FormAno - Number(ano);
    let gen = '';

    if (fsex[0].checked) {
        if (idade >= 0 && idade < 18) {
            suaFoto.setAttribute('src', './imgs/menino.png');
            gen = 'um menino';
        } else if (idade >= 18 && idade < 50) {
            suaFoto.setAttribute('src', './imgs/adulto.png');
            gen = 'um homem';
        } else {
            suaFoto.setAttribute('src', './imgs/idoso.png');
            gen = 'um senhor';
        }
    } else if (fsex[1].checked) {
        if (idade >= 0 && idade < 18) {
            suaFoto.setAttribute('src', './imgs/menina.png');
            gen = 'uma menina';
        } else if (idade >= 18 && idade < 50) {  
            suaFoto.setAttribute('src', './imgs/adulta.png');
            gen = 'uma mulher';
        } else {
            suaFoto.setAttribute('src', './imgs/idosa.png');
            gen = 'uma senhora';
        }
    } else {
        window.alert("SELECIONE SEU GÊNERO!");
        return;
    }
    
    res.innerHTML = `Detectamos ${gen} com ${idade} anos.`;
}
