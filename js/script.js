'use strict';

const inputButton = document.querySelector('.create__note'),
      modal = document.querySelector('.modal'),
      modalClose = document.querySelector('.modal__close'),
      sendButton = document.querySelector('.btn__send'),
      input = document.querySelector('.note'),
      hours = document.querySelector('.hours'),
      minutes = document.querySelector('.minutes'),
      seconds = document.querySelector('.seconds');

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
console.log(notesDB);


let localeHours = new Date().toLocaleTimeString().slice(0, -6),
      localeMinutes = new Date().toLocaleTimeString().slice(3, -3),
      localeSeconds = new Date().toLocaleTimeString().slice(6),
      timeInterval = setInterval(clockUpdates, 1000);

      clockUpdates();

      function clockUpdates(){
  let localeHours = new Date().toLocaleTimeString().slice(0, -6),
      localeMinutes = new Date().toLocaleTimeString().slice(3, -3),
      localeSeconds = new Date().toLocaleTimeString().slice(6);
      hours.innerHTML = localeHours;
      minutes.innerHTML = localeMinutes;
      seconds.innerHTML = localeSeconds;
      };
    



