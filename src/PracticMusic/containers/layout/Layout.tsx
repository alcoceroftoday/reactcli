import React, { useState } from "react";
import NavPrincipal from '../Navbar/NavPrincipal';
import NavLateral from "../Navbar/NavLateral";
import MainContent from "../../components/Commons/MainContent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
interface RouteParams {
  id: string
}

export default function Layout() {
  return (
    <Router>
      <NavLateral />
    <div id="contentPrincipal">
        <Switch>
            <Route path="/browser">
                <Browser />
            </Route>
            <Route path="/artists">
                <Artist />
            </Route>
            <Route path="/artists&&:id">
                <ArtistPers />
            </Route>
            <Route path="/albums">
                <Albums />
            </Route>
            <Route path="/albums&&:id">
                <AlbumsPers />
            </Route>
            <Route path="/songs">
                <Songs />
            </Route>
        </Switch>
    </div>
</Router>  
  );
}

function Browser() {
  let Name:string = "Tracks";
  return (
    <NavPrincipal title={Name} />
  );
}
function Artist() {
  let Name:string = "Artists";
  return (
    <MainContent type={"s"} id={"aaa"} />
  );
}
function Albums() {
  let Name:string = "Albums";
  return (
    <NavPrincipal title={Name} />
  );
}
function Songs() {
  let Name:string = "Tracks";
  return (
    <NavPrincipal title={Name} />
  );
}
function AlbumsPers() {
  let { id } = useParams<RouteParams>();
  let Name:string = "Albums";
  return (
    <NavPrincipal title={Name} id={id} />
  );
}
function ArtistPers() {
  let { id } = useParams<RouteParams>();
  let Name:string = "Artists";
  return (
    <NavPrincipal title={Name} id={id}/>
  );
}