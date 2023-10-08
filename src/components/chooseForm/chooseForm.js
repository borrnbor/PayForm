import { addPayMethod } from '../addPayMethod/addPayMethod';
import { bankCard } from '../bankCard/bankCard';
import { submitButton } from '../submitButton/submitButton';
import './chooseForm.scss';

export function chooseForm(elem, methods) {
  for (let card of methods) {
    elem.innerHTML += bankCard(card);
  }
  elem.innerHTML += `
  <button type='button' id="addPayMethod" class='add_method'></button>
  <button id="submitButton" class='buttonAction' data-color='active' data-action='submit' data-text='Submit'></button>
`;

  document.querySelectorAll('.radio').forEach((elem) => {
    if (elem.dataset.default == 'true') {
      elem.parentNode.classList.add('pay_method--selected');
      elem.checked = true;
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
