import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  import "../../../styles/MusicMain.scss"
let Links:string[]=["Browser","Artists","Albums","Songs"];
const NavLateral = () =>(
<div id="contentLateral">
        <div className="col s12">
            <div className="collection">
                {
                    <GeneraLink NameLink="Browser"/>
                }
                {/* <Link className="collection-item" to="/browser" >Browser</Link>
                <Link className="collection-item" to="/artist">Artists</Link>
                <Link className="collection-item" to="/albums">Albums</Link>
                <Link className="collection-item" to="/songs">Songs</Link> */}
            </div>
        </div>
</div>     
)
const GeneraLink=(props:{NameLink:string})=>{

    return (<Link className="collection-item" to="/browser" >{props.NameLink}</Link>);
}
     

export default NavLateral;