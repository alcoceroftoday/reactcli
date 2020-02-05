import React from 'react';
import NavLateral from "./NavLateral";
import MainContent from "../../components/Commons/MainContent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import "../../../styles/MusicMain.scss"
const NavPrincipal = (props:{title:string,id?:string}) => (
  <div>
    <div>COSAS</div>
    <div>{props.title}</div>
    <div>a{props.id}SS</div>
    <MainContent type={props.title} id={props.id} />
  </div>
)

export default NavPrincipal;