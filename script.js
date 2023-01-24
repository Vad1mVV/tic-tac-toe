const box = document.querySelector('.box');
const boxEl = document.querySelectorAll('.box__el')
const crossWins = document.querySelector('.crossWinsAmount')
const circleWins = document.querySelector('.circleWinsAmount')
const btnReset = document.querySelector('.btnReset')

console.log(boxEl)

let move = 1;
let crossWinsAmount = 0;
let circleWinsAmount = 0;

box.addEventListener('click', onCellClick);

function onCellClick(e) {
    e.preventDefault()

    if (e.target.nodeName !== 'LI') {
        return;
    };
    if (e.target.id === 'cross' || e.target.id === 'circle') {
        alert('Выберите пустую ячейку');
        return;
    }
    
    // cross
    if (move % 2 !== 0) {
        e.target.classList.add('crossVisibility');
        e.target.id = 'cross';
    }

    // circle
    if (move % 2 === 0) {
        e.target.classList.add('circleVisibility');
        e.target.id = 'circle';
    }

    move += 1;

    checkWin()
    console.log(boxEl)
}

function checkWin() {
    if (boxEl[0].id === 'cross' && boxEl[1].id === 'cross' && boxEl[2].id === 'cross') {
        alert('Победили крестики');
        crossWinsAmount += 1;
        crossWins.innerHTML = crossWinsAmount;
        gameReset();
        return;
    }
    if (boxEl[0].id === 'circle' && boxEl[1].id === 'circle' && boxEl[2].id === 'circle') {
        alert('Победили нолики');
        circleWinsAmount += 1;
        circleWins.innerHTML = circleWinsAmount;
        gameReset();
        return;
    }

    if (boxEl[3].id === 'cross' && boxEl[4].id === 'cross' && boxEl[5].id === 'cross') {
        alert('Победили крестики');
        crossWinsAmount += 1;
        crossWins.innerHTML = crossWinsAmount;
        gameReset();
        return;
    }
    if (boxEl[3].id === 'circle' && boxEl[4].id === 'circle' && boxEl[5].id === 'circle') {
        alert('Победили нолики');
        circleWinsAmount += 1;
        circleWins.innerHTML = circleWinsAmount;
        gameReset();
        return;
    }

    if (boxEl[6].id === 'cross' && boxEl[7].id === 'cross' && boxEl[8].id === 'cross') {
        alert('Победили крестики');
        crossWinsAmount += 1;
        crossWins.innerHTML = crossWinsAmount;
        gameReset();
        return;
    }
    if (boxEl[6].id === 'circle' && boxEl[7].id === 'circle' && boxEl[8].id === 'circle') {
        alert('Победили нолики');
        circleWinsAmount += 1;
        circleWins.innerHTML = circleWinsAmount;
        gameReset();
        return;
    }

    if (boxEl[0].id === 'cross' && boxEl[3].id === 'cross' && boxEl[6].id === 'cross') {
        alert('Победили крестики');
        crossWinsAmount += 1;
        crossWins.innerHTML = crossWinsAmount;
        gameReset();
        return;
    }
    if (boxEl[0].id === 'circle' && boxEl[3].id === 'circle' && boxEl[6].id === 'circle') {
        alert('Победили нолики');
        circleWinsAmount += 1;
        circleWins.innerHTML = circleWinsAmount;
        gameReset();
        return;
    }

    if (boxEl[1].id === 'cross' && boxEl[4].id === 'cross' && boxEl[7].id === 'cross') {
        alert('Победили крестики');
        crossWinsAmount += 1;
        crossWins.innerHTML = crossWinsAmount;
        gameReset();
        return;
    }
    if (boxEl[1].id === 'circle' && boxEl[4].id === 'circle' && boxEl[7].id === 'circle') {
        alert('Победили нолики');
        circleWinsAmount += 1;
        circleWins.innerHTML = circleWinsAmount;
        gameReset();
        return;
    }

    if (boxEl[2].id === 'cross' && boxEl[5].id === 'cross' && boxEl[8].id === 'cross') {
        alert('Победили крестики');
        crossWinsAmount += 1;
        crossWins.innerHTML = crossWinsAmount;
        gameReset();
        return;
    }
    if (boxEl[2].id === 'circle' && boxEl[5].id === 'circle' && boxEl[8].id === 'circle') {
        alert('Победили нолики');
        circleWinsAmount += 1;
        circleWins.innerHTML = circleWinsAmount;
        gameReset();
        return;
    }

    if (boxEl[0].id === 'cross' && boxEl[4].id === 'cross' && boxEl[8].id === 'cross') {
        alert('Победили крестики');
        crossWinsAmount += 1;
        crossWins.innerHTML = crossWinsAmount;
        gameReset();
        return;
    }
    if (boxEl[0].id === 'circle' && boxEl[4].id === 'circle' && boxEl[8].id === 'circle') {
        alert('Победили нолики');
        circleWinsAmount += 1;
        circleWins.innerHTML = circleWinsAmount;
        gameReset();
        return;
    }

    if (boxEl[2].id === 'cross' && boxEl[4].id === 'cross' && boxEl[6].id === 'cross') {
        alert('Победили крестики');
        crossWinsAmount += 1;
        crossWins.innerHTML = crossWinsAmount;
        gameReset();
        return;
    }
    if (boxEl[2].id === 'circle' && boxEl[4].id === 'circle' && boxEl[6].id === 'circle') {
        alert('Победили нолики');
        circleWinsAmount += 1;
        circleWins.innerHTML = circleWinsAmount;
        gameReset();
        return;
    }
}

btnReset.addEventListener('click', gameReset);

function gameReset() {
    for (let i = 0; i < boxEl.length; i += 1) {
        boxEl[i].id = ' ';
        boxEl[i].classList.remove('crossVisibility')
        boxEl[i].classList.remove('circleVisibility')
    }
}