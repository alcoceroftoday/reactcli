import React from 'react';


const Content = () =>(
    <>
    <div className="Content">
        <div className="main">
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src="#"/>
            </div>
        
            <div className="card-content">
                {/* <span className="card-title activator grey-text text-darken-4">{item.item.name}<i className="material-icons right"><a href="http://www.google.com" >Más + </a></i></span> */}
                {/* <span className="card-title activator grey-text text-darken-4">{item.item.name}<i className="material-icons right"><a href={item.itemId} >Más + </a></i></span> */} 
                <span className="card-title activator grey-text text-darken-4">a<i className="material-icons right">a</i></span>
            </div>
        
            
            {/* <div id="contenedorTime" className="card-reveal">
                <span className="card-title grey-text text-darken-4">{item.item.name}<i className="material-icons right">close</i></span>
                poner descripcion
            </div> */}
        </div>
        </div>     
    </div>  
</>   
)
export default Content;