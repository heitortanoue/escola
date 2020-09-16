let tarefas = [     
    ['Tarefa Rafa', 'mat', '(Ap. 8 - M. 45 - Pág. 229)', '(881, 882, 883, 884, 887, 888, 890, 891)'],    
    ['Tarefa Vini', 'mat', '(Ap. 7 - M. 38 - Pág. 43)', '(742, 743, 744, 747, 748, 750, 751, 752 754, 756)', '(Desafios: 749, 755, 757, 758)'],    
    ['Tarefa LeoGeo', 'geo', '(Ap. 6 - M. 36 - Pág. 179)', '(701, 703, 705, 711, 713, 715, 710)'],      
    ['Tarefa Murilo', 'gra', '(Ap. 8 - M. 43 - Pág. 131)', '(845, 850, 853, 854, 859, 860)'],        
    ['Tarefa Zanin', 'geo', '(Ap. 7 - M. 20 e 21 - Pág. 214)', '(381, 383, 384, 388, 397)'],
    ['Tarefa Tio Dani', 'bio', '(Ap. 7 - M. 37 - Pág. 264)', '(726, 727, 733, 734, 740)'],  
    
    //['Tarefa Thiagão', 'fis', '(Ap. 6 - M. 18 - Pág. 119)', '(342, 343,, 347, 350, 354)'],
    //['Tarefa Vlad', 'fil', '(Ap. 6 - M. 17 - Pág. 94)', '(321, 323, 323, 326, 328, 329, 332, 333, 335, 339)'],      

    //['Tarefa Ariad II', 'soc', '(Ap. 6 - M. 16 - Pág. 277)', '(302, 312, 313, 317, 318)'],       
];

let tema = 'Memes';

const materias = {
    mat: ['Matemática &#128290', 'steelblue'],
    fis: ['Física &#128640', 'rebeccapurple'],
    qui: ['Química &#129514', 'darkmagenta'],
    bio: ['Biologia &#129516', 'seagreen'],
    his: ['História &#128220', 'goldenrod'],
    geo: ['Geografia &#127758', 'tomato'],
    lit: ['Literatura &#128218', 'deeppink'],
    red: ['Redação &#9997', 'sienna'],
    gra: ['Gramática &#128292', 'darkcyan'],
    fil: ['Filosofia &#x1F9E0', 'lightseagreen'],
    soc: ['Sociologia &#128105', 'firebrick'],
    prova: ['Prova &#128221', 'darkred']
}

let tarefasUsuario = []

let isChecked = []

let soundAtivado = false
let soundbtn = document.querySelector('#soundbtn')
soundbtn.addEventListener('click', function() {
    let icon = document.querySelector('#soundbtnicon')
    soundAtivado ^= true
    soundAtivado == true ? icon.setAttribute('class', "fa fa-volume-up") : icon.setAttribute('class', "fa fa-volume-off")
})

const dim = {
    aulas: [190, 156],
    plantoes: [287, 123],
    aulasex: [251, 122]
}
const asp1 = -1

const coordsHorario = [
    //aulas
    [asp1, -1, dim.aulas[0], dim.aulas[1] - 5], //segunda
    [asp1, 173, dim.aulas[0], dim.aulas[1]], //terça
    [asp1, 357, dim.aulas[0], dim.aulas[1]], //quarta
    [asp1, 538, dim.aulas[0], dim.aulas[1]], //quinta
    [asp1, 720, dim.aulas[0], dim.aulas[1]], //sexta
    [asp1, 903, dim.aulas[0], dim.aulas[1] - 3], //sabado

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

document.getElementById('temaredacao').innerHTML = tema

new Promise(function (resolve, reject) {
    function clock() {
        var time = new Date(),
            days = time.getDate()
            months = time.getMonth() + 1
            hours = time.getHours(),
            minutes = time.getMinutes(),
            seconds = time.getSeconds();

        document.querySelectorAll('.clock')[0].innerHTML = `${harold(days)}/${harold(months)} ` + harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);

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

    n = weekday[d.getDay()]
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

    const tit = document.querySelector('#ptit')
    tit.innerHTML = `${r}, hoje é ${n}!`
})

cf = (str) => {
    let dia = (i, num) => {
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

    let imagem = (i) => {
        if (i == 'aulas') {
            return 'horarioescola.jpeg'
        }
        if (i == 'plantoes') {
            return 'horarioplantoes.jpeg'
        }
        if (i == 'aulasex') {
            return 'horarioextra.jpeg'
        }
    }

    let cortarImagem = (coord1, coord2, coord3, coord4, imagem) => {
        Jimp.read(imagem).then(function (lenna) {
            lenna.crop(coord1, coord2, coord3, coord4)
            lenna.getBase64(Jimp.MIME_JPEG, function (err, src) {
                var img = document.querySelector('#img1');
                img.setAttribute("src", src);
            });
        }).catch(function (err) {
            console.error(err);
        });
    }

    if (((n == 'sábado' || n == 'domingo') && (str == 'aulasex' || str == 'plantoes')) || (n == 'domingo' && (str == 'aulas'))) {
        return 'semaula.png'
    } else {
        cortarImagem(dia(str, 0), dia(str, 1), dia(str, 2), dia(str, 3), imagem(str))
    }

}

let semAula = (inp) => {
    if (cf(inp) != 'semaula.png') {
        img1.setAttribute('style', 'width:500px; height: 300px')
    } else {
        img1.setAttribute('style', 'width:400px;')
    }
}

const img1 = document.querySelector('#img1')
new Promise(resolve => {
    img1.setAttribute('src', cf('aulas'))
})

const bAulas = document.getElementById('baulas')
const bAulasEx = document.getElementById('baulasex')
const bPlantoes = document.getElementById('bplantoes')

bAulas.onclick = () => {
    img1.setAttribute('src', cf('aulas'))
    //semAula('aulas')
}

bAulasEx.onclick = () => {
    img1.setAttribute('src', cf('aulasex'))
    //semAula('aulasex')
}

bPlantoes.onclick = () => {
    img1.setAttribute('src', cf('plantoes'))
    //semAula('plantoes')
}

const inputText = document.querySelector('#inputTarefa')
const inputButton = document.querySelector('#inputTarefaButton')
const divTarefa = document.querySelector('#tarefas')

/*inputButton.onclick = () => {
    tarefasUsuario.push(inputText.value)
    inputText.value = ''
    console.log(tarefasUsuario)
    divTarefa.innerHTML = ''
    renderTarefas()
}*/

renderTarefas = () => {
    let data = new Date()
    let ddate = data.getDate()

    if (localStorage.getItem('dia') && Number(localStorage.getItem('dia')) != ddate) {
        localStorage.setItem('list_todos', JSON.stringify([]))     
        localStorage.setItem('dia', ddate)
    } else {
        localStorage.setItem('dia', ddate)
    }
    congratulations = (p1, alou) => {
        if (soundAtivado == true) {
            let audio = new Audio('mario.mp3');
            audio.volume = 0.2
            audio.play();
        }
        if (alou.every(elem => elem == true)) {
        if (document.querySelector('.newDivCongratulations') == undefined || document.querySelector('.newDivCongratulations').innerHTML == '') {
            newDivCongratulations = document.createElement('div')
            let newText = document.createTextNode('🎉 Conseguiu acabar tudo, parabéns! 🎉')
            newDivCongratulations.setAttribute('class', 'newDivCongratulations')
            newDivCongratulations.appendChild(newText)
            p1.parentNode.insertBefore(newDivCongratulations, p1.nextSibling)
            return}} else {
                document.querySelector('.newDivCongratulations').innerHTML = '';
                return
            }}
    

    saveToStorage = (a) => {
        localStorage.setItem('list_todos', JSON.stringify(a))
    }

    getStorage = () => {
        return JSON.parse(localStorage.getItem('list_todos'))
    }

    caretButton = (element, item, button) => {
        let isShown = false
        let lista = tarefas[item].slice(2)
        if (!tarefas[item][2]) {
            button.setAttribute('style', 'display:none;')
            return}
        let icon = button.querySelector('i')

        for (i in tarefas) {
            var newGroupDiv = document.createElement('div')
            for (o in lista) {
                let newDiv = document.createElement('div')
                let arrowSpan = document.createElement('span')
                let newArrow = document.createTextNode(' ↳ ')
                arrowSpan.setAttribute('class', 'arrow')
                newDiv.setAttribute('class', 'subTarefas')
                arrowSpan.appendChild(newArrow)
                newDiv.appendChild(arrowSpan)
                newDiv.insertAdjacentHTML('beforeend', `${lista[o]}`)
                newGroupDiv.appendChild(newDiv)
            }
            element.appendChild(newGroupDiv)
            newGroupDiv.setAttribute('style', 'display: none;')
            button.setAttribute('class' ,'btn_normal')
            icon.setAttribute('class' ,'fa fa-caret-down fa-rotate-270')
        }

        button.addEventListener('click', function () {
            if (isShown == false) {
                newGroupDiv.setAttribute('style', 'display: block;')
                setTimeout(() => {
                    icon.setAttribute('class', 'fa fa-caret-down' )
                } ,500)
                button.setAttribute('class' ,'btn_pressed')
            }
            if (isShown == true) {
                newGroupDiv.setAttribute('style', 'display: none;')
                setTimeout(() => {
                    icon.setAttribute('class' ,'fa fa-caret-down fa-rotate-270')
                } ,500)
                button.setAttribute('class' ,'btn_unpressed')
            }
            isShown ^= true
        })
    }

    createSubjectTag = (element, m) => {
        if(!m) {return}
        if(!materias[`${m}`]) {return}
        let newTag = document.createElement('span')
        newTag.insertAdjacentHTML('beforeend', ` ${materias[`${m}`][0]}`)
        newTag.setAttribute('class', 'tag')
        newTag.setAttribute('style', `background-color: ${materias[`${m}`][1]}`)
        element.appendChild(newTag)
    }

    renderTarefasEscola = () => {for (item in tarefas) {
        const materiaAtual = tarefas[item][1]
        let p = document.createElement('div')
        let titleDiv = document.createElement('label')
        let label = document.createElement('label')
        let inputcheckbox = document.createElement('input')
        let caretButtonElement = document.createElement('button')
        let caretButtonIcon = document.createElement('i')
        caretButtonIcon.setAttribute('class', 'fa fa-caret-down')
        inputcheckbox.setAttribute('type', 'checkbox')
        inputcheckbox.setAttribute('class', 'classCheck')
        inputcheckbox.setAttribute('id', `idc${item}`)
        label.setAttribute('for', `idc${item}`)
        label.setAttribute('class', `label`)
        titleDiv.setAttribute('for', `id${item}`)
        caretButtonElement.setAttribute('id', `id${item}`)
        titleDiv.setAttribute('class', 'tarefa_undone')
        p.setAttribute('class', 'tarefaDiv')

        if (localStorage.getItem('list_todos')) {
            if (getStorage()[item] == true) {
                inputcheckbox.checked = true
                titleDiv.setAttribute('class', 'tarefa_done')
                inputcheckbox.addEventListener('change', function() {
                    inputcheckbox.checked == true ? titleDiv.setAttribute('class', 'tarefa_done') : titleDiv.setAttribute('class', 'tarefa_undone')
                })

            } else {
                inputcheckbox.checked = false
                titleDiv.setAttribute('class', 'tarefa_undone')
                inputcheckbox.addEventListener('change', function() {
                    inputcheckbox.checked == true ? titleDiv.setAttribute('class', 'tarefa_done') : titleDiv.setAttribute('class', 'tarefa_undone')
                })
            }
        } else {
            isChecked.push(false)
            titleDiv.setAttribute('class', 'tarefa_undone')
            inputcheckbox.addEventListener('change', function() {
                inputcheckbox.checked == true ? titleDiv.setAttribute('class', 'tarefa_done') : titleDiv.setAttribute('class', 'tarefa_undone')
            })
        }

        inputcheckbox.addEventListener('change', function () {
            function getSelectedCheckboxValues(name) {
                const checkboxes = document.querySelectorAll(`input[class=${name}]`);
                let isChecked = [];
                checkboxes.forEach((checkbox) => {
                    isChecked.push(checkbox.checked);
                });
                //congratulations(divTarefa, isChecked)
                return isChecked;
            }         
            saveToStorage(getSelectedCheckboxValues('classCheck'))
        })

        titleDiv.insertAdjacentHTML('beforeend', `${tarefas[item][0]}`)
        //titleDiv.setAttribute('class', 'titleDiv')
        caretButtonElement.appendChild(caretButtonIcon)
        p.appendChild(inputcheckbox)
        p.appendChild(label)
        p.appendChild(caretButtonElement)
        p.appendChild(titleDiv)
        createSubjectTag(p, `${materiaAtual}`)
        caretButton(p, item, caretButtonElement)
        divTarefa.appendChild(p)
    }} 
    renderTarefasEscola()
}

if (window.CSS && CSS.supports("color", "var(--primary)")) {
    let checkColor = localStorage.getItem('color-mode');
    let checkColorMode = () => {
        if (checkColor == 'light') {
            return
        } else {
            document.documentElement.setAttribute("color-mode", "dark");
        }
    }
    checkColorMode()
    var toggleColorMode = function toggleColorMode(e) {
        // Switch to Light Mode
        if (e.currentTarget.classList.contains("light--hidden")) {
            // Sets the custom html attribute
            document.documentElement.setAttribute("color-mode", "light"); // Sets the user's preference in local storage

            localStorage.setItem("color-mode", "light");
            return;
        }
        /* Switch to Dark Mode
        Sets the custom html attribute */
        document.documentElement.setAttribute("color-mode", "dark"); // Sets the user's preference in local storage

        localStorage.setItem("color-mode", "dark");
    }; // Get the buttons in the DOM
    var toggleColorButtons = document.querySelectorAll(".color-mode__btn"); // Set up event listeners

    toggleColorButtons.forEach(function (btn) {
        btn.addEventListener("click", toggleColorMode);
    });
} else {
    // If the feature isn't supported, then we hide the toggle buttons
    var btnContainer = document.querySelector(".color-mode__header");
    btnContainer.style.display = "none";
}

renderTarefas()