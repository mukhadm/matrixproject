'use strict';

document.addEventListener('DOMContentLoaded', () => {

const inputButton = document.querySelector('.create__note'),
      modal = document.querySelector('.modal'),
      modalClose = document.querySelector('.modal__close'),
      form = document.querySelector('form'),
      message = {loading: 'loading', success: 'well done', failure: 'error'},
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

//     sendButton.addEventListener('click', (event) => {
//     notesDB.note = noteValue;
//     input.value = '';
//     event.preventDefault();
// });

postData(form);

function postData(form) {
    form.addEventListener('submit', (e) => {
        const noteValue = document.querySelector('.note').value;
        e.preventDefault();
        // input.value = '';
        notesDB.note = noteValue;

        const request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        // request.setRequestHeader('Content-type', 'multipart/form-data');
        const formData = new FormData(form);
        request.send(formData);

        const statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        statusMessage.textContent = message.loading;
        form.append(statusMessage);

        request.addEventListener('load', () => {
            if (request.status === 200) {
                console.log(request.response);
                statusMessage.textContent = message.success;
            } else {
                statusMessage.textContent = message.failure;
            }
        });
    });
};



let localeHours = new Date().toLocaleTimeString().slice(0, -6),
      localeMinutes = new Date().toLocaleTimeString().slice(3, -3),
      localeSeconds = new Date().toLocaleTimeString().slice(6),
      timeInterval = setInterval(clockUpdates, 1000);

      function clockUpdates(){
      localeHours = new Date().toLocaleTimeString().slice(0, -6),
      localeMinutes = new Date().toLocaleTimeString().slice(3, -3),
      localeSeconds = new Date().toLocaleTimeString().slice(6);
      hours.innerHTML = localeHours;
      minutes.innerHTML = localeMinutes;
      seconds.innerHTML = localeSeconds;
      };

      clockUpdates();


});


