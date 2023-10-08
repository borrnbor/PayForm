import './../../styles/base/reset.scss';
import './../../styles/base/vars.scss';
import './../../styles/base/base.scss';
import './../../styles/base/app.scss';
import { chooseForm } from './../../components/chooseForm/chooseForm';

export function mainPage(elem) {
  elem.innerHTML = `
  <div class="pay_methods">
<div class="screen">
<div class='container'>
<p class="route">
  Account &#8594;
  <a href="#">Payment methods</a>
</p>
<h2 class="title">Сhoose your payment method</h2>
<form id="chooseForm" class='methods_form'>   
</form>
</div>
</div>
  `;
  let PayMethods = [
    {
      iconPath: './src/images/visa.svg',
      expires: '09/27',
      default: true,
      number: '1234  5678  9102  8908',
      name: 'visa',
    },
    {
      iconPath: './src/images/Mastercard.svg',
      expires: '09/21',
      default: false,
      number: '1234 5678 9102 8908',
      name: 'Mastercard',
    },
    {
      iconPath: './src/images/PayPal.svg',
      expires: '09/27',
      default: false,
      number: '1234 5678 9102 8908',
      name: 'visa',
    },
  ];

  chooseForm(document.querySelector('#chooseForm'), PayMethods);
}
