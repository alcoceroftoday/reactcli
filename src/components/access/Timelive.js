import React from 'react';
import ReactDOM from 'react-dom';

function Clock(){
    return (
        <div>
            {/* {dat.dat.toLocaleTimeString()} */}
            <div ><h3 id="asds"></h3></div>
        </div>
    )
}
function tick() {
    const time= new Date().toLocaleTimeString();

    ReactDOM.render(time, document.getElementById('asds'));
}

const Timelive = () => (
        // Clock()
        <Clock />
)

setInterval(tick, 1000);
export default Timelive;
