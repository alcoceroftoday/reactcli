import React from 'react';
import MainContent from "../../components/Commons/MainContent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import "../../../styles/MusicMain.scss"
const NavBrowser = () => (
  <div>
    <div>Bros</div>
    <MainContent type={"sds"} id={"sdsd"} />
  </div>
)

export default NavBrowser;