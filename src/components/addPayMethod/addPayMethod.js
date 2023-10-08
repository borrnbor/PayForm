import './addPayMethod.scss';
import { modalWindow } from '../modalWindow/modalWindow';

export function addPayMethod(elem) {
  elem.innerHTML = `<div class="addBtn">
    <img src='./src/images/creditCard.svg' alt='SVG'>
    <p>Add Payment Method</p>
  </div>`;

  elem.onclick = () => {
    document.body.style.overflow = 'hidden';
    modalWindow(document.querySelector('#modalWindowAddCard'));
  };
}
