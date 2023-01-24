const box = document.querySelector('.box');
let move = 1;

const firstEl = document.querySelector('[data-number="first"]')
const secondEl = document.querySelector('[data-number="second"]')
const thirdEl = document.querySelector('[data-number="third"]')
const fourthEl = document.querySelector('[data-number="fourth"]')
const fifthEl = document.querySelector('[data-number="fifth"]')
const sixthEl = document.querySelector('[data-number="sixth"]')
const seventhEl = document.querySelector('[data-number="seventh"]')
const eigthtEl = document.querySelector('[data-number="eigtht"]')
const ninthEl = document.querySelector('[data-number="ninth"]')

box.addEventListener('click', onLinkClick);

function onLinkClick(e) {
    e.preventDefault()

    if (e.target.nodeName !== 'LI') {
        return;
    };
    if (e.target.id === 'cross' || e.target.id === 'circle') {
        alert('Выберите пустую ячейку');
        return;
    }
    console.log(e.target)
    
    // cross
    if (move % 2 !== 0) {
        e.target.firstElementChild.firstElementChild.classList.add('cross--visible');
        e.target.id = 'cross';
    }

    // circle
    if (move % 2 === 0) {
        e.target.firstElementChild.lastElementChild.classList.add('circle--visible');
        e.target.id = 'circle';
    }

    move += 1;

    if (firstEl.id === 'cross' && secondEl.id === 'cross' && thirdEl.id === 'cross') {
        alert('Победили крестики');
        return;
    }
    if (firstEl.id === 'circle' && secondEl.id === 'circle' && thirdEl.id === 'circle') {
        alert('Победили нолики');
        return;
    }

    if (fourthEl.id === 'cross' && fifthEl.id === 'cross' && sixthEl.id === 'cross') {
        alert('Победили крестики');
        return;
    }
    if (fourthEl.id === 'circle' && fifthEl.id === 'circle' && sixthEl.id === 'circle') {
        alert('Победили нолики');
        return;
    }

    if (seventhEl.id === 'cross' && eigthtEl.id === 'cross' && ninthEl.id === 'cross') {
        alert('Победили крестики');
        return;
    }
    if (seventhEl.id === 'circle' && eigthtEl.id === 'circle' && ninthEl.id === 'circle') {
        alert('Победили нолики');
        return;
    }

    if (firstEl.id === 'cross' && fourthEl.id === 'cross' && seventhEl.id === 'cross') {
        alert('Победили крестики');
        return;
    }
    if (firstEl.id === 'circle' && fourthEl.id === 'circle' && seventhEl.id === 'circle') {
        alert('Победили нолики');
        return;
    }

    if (secondEl.id === 'cross' && fifthEl.id === 'cross' && eigthtEl.id === 'cross') {
        alert('Победили крестики');
        return;
    }
    if (secondEl.id === 'circle' && fifthEl.id === 'circle' && eigthtEl.id === 'circle') {
        alert('Победили нолики');
        return;
    }

    if (thirdEl.id === 'cross' && sixthEl.id === 'cross' && ninthEl.id === 'cross') {
        alert('Победили крестики');
        return;
    }
    if (thirdEl.id === 'circle' && sixthEl.id === 'circle' && ninthEl.id === 'circle') {
        alert('Победили нолики');
        return;
    }

    if (firstEl.id === 'cross' && fifthEl.id === 'cross' && ninthEl.id === 'cross') {
        alert('Победили крестики');
        return;
    }
    if (firstEl.id === 'circle' && fifthEl.id === 'circle' && ninthEl.id === 'circle') {
        alert('Победили нолики');
        return;
    }

    if (thirdEl.id === 'cross' && fifthEl.id === 'cross' && seventhEl.id === 'cross') {
        alert('Победили крестики');
        return;
    }
    if (thirdEl.id === 'circle' && fifthEl.id === 'circle' && seventhEl.id === 'circle') {
        alert('Победили нолики');
        return;
    }
}
