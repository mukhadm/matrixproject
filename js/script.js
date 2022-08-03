'use strict';

const inputButton = document.querySelector('.create__note'),
      modal = document.querySelector('.modal'),
      modalClose = document.querySelector('.modal__close'),
      sendButton = document.querySelector('.btn__send'),
      input = document.querySelector('.note');

inputButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
}); 

const notesDB = {
    note: {}
    };

    sendButton.addEventListener('click', (event) => {
    notesDB.note = document.querySelector('.note').value;
    input.value = '';
    event.preventDefault();
});

console.log(notesDB)


function createCounter(){
    let counter = 0;
    const myFunction = function(){
        counter = counter +1;
        return counter;
    }
    return myFunction;
};

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);




