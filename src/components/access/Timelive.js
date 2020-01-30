import React from 'react';
import ReactDOM from 'react-dom';

function tick() {
    const time= <h2>{new Date().toLocaleTimeString()}</h2>;
    ReactDOM.render(time, document.getElementById('asds'));
}

const Timelive = () => (
        <div>
        <div id="asds"></div>
        </div>
)

setInterval(tick, 1000);
export default Timelive;
