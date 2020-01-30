import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Panel from './components/Panel';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Timelive from "./components/access/Timelive"
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// const element=React.createElement(componente,propiedades,hijos);
// react sin rxfx
// // const element=React.createElement("h1",{className:"saludo"},"H3ola mundo");
const navbar=document.getElementById("navbar");
const root=document.getElementById("root");
const footer=document.getElementById("footer");
// // ReactDOM.render(element,root);

ReactDOM.render(<Navbar />,navbar)
ReactDOM.render(<Panel />,root)
ReactDOM.render(<Footer />,footer)



serviceWorker.unregister();
