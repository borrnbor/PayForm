import { addPayMethod } from '../addPayMethod/addPayMethod';
import { submitButton } from '../submitButton/submitButton';
import './chooseForm.scss';

export function chooseForm(elem, methods) {
  let htmlCode = ``;
  for (let card of methods) {
    let def = '';
    if (card.default) {
      def = `def`;
      htmlCode += `
      <label>
      <div class='pay_method'>
        <div class='card_info'>
        <img src=${card.iconPath} alt=${card.name} class='card_img'>
        <span class="card__number">${card.number}</span>
        <span>Expiries</span>
        <div class="card_expires">
        <span>${card.expires}</span>
        <span class="none ${def}">Default</span>
        </div>
        </div>
          <input type='radio' class='radio' name='selectedCard' value=${card.name} checked>
          </div>
        </label>
      `;
    } else {
      htmlCode += `
      <label>
      <div class='pay_method'>
        <div class='card_info'>
        <img src=${card.iconPath} alt=${card.name}  class='card_img'>
        <span class="card__number">${card.number}</span>
        <span>Expiries</span>
        <div class="card_expires">
        <span>${card.expires}</span>
        <span class="none">Default</span>
        </div>
        </div>
          <input type='radio' class='radio' name='selectedCard' value=${card.name}>
          </div>
        </label>
      `;
    }
  }
  if (
    document.querySelector('#addPayMethod') &&
    document.querySelector('#submitButton')
  ) {
    document
      .querySelector('#addPayMethod')
      .insertAdjacentHTML('beforeBegin', htmlCode);
  } else {
    elem.innerHTML += `
    ${htmlCode}
    <button type='button' id="addPayMethod" class='add_method'></button>
    <button id="submitButton" class='buttonAction' data-color='active' data-action='submit' data-text='Submit'></button>
    `;
  }

  document.querySelectorAll('.radio').forEach((elem) => {
    if (elem.checked) {
      elem.parentNode.classList.add('pay_method--selected');
    }
    elem.onclick = () => {
      document.querySelectorAll('.radio').forEach((elem) => {
        if (elem.checked) {
          elem.parentNode.classList.add('pay_method--selected');
        } else {
          elem.parentNode.classList.remove('pay_method--selected');
        }
      });
    };
  });
  addPayMethod(document.querySelector('#addPayMethod'));
  submitButton(document.querySelector('#submitButton'));
}
