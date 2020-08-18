let tarefas = [
    ['Tarefa Vladmir - FILO.', '(Ap. 5 - M. 14 - Pág. 250)', '(261, 265, 266, 267, 268, 270, 275, 276, 278, 279)'],
    ['Tarefa João César', '(Ap. 6 - M. 32)', '(621, 622, 625, 627, 629, 635)'],
    ['Tarefa Guilherme', '(Ap. 6 - M. 31 - Pág. 33)', '(601, 603, 608, 609, 612, 613, 614, 616, 619)'],
    ['Tarefa Guilherme', '(Ap. 6 - M. 32 - Pág. 38)', '(621, 623, 626, 628, 629, 631, 633, 636)'],
    ['Tarefa Rodrigo', '(Ap. 6 - M. 33 - Pág. 232)', '(641, 642, 645, 648, 650, 653, 658, 659)'],
    ['Tarefa LeoGeo', '(Ap. 6 - M. 36 - Pág. 179)', '(701, 703, 705, 711, 713, 715, 710, 713)'],
    ['Tarefa Marcus Vinícius', '(Ap. 6 - M. 33 - Pág. 172)', '(641, 643, 645, 646, 648)'],
];

let isChecked = []

const dim = {
    aulas: [190, 155],
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

new Promise(function (resolve, reject) {
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

const divTarefa = document.querySelector('#tarefas')

renderTarefas = () => {
    saveToStorage = (a) => {
        localStorage.setItem('list_todos', JSON.stringify(a))
    }

    getStorage = () => {
        return JSON.parse(localStorage.getItem('list_todos'))
    }

    caretButton = (element, item, button) => {
        let isShown = false
        let lista = tarefas[item].slice(1)
        if (!tarefas[item][1]) return
        let icon = button.querySelector('i')

        for (i in tarefas) {
            var newGroupDiv = document.createElement('div')
            for (o in lista) {
                let newDiv = document.createElement('div')
                let arrowSpan = document.createElement('span')
                let newText = document.createTextNode(lista[o])
                let newArrow = document.createTextNode(' ↳ ')
                arrowSpan.setAttribute('class', 'arrow')
                newDiv.setAttribute('class', 'subTarefas')
                arrowSpan.appendChild(newArrow)
                newDiv.appendChild(arrowSpan)
                newDiv.appendChild(newText)
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



    for (item in tarefas) {
        let p = document.createElement('div')
        let titleDiv = document.createElement('span')
        let inputcheckbox = document.createElement('input')
        let caretButtonElement = document.createElement('button')
        let caretButtonIcon = document.createElement('i')
        caretButtonIcon.setAttribute('class', 'fa fa-caret-down')
        inputcheckbox.setAttribute('type', 'checkbox')
        inputcheckbox.setAttribute('class', 'classCheck')

        if (localStorage.getItem('list_todos')) {
            if (getStorage()[item] == true) {
                inputcheckbox.checked = true
            } else {
                inputcheckbox.checked = false
            }
        } else {
            isChecked.push(false)
        }

        p.setAttribute('class', 'tarefa')
        titleDiv.insertAdjacentHTML('beforeend', `${tarefas[item][0]}`)
        titleDiv.setAttribute('class', 'titleDiv')
        caretButtonElement.appendChild(caretButtonIcon)
        p.appendChild(inputcheckbox)
        p.appendChild(caretButtonElement)
        p.appendChild(titleDiv)
        caretButton(p, item, caretButtonElement)
        divTarefa.appendChild(p)

        inputcheckbox.addEventListener('change', function () {
            function getSelectedCheckboxValues(name) {
                const checkboxes = document.querySelectorAll(`input[class=${name}]`);
                let isChecked = [];
                checkboxes.forEach((checkbox) => {
                    isChecked.push(checkbox.checked);
                });
                return isChecked;
            }
            saveToStorage(getSelectedCheckboxValues('classCheck'))
            console.log(getSelectedCheckboxValues('classCheck'))
        })
    }
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