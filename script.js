let tarefas = [
    'Terminar a lista do Vini',
    'Tarefa Rodriguinho (Ap. 6) (601, 603, 606, 609, 611, 615, 619, 620)',
    'Tarefa Renan (Ap. 5) (574, 570, 571, 577, 579, 563 ,565)',
]

Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
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
        switch (n) {
            case 'segunda-feira':
                return 'segunda.png'
            case 'terça-feira':
                return 'terça.png'
            case 'quarta-feira':
                return 'quarta.png'
            case 'quinta-feira':
                return 'quinta.png'
            case 'sexta-feira':
                return 'sexta.png'
            case 'sábado':
                return 'sabado.png'
            case 'domingo':
                return 'semaula.png'
        }
    }
    if (i == 'plantoes') {
        switch (n) {
            case 'segunda-feira':
                return 'psegunda.png'
            case 'terça-feira':
                return 'pterça.png'
            case 'quarta-feira':
                return 'pquarta.png'
            case 'quinta-feira':
                return 'pquinta.png'
            case 'sexta-feira':
                return 'psexta.png'
            case 'sábado':
                return 'psabado.png'
            case 'domingo':
                return 'semaula.png'
        }
    }
    if (i == 'aulasex') {
        switch (n) {
            case 'segunda-feira':
                return 'esegunda.png'
            case 'terça-feira':
                return 'eterça.png'
            case 'quarta-feira':
                return 'equarta.png'
            case 'quinta-feira':
                return 'equinta.png'
            case 'sexta-feira':
                return 'esexta.png'
            case 'sábado':
                return 'esabado.png'
            case 'domingo':
                return 'semaula.png'
        }
    }
}

const tit = document.querySelector('#ptit')
tit.innerHTML = `${r}, hoje é ${n}!`

const img1 = document.querySelector('#img1')
img1.setAttribute('src', imagem("aulas"))

const bAulas = document.getElementById('baulas')
const bAulasEx = document.getElementById('baulasex')
const bPlantoes = document.getElementById('bplantoes')

bAulas.onclick = () => {
    img1.setAttribute('src', imagem("aulas"))
    img1.setAttribute('style', 'width:400px;')
}

bAulasEx.onclick = () => {
    img1.setAttribute('src', imagem("aulasex"))
    img1.setAttribute('style', 'width:500px; height: 300px')
}

bPlantoes.onclick = () => {
    img1.setAttribute('src', imagem("plantoes"))
    img1.setAttribute('style', 'width:500px; height: 300px')
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

renderTarefas()

