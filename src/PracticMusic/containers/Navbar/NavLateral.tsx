import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  import "../../../styles/MusicMain.scss"
let Linksa:string[]=["Browser","Artists","Albums","Songs"];
const NavLateral = () =>(
    <div id="contentLateral">
        <div className="col s12">
            <div className="collection">
                    <AllLink Links={Linksa} />
            </div>
        </div>
</div>     
)
const AllLink =(props:{Links:string[]}) =>{

    return (<>
    {props.Links.map(value => {
        return <Link className="collection-item" to={`/${value.toLowerCase()}`} >{value}</Link>
    })}
    </>)
}  

export default NavLateral;