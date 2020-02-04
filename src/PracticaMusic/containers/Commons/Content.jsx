import React from 'react';


const Content = (props) =>(
    <>
    <div className="Content">
        <div className="main">
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                {props.urlImage? <img className="activator" src={props.urlImage}/>:<img className="activator" src="#"/>
                }
            </div>
        
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{props.nombre}<i className="material-icons right">a</i></span>
                { props.duration ?<p>Duración: {props.duration}seg.</p> :""
                }
                
            </div>
        </div>
        </div>     
    </div>  
</>   
)
export default Content;