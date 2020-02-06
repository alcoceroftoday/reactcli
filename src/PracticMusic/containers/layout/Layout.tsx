import React, { useState } from "react";
import NavBrowser from './Browser';
import NavSongs from './Songs/Songs';
import NavAlbums from './Albums/Albums';
import NavAlbumsPers from './Albums/AlbumsPers';
import NavArtists from './Artists/Artists';
import NavArtistsPers from './Artists/ArtistsPers';
import NavLateral from "../Navbar/NavLateral";
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
                <Artists />
            </Route>
            <Route path="/artists&&:id">
                <Artists />
            </Route>
            <Route path="/albums">
                <Albums />
            </Route>
            <Route path="/albums&&:id">
                <Albums />
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
  return (
    <NavBrowser />
  );
}
function Songs() {
  return (
    <NavSongs />
  );
}
function Albums() {
  let { id } = useParams<RouteParams>();
  if (id) {
  return (
    <NavAlbumsPers id={id} />
  );
  }
  return (
    <NavAlbums />
  );
}
function Artists() {
  let { id } = useParams<RouteParams>();
  if (id) {
    return (
      <NavArtistsPers id={id}/>
    );
  }
  return (
    <NavArtists />
  );
}