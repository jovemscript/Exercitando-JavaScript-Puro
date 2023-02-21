function contar(){
    let ini = document.getElementById("num1")
    let fim = document.getElementById("num2")
    let int = document.getElementById("num3")
    
    if (ini.value.length == 0 || fim.value.length == 0 || int.value.length == 0 ){
        window.alert("[ERRO:001] DADOS INCORRETOS")
    } else {
        res.innerHTML = 'Contador: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let e = Number(int.value)

        for (let c = i ; c <= f; c += e){
            res.innerHTML += `${c}  \u{1F449} `
        }
        res.innerHTML += ' \u{1F3C1} '
    }
}