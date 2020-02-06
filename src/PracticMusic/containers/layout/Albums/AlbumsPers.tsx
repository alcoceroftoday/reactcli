import React from 'react';
import MainContent from "../../../components/Commons/MainContent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import "../../../../styles/MusicMain.scss"
const NavAlbumsPers = (props:{id:string}) => (
  <div>
    <div>AlbumsPers</div>
    <MainContent type={"sds"} id={"sdsd"} />
  </div>
)

export default NavAlbumsPers;