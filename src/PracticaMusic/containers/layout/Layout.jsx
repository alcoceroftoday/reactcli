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
            <Route path="/albums&&:id">
                <AlbumsPers />
            </Route>
            <Route path="/artist&&:id">
                <ArtistPers />
            </Route>
        </Switch>
    </div>
</Router>  
  );
}

function Browser() {
  let Name = "Tracks";
  return (
    <NavPrincipal title={Name} />
  );
}
function Artist() {
  let Name = "Artists";
  return (
    <NavPrincipal title={Name} />
  );
}
function Albums() {
  let Name = "Albums";
  return (
    <NavPrincipal title={Name} />
  );
}
function Songs() {
  let Name = "Tracks";
  return (
    <NavPrincipal title={Name} />
  );
}
function AlbumsPers() {
  let { id } = useParams();
  let Name = "Artists";
  return (
    <NavPrincipal title={Name} id={id} />
  );
}
function ArtistPers() {
  let { id } = useParams();
  let Name = "Artists";
  console.log(id,"sds");
  return (
    <NavPrincipal title={Name} id={id}/>
  );
}