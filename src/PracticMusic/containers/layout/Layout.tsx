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
// const contextt = React.createContext("HOLAAA SI LEES FUNCIONO");
export default function Layout() {
  return (
    <Router>
      <NavLateral />
    <div id="contentPrincipal">
        <Switch>
            <Route path="/browser" exact component={()=>(<NavBrowser />)}/>
            <Route path="/artists" exact component={Artists}/>
            <Route path="/artists/:id" exact component={Artists}/>
            <Route path="/albums" exact component={Albums}/>
            <Route path="/albums/:id" exact component={Albums}/>
            <Route path="/songs" exact component={()=><NavSongs  />}/>
        </Switch>
    </div>
</Router>  
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
    <>
    <NavAlbums />
    {/* <contextt.Provider value={"s"}></contextt.Provider> */}
    </>
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