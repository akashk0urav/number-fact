const form = document.querySelector('form');
const factDiv = document.querySelector('.number-fact');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const loadText ="wait a little bit ⌛";
  factDiv.innerHTML = loadText;
  const baseURL = "https://cors-anywhere.herokuapp.com/http://numbersapi.com/";
  const number = e.target.querySelector('input[type="number"]').value;
  fetch(baseURL + number,{
    headers:{
      'x-requested-with': 'text/plain'
    }})
    .then(response => response.text())
    .then(text => factDiv.innerHTML = text)
    .catch(e=>console.log(e));
}) 
const touchButton = document.querySelector(".float-text");
const card = document.querySelector(".float-card-info");
const close = document.querySelector(".gg-close-r");

touchButton.addEventListener("click", moveCard);
close.addEventListener("click", moveCard);

function moveCard() {
  card.classList.toggle("active");
}