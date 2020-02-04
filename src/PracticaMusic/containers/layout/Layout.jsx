import React, { useState } from "react";
import NavPrincipal from '../Navbar/NavPrincipal.jsx';
import NavLateral from "../Navbar/NavLateral.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default function Layout() {
  return (
    <Router>
      <NavLateral />
    <div id="contentPrincipal">
        <Switch>
            <Route path="/browser">
                <Browser />
            </Route>
            <Route path="/artist">
                <Artist />
            </Route>
            <Route path="/albums">
                <Albums />
            </Route>
            <Route path="/songs">
                <Songs />
            </Route>
            {/* <Route path="/fornite&&:id">
                <Showimage />
            </Route> */}
        </Switch>
    </div>
</Router>  
  );
}

function Browser() {
  return (
    <NavPrincipal />
  );
}
function Artist() {
  return (
    <NavPrincipal />
  );
}
function Albums() {
  return (
    <NavPrincipal />
  );
}function Songs() {
  return (
    <NavPrincipal />
  );
}

// function Showimage() {
//   let { id } = useParams();
//   // let url2= id.json();
//   return (
//     <div>
//      {id}

//      </div>
//     // <Setimage url={id}/>
//   );
// }
