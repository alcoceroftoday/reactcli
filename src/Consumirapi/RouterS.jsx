import React from "react";
import Principal from './Principal.jsx';
import Setimage from './Setimage.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

{/* <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo center">Logo</a>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav> */}
export default function RouterS() {
  return (
    <Router>
      <nav>
      <div className="nav-wrapper">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/fornite">Fornite</Link>
          </li> 
        </ul>
        </div>
      </nav>
        <hr />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/fornite">
          <Fornite />
          </Route>
          <Route path="/fornite&&:id">
          <Showimage />
          </Route>
        </Switch>
      
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
function Fornite() {
  return (
    <Principal />
  );
}
function Showimage() {
  let { id } = useParams();
  // let url2= id.json();
  return (
    // <div>
    // {id}

    // </div>
    <Setimage url={id}/>
  );
}


