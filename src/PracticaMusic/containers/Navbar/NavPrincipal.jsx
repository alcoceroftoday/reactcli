import React from 'react';
import NavLateral from "./NavLateral";
import MainContent from "../Commons/MainContent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import "../../../styles/MusicMain.scss"
const NavPrincipal = (props) =>(
  <div>
    <div>COSAS</div>
    <div>{props.title}</div>
    <MainContent />
  </div>
)

export default NavPrincipal;