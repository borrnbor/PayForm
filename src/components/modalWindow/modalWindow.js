import { submitButton } from '../submitButton/submitButton';
import './modalWindow.scss';
import { chooseForm } from '../chooseForm/chooseForm';

export function modalWindow(elem) {
  elem.innerHTML = `<div class="modalWindow">
    <div class="modalWindow_cardBlock">
      <div class="modalWindow_card">
      <div class="addCardFiling">
        <img src="./src/images/Chip.svg">
        <div class="addCardInfo">
          <div>
           <span class="addCard_name"></span>
           <span class="addCard_expir">09 / 25</span>
         </div>
          <div class="addCard_number">
          <span>0000</span>
          <span>0000</span>
          <span>0000</span>
          <span>0000</span>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class='modalWindow_formBlock'>
      <form class="modalWindow_form">
      <div class='modalWindow_form_inputs'>
      <div class="input_area">
        <label for='name'>Name</label>
        <input class="modal_input" id='name' type='text' placeholder = "Card Name">
      </div>
      <div class="input_area">
        <label for='expires'>Expiration</label>
        <input class="modal_input" id='expires' type='text' placeholder = "MM/YY">
      </div>
      <div class="input_area">
        <label for='number'>Card number</label>
        <input class="modal_input" id='number' type='text' placeholder = "1234 5678 9000 0000">
      </div>
      <div class="input_area">
        <label for='CVV'>CVV</label>
        <input class="modal_input" id='CVV' type='text' placeholder = "***">
      </div>
      </div>
        <div class="modalWindow_form_btns">
        <button type="button" id="modalCancelButton" class='buttonAction' data-color='muted' data-action='cancel' data-text='Cancel'></button>
        <button type="button" id="modalSubmitButton" class='buttonAction' data-color='active' data-action='submit' data-text='Submit'></button>
        </div>
      </form>
    </div>
  </div>`;

  document.querySelector('#name').oninput = (e) => {
    document.querySelector('.addCard_name').innerHTML = e.target.value;
  };

  document.querySelector('#expires').oninput = (e) => {
    document.querySelector('.addCard_expir').innerHTML = e.target.value;
  };

  submitButton(document.querySelector('#modalCancelButton'));
  submitButton(document.querySelector('#modalSubmitButton'));

  document.querySelector('#modalSubmitButton').onclick = (e) => {
    let newCard = [{ default: false }];
    document.querySelectorAll('.modal_input').forEach((elem) => {
      newCard[0][elem.id] = elem.value;
    });
    chooseForm(document.querySelector('#chooseForm'), newCard);
    if (document.querySelector('#addPayMethod')) {
      console.log('jy');
    }
    document.querySelector('#mainPage').classList.remove('none');
    document
      .querySelector('#app')
      .removeChild(document.querySelector('#modalWindowAddCard'));
  };
}
