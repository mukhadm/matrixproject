'use strict';

document.addEventListener('DOMContentLoaded', () => {

const inputButton = document.querySelector('.create__note'),
      modal = document.querySelector('.modal'),
      modalClose = document.querySelector('.modal__close'),
      form = document.querySelector('form'),
      message = {loading: 'loading', success: 'well done', failure: 'error'},
    //   sendButton = document.querySelector('.btn__send'),
    //   input = document.querySelector('.note'),
      hours = document.querySelector('.hours'),
      minutes = document.querySelector('.minutes'),
      seconds = document.querySelector('.seconds'),
      notesDB = {
        note: {}
        };
      
inputButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
}); 

const jsonData = async (url, data) => {
  const res = await fetch(url, {
     method: "POST",
     headers: {
             'Content-type': 'application/json'
         },
        body: data
    });
    return await res.json();
}
    
postData(form);

function postData(form) {
    form.addEventListener('submit', (e) => {
        const noteValue = document.querySelector('.note').value;
        e.preventDefault();
        notesDB.note = noteValue;
        
        const formData = new FormData(form);

        const statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        statusMessage.textContent = message.loading;
        form.append(statusMessage);

        const object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });

        jsonData('http://localhost:3000/requests', JSON.stringify(object))
        .then(data => {
            console.log(data);
            statusMessage.textContent = message.success;
        }).catch(() => {
            statusMessage.textContent = message.failure;
        })
        .finally(() => {
            form.reset();
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
      timeInterval;
      };

      clockUpdates();

      fetch('db.json')
      .then(data => data.json())
      .then(res => console.log(res));


//dateCalculator

const calcButton = document.querySelector('.calc__button');
const calcInput = document.querySelector('.calculator');


calcButton.addEventListener('click', () => {
    calculateDate();
    setInterval(timeRemaining, 1000);
});

function calculateDate(){
    let result = timeRemaining();
    let div = document.createElement('div');
    div.className = "time__Result";
    div.innerHTML = `${result}`;
    calcInput.insertAdjacentElement('afterend', div);
};

function timeRemaining(){
   const inputDate = document.querySelector('.calc__input').value; //2023-11-17T19:57
   const nowDate = new Date(); //Fri Aug 19 2022 16:20:56 GMT+0300 (за східноєвропейським літнім часом)
   const futureDate = new Date(inputDate);
   const dif = Math.abs(new Date().getTime() - new Date(inputDate).getTime());
   const diff = new Date(dif);
   
   const days = diff.getDate() - 1;
   const years = diff.getFullYear() - 1970;
   const months = diff.getMonth();
   const hours = diff.getHours() - 3;
   const seconds = diff.getSeconds();
   const result = (`${years} years, ${months} months, ${days} days, ${hours} hours, ${seconds} seconds`);
   return result
};


// const seconds = parseInt((duration/1000)%60);
// const minutes = parseInt((duration/(1000*60))%60);
// const hours = parseInt((duration/(1000*60*60))%24);
// const days = parseInt(duration/(1000*60*60*24));
});


