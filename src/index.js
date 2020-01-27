import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// const element=React.createElement(componente,propiedades,hijos);
// react sin rxfx
// // const element=React.createElement("h1",{className:"saludo"},"H3ola mundo");
const root=document.getElementById("root");
// // ReactDOM.render(element,root);

ReactDOM.render(<h1 className="saludos">Hola mundo</h1>,root)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
