import React, { Component } from 'react';
import "../styles/styles.scss";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const List = (props) => (
    <ul>
        {
            props.items.map((item, i) => {
                return (
                    <>
                    <div className="main">
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src={item.item.images.background}/>
                        </div>
                        
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">{item.item.name}<i className="material-icons right">Más + </i></span>
                        </div>
                        <div id="contenedorTime" className="card-reveal">
                            <span className="card-title grey-text text-darken-4">{item.item.name}<i className="material-icons right">close</i></span>
                            <Router>
                                <div>
                                    <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                    </ul>
                                    <hr />
                                    <Switch>
                                            <Route path="/">
                                                <Home />
                                            </Route>
                                            <Route path="/about">
                                                <About />
                                            </Route>
                                    </Switch>
                                </div>
                            </Router>
                        </div>
                    </div>
                    </div>     
                </>
                //     <>
                // <li >{item.item.name}</li>
                // <img src={item.item.images.background}/>
                // </>
                )
                // return <li key={i}>{item}</li>
            })
        }
    </ul>
)
function Content(user) {
    return (
    <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{user}<i className="material-icons right">Más + </i></span>
    </div>
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

class Principal extends Component {
    constructor() {
        super();
        this.state = { 
            done: false,
            items: []
        };
    }

    componentDidMount() {
        fetch('https://fortnite-api.theapinetwork.com/store/get')
        .then(result=>result.json())
        .then( //result => console.log(result.data)
        result=>this.setState({
            done: true,
            items:result.data
        })
        )
    }

    render() {
        return(
            <div>
                
                { this.state.done ? (
                // {this.state.done && this.state.items.isArray() ? (
                    // // this.state.items[0].item.name
                    //  JSON.stringify(this.state.items[0])
                    // "asda"
                    // console.log(this.state.items[0])
                <List items={this.state.items} />
                ) : (
                    <p>Cargando resultados...</p>
                )}

              
            </div>
        )
    }
}
// s
// const Principal=()=>(

//     <li>Principal</li>
// )

export default Principal;