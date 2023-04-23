///console.log(`Hello DOM !!!`);
// 1. Napisz kod JS, ktory dodaje elementy do tabeli
// 2. Po wyslaniu formularza, wyczysc pola formularza
// 3. Pod tabela dodaj przycisk usun rekordy, ktory usunie wszystkie elementy z tabeli

//document
// window - okno przeglądarki + dostęp do localstorage

//const table = document.querySelector('#orderTable');
//console.log(table);

//const orderForm = document.querySelector('#orderForm');

//const handleSubmit = (event) => {
    //event.preventDefault();
    //console.log('Hej');
//}
//orderForm.addEventListener("submit", handleSubmit);

// 1. Napisz kod JS, ktory dodaje elementy do tabeli
// 2. Po wyslaniu formularza, wyczysc pola formularza
// 3. Pod tabela dodaj przycisk usun rekordy, ktory usunie wszystkie elementy z tabeli

// document - DOM, reprezentacja HTML w JS
// window - okno przegladrki

const table = document.querySelector('#orderTable')
const orderForm = document.querySelector('#orderForm');
const orderId = document.querySelector('#id');
const orderName = document.querySelector('#name');
const orderPrice = document.querySelector('#price');
const clearButton = document.querySelector('#clearButton');

// Usuwanie:

// table.remove() - usuwanie elementu wraz z znacznikiem
// table.innerHTML = "" - usuwanie wnetrza z elementu

// Dodawanie elementu do HTML:


// function handleSubmit() {
//   console.log('hej!');
// }

const handleSubmit = (event) => {
  // preventDefalt() jest to metoda, sluzaca do zatrzymania domyslnego eventu przegladarki
  event.preventDefault();

  table.innerHTML += `
    <tr>
      <td>${orderId.value}</td>
      <td>${orderName.value}</td>
      <td>${orderPrice.value}zł</td>
    </tr>
  `

  orderId.value = "";
  orderName.value = "";
  orderPrice.value = "";
}

const handleClick = () => {
    table.innerHTML = `
    <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Price</th>
    </tr>
    `;
};

orderForm.addEventListener("submit", handleSubmit);
clearButton.addEventListener("click", handleClick);
