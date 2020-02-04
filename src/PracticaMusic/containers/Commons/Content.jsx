import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
function GetLink(props){
    if(props.type=="artists"){
        return (
            // {"/fornite&&"+item.itemId}
            <span className="card-title activator grey-text text-darken-4"><Link className="collection-item" to={"/artist&&"+props.idartist} >{props.nombre}</Link><i className="material-icons right">{props.idartist}</i></span>
        )
    }else if(props.type=="albums"){
        return (
            <span className="card-title activator grey-text text-darken-4">{props.nombre}<i className="material-icons right">{props.idartist}</i></span>
        )
    }else if(props.type=="tracks"){
        return (
            <span className="card-title activator grey-text text-darken-4">{props.nombre}<i className="material-icons right">{props.idartist}</i></span>
        )
    }
}

const Content = (props) =>(
<>
    <div className="Content">
        <div className="main">
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                {props.urlImage? <img className="activator" src={props.urlImage}/>:<img className="activator" src="https://images.immediate.co.uk/production/volatile/sites/3/2017/11/imagenotavailable1-39de324.png?quality=90&resize=768,574"/>
                }
            </div>
                <GetLink nombre={props.nombre} idartist={props.idartist} type={props.type}/>
             <div className="card-content">
              {/*  <span className="card-title activator grey-text text-darken-4">{props.nombre}<i className="material-icons right">{props.idartist}</i></span> */}
                { props.duration ?<p>Duración: {props.duration}seg.</p> :""}
                
            </div>
        </div>
        </div>     
    </div>  
</>   
)
export default Content;