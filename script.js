let tarefas = [
    'Terminar a lista do Vini',
    'Tarefa Rodriguinho (Ap. 6) (601, 603, 606, 609, 611, 615, 619, 620)',
    'Tarefa Renan (Ap. 5) (574, 570, 571, 577, 579, 563 ,565)',
]

const dim = {
    aulas: [190, 155],
    plantoes: [287, 123],
    aulasex: [251, 122]
}
const asp1 = -1

const coordsHorario = [
    //aulas
    [asp1, -1, dim.aulas[0], dim.aulas[1]], //segunda
    [asp1, 173, dim.aulas[0], dim.aulas[1]], //terça
    [asp1, 357, dim.aulas[0], dim.aulas[1]], //quarta
    [asp1, 538, dim.aulas[0], dim.aulas[1]], //quinta
    [asp1, 720, dim.aulas[0], dim.aulas[1]], //sexta
    [asp1, 903, dim.aulas[0], dim.aulas[1]], //sabado

    //plantoes
    [asp1, -1, dim.plantoes[0], dim.plantoes[1]], //segunda
    [asp1, 127, dim.plantoes[0], dim.plantoes[1]], //terça
    [asp1, 257, dim.plantoes[0], dim.plantoes[1]], //quarta
    [asp1, 386, dim.plantoes[0], dim.plantoes[1]], //quinta
    [asp1, 516, dim.plantoes[0], dim.plantoes[1]], //sexta

    //aulas extras
    [asp1, -1, dim.aulasex[0], dim.aulasex[1]], //segunda
    [asp1, 129, dim.aulasex[0], dim.aulasex[1]], //terça
    [asp1, 259, dim.aulasex[0], dim.aulasex[1]], //quarta
    [asp1, 388, dim.aulasex[0], dim.aulasex[1]], //quinta
    [asp1, 518, dim.aulasex[0], dim.aulasex[1]], //sexta

]

Storage.prototype.setObject = function (key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function (key) {
    return JSON.parse(this.getItem(key));
}

function clock() { // We create a new Date object and assign it to a variable called "time".
    var time = new Date(),

        // Access the "getHours" method on the Date object with the dot accessor.
        hours = time.getHours(),

        // Access the "getMinutes" method with the dot accessor.
        minutes = time.getMinutes(),


        seconds = time.getSeconds();

    document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);

    function harold(standIn) {
        if (standIn < 10) {
            standIn = '0' + standIn
        }
        return standIn;
    }
}
setInterval(clock, 1000);

var d = new Date()
var weekday = new Array(7);
weekday[0] = "domingo";
weekday[1] = "segunda-feira";
weekday[2] = "terça-feira";
weekday[3] = "quarta-feira";
weekday[4] = "quinta-feira";
weekday[5] = "sexta-feira"
weekday[6] = "sábado";

var n = weekday[d.getDay()]
var h = d.getHours();
let r

if (6 <= h && h < 12) {
    r = 'Bom dia'
}
if (12 <= h && h < 18) {
    r = 'Boa tarde'
}
if (18 <= h && h < 24) {
    r = 'Boa noite'
}
if (0 <= h && h < 6) {
    r = 'Boa madrugada'
}

imagem = (i) => {
    if (i == 'aulas') {
        return 'horarioescola.jpeg'
    }
    if (i == 'plantoes') {
        return 'horarioplantoes.jpeg'
    }
    if (i == 'aulasex') {
        return 'horarioextra.png'
    }
}

dia = (i, num) => {
    pInt = (a, b) => {
        return parseInt(coordsHorario[a][b])
    }
    if (i == 'aulas') {
        switch (n) {
            case 'segunda-feira':
                return pInt(0, num)
            case 'terça-feira':
                return pInt(1, num)
            case 'quarta-feira':
                return pInt(2, num)
            case 'quinta-feira':
                return pInt(3, num)
            case 'sexta-feira':
                return pInt(4, num)
            case 'sábado':
                return pInt(5, num)
            case 'domingo':
                return 'semaula.png'
        }
    }
    if (i == 'plantoes') {
        switch (n) {
            case 'segunda-feira':
                return pInt(6, num)
            case 'terça-feira':
                return pInt(7, num)
            case 'quarta-feira':
                return pInt(8, num)
            case 'quinta-feira':
                return pInt(9, num)
            case 'sexta-feira':
                return pInt(10, num)
            case 'sábado':
                return 'semaula.png'
            case 'domingo':
                return 'semaula.png'
        }
    }
    if (i == 'aulasex') {
        switch (n) {
            case 'segunda-feira':
                return pInt(11, num)
            case 'terça-feira':
                return pInt(12, num)
            case 'quarta-feira':
                return pInt(13, num)
            case 'quinta-feira':
                return pInt(14, num)
            case 'sexta-feira':
                return pInt(15, num)
            case 'sábado':
                return 'semaula.png'
            case 'domingo':
                return 'semaula.png'
        }
    }
}

cf = (str) => {
    if (((n == 'sábado' || n == 'domingo') && (str == 'aulasex' || str == 'plantoes')) || (n== 'domingo' && (str == 'aulas'))) {
        return 'semaula.png'
    } else {
    cortarImagem(dia(str, 0), dia(str, 1), dia(str, 2), dia(str, 3), imagem(str))
    }
}

const tit = document.querySelector('#ptit')
tit.innerHTML = `${r}, hoje é ${n}!`

const img1 = document.querySelector('#img1')

const bAulas = document.getElementById('baulas')
const bAulasEx = document.getElementById('baulasex')
const bPlantoes = document.getElementById('bplantoes')

bAulas.onclick = () => {
    img1.setAttribute('src', cf('aulas'))
    img1.setAttribute('style', 'width:400px;')
}

bAulasEx.onclick = () => {
    img1.setAttribute('src', cf('aulasex'))
    if(cf('aulasex') != 'semaula.png') {img1.setAttribute('style', 'width:500px; height: 300px')} else {
        img1.setAttribute('style', 'width:400px;')
    }
}

bPlantoes.onclick = () => {
    img1.setAttribute('src', cf('plantoes'))
    if(cf('plantoes') != 'semaula.png') {img1.setAttribute('style', 'width:500px; height: 300px')} else {
        img1.setAttribute('style', 'width:400px;')
    }
}

const divTarefa = document.querySelector('#tarefas')

renderTarefas = () => {
    for (item in tarefas) {
        let p = document.createElement('div')
        let inputcheckbox = document.createElement('input')
        inputcheckbox.setAttribute('type', 'checkbox')
        p.setAttribute('class', 'tarefa')
        let text = document.createTextNode(tarefas[item])
        p.appendChild(inputcheckbox)
        p.appendChild(text)
        divTarefa.appendChild(p)

    }
}

let cortarImagem = (coord1, coord2, coord3, coord4, imagem) => {
    var file = 'new_name.' + 'png'
    Jimp.read(imagem).then(function (lenna) {
        lenna.crop(coord1, coord2, coord3, coord4)

            .getBase64(Jimp.MIME_JPEG, function (err, src) {
                var img = document.querySelector('#img1');
                img.setAttribute("src", src);

            });
        lenna.write('./sextaaaaaa.png')
    }).catch(function (err) {
        console.error(err);
    });
}

img1.setAttribute('src', cf('aulas'))

renderTarefas()