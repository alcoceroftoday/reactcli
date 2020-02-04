import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  import "../../../styles/MusicMain.scss"

const NavLateral = () =>(
<div id="contentLateral">
        <div className="col s12">
            <div className="collection">
                <Link className="collection-item" to="/browser" >Browser</Link>
                <Link className="collection-item" to="/artist">Artists</Link>
                <Link className="collection-item" to="/albums">Albums</Link>
                <Link className="collection-item" to="/songs">Songs</Link>
            </div>
        </div>
</div>     
)
export default NavLateral;