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
  let Name = "Browser";
  return (
    <NavPrincipal title={Name} />
  );
}
function Artist() {
  let Name = "Artist";
  return (
    <NavPrincipal title={Name} />
  );
}
function Albums() {
  let Name = "Albums";
  return (
    <NavPrincipal title={Name} />
  );
}function Songs() {
  let Name = "Songs";
  return (
    <NavPrincipal title={Name} />
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
