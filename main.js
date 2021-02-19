const rabbit = document.querySelector('#rabbit');
const rabbitBtn = document.querySelector('button');

rabbitBtn.addEventListener('click', () => {
  rabbit.scrollIntoView({ behavior: 'smooth', block:'center' });
});
