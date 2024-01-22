function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');

    if (fano.value.length === 0 || Number(fano.value) > ano) {
        window.alert("ERRO! Verifique os dados");
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        res.innerHTML = `Idade calculada: ${idade}`;
        var gênero = "";
        var img = document.createElement("img");
        img.setAttribute("id", "foto");

        if (fsex[0].checked) {
            gênero = "Homem";

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'criança.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'adolescente.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'jovemadulto.png');
            } else {
                img.setAttribute('src', 'senhor.png');
            }
        } else if (fsex[1].checked) {
            gênero = "Mulher";

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'criança.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'adolescentemenina.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'jovemmulher.png');
            } else {
                img.setAttribute('src', 'senhora.png');
            }
        }

        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
        res.appendChild(img);
    }
}
