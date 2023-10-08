import './addPayMethod.scss';
import { modalWindow } from '../modalWindow/modalWindow';

export function addPayMethod(elem) {
  elem.innerHTML = `<div class="addBtn">
    <img src='./src/images/creditCard.svg' alt='SVG'>
    <p>Add Payment Method</p>
  </div>`;

  elem.onclick = () => {
    document.querySelector('#mainPage').classList.add('none');
    document.querySelector('#app').innerHTML += `
    <div id='modalWindowAddCard' class='modalPage'></div>
    `;

    modalWindow(document.querySelector('#modalWindowAddCard'));
  };
}
