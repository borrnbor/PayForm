import './bankCard.scss';

export function bankCard(elem) {
  return `
<label>
<div class='pay_method'>
  <div class='card_info'>
  <img src=${elem.iconPath} alt=${elem.name} class='card_img'>
  <span class="card__number">${elem.number}</span>
  <span>Expiries</span>
  <div class="card_expires">
  <span>${elem.expires}</span>
  <span class="none" data-default="${elem.default}">Default</span>
  </div>
  </div>
    <input type='radio' class='radio' data-default=${elem.default} name='selectedCard' value=${elem.name}>
    </div>
  </label>
`;
}
