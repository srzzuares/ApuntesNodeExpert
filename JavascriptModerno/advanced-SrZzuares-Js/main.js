import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { enviromentsComponent } from './src/concepts/01-enviroment'
import { callbackComponent } from './src/concepts/02-callbacks'
import { callbackComponent2 } from './src/concepts/03-callbackHell'


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card"></div>
  </div>

`
// console.log(import.meta.env); //Para imprimir las variables de entorno u obtenerlas mediante Vite
const element = document.querySelector('.card');
// enviromentsComponent(element);
// callbackComponent(element);
callbackComponent2(element);