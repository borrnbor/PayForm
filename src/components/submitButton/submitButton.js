import './submitButton.scss';

export function submitButton(elem) {
  // console.log('first');
  elem.innerHTML = elem.dataset.text;
  if (elem.dataset.color == 'active') {
    elem.classList.add('buttonSubmit');
  } else if (elem.dataset.color == 'muted') {
    elem.classList.add('buttonCancel');
  }
}
