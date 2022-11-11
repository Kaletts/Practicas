const selectionButtons = document.querySelectorAll('[data-selection]')
/*Este selector selecciona ALL valores de "data-selection" para
agregarlos a la constante "selectionButtons".*/
const finalColumn = document.querySelector('[data-final-column]')
const cpuScore = document.querySelector('[data-computer-score]')
const userScore = document.querySelector('[data-user-score]')
const POSIBLESELECTIONS = [ /*Array donde se encuentran todas las opciones posibles*/
    {
        name: 'rock',
        emoji: '🪨',
        beats: 'scissors'
    },
    {
        name: 'paper',
        emoji: '📰',
        beats: 'rock'
    },
    {
        name: 'scissors',
        emoji: '✂️',
        beats: 'paper'
    }
]

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        /*Verifica todo el array de selecciones posibles y devuelve el que sea igual al que hicimos click */
        const userSelection = POSIBLESELECTIONS.find(selection => selection.name === selectionName) 
        makeSelection(userSelection) /*userSelection contiene toda la información de la elección del usuario*/
    })
})

function makeSelection(userSelection) {
    const computerSelection = chooseRandom()
    const youWin = isWinner(userSelection, computerSelection)/*Booleano true o false */
    const cpuWin = isWinner(computerSelection, userSelection)
    addResult(computerSelection, cpuWin) /*llama a la funcion que agrega el resultado de la pc a la lista */
    addResult(userSelection,youWin) /*llama a la funcion que agrega el resultado del usuario a la lista */

    if (youWin) increaseScore(userScore) /*llama a la funcion que agrega un número más si gana el usuario */
    if (cpuWin) increaseScore(cpuScore)/*llama a la funcion que agrega un número más si gana la PC */
}

function addResult(userSelection, winner){
    /*Creamos una constante para crear un elemento div*/
    const divididos = document.createElement('div')
    /*Agregamos el emoji de la selección al div*/
    divididos.innerText = userSelection.emoji
    divididos.classList.add('result-selection-loser')
    if (winner) divididos.classList.add('result-selection-winner')
    finalColumn.after(divididos)

}

function isWinner (userSelection, opponentSelection) {
    /*Compara el valor BEATS con el Nombre de lo que elige la computadora
    Si es igual o no y retorna verdadero o falso*/
    return userSelection.beats === opponentSelection.name
}

function chooseRandom () {
    /*Math.random da un numero entre 0 y 3 porque son 3 posibles selecciones
    Pero no puede dar 3 exacto, maximo 2.9999
    entonces utilizamos Math.floor para cortar en un maximo de 2.
    Teniendo 0, 1 o 2 que nos permite diferenciar entre las tres opciones*/
    const randomIndex = Math.floor(Math.random() * POSIBLESELECTIONS.length)
    /*Luego devolvemos del array el número 0 1 o 2, eligiendo asi las tres opciones*/
    return POSIBLESELECTIONS[randomIndex]
}


function increaseScore (scoreValue) {
    scoreValue.innerText = parseInt(scoreValue.innerText) +1
}