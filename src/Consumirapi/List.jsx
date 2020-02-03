
import React, { Component } from 'react';
import "../styles/styles.scss";
import "materialize-css/dist/css/materialize.min.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  import Setimage from "./Setimage.jsx"
const List = (props) => (
    <ul>
        {
            props.items.map((item, i) => {
                return (
                    <>
                    <div className="main">
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src={item.item.images.background}/>
                        </div>
                       
                        <div className="card-content">
                            {/* <span className="card-title activator grey-text text-darken-4">{item.item.name}<i className="material-icons right"><a href="http://www.google.com" >Más + </a></i></span> */}
                            {/* <span className="card-title activator grey-text text-darken-4">{item.item.name}<i className="material-icons right"><a href={item.itemId} >Más + </a></i></span> */} 
                            <span className="card-title activator grey-text text-darken-4">{item.item.name}<i className="material-icons right"><Link to={"/fornite&&"+item.itemId}>Mas +</Link></i></span>
                        </div>
                      
                        
                        {/* <div id="contenedorTime" className="card-reveal">
                            <span className="card-title grey-text text-darken-4">{item.item.name}<i className="material-icons right">close</i></span>
                            poner descripcion
                        </div> */}
                    </div>
                    </div>     
                </>
                )
            })
        }
    </ul>
);

export default List;