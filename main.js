import { mainPage } from './src/components/mainPage/mainPage';
document.querySelector('#app').innerHTML = `
  <div id='mainPage'></div>
 <div id='modalWindowAddCard' class='modalPage none'></div>
`;

mainPage(document.querySelector('#mainPage'));

console.log(document.body.offsetHeight);
console.log(window.innerHeight);

/*
TODO:
-[X]
*/
