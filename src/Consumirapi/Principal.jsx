import React, { Component } from 'react';
import "../styles/styles.scss";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import List from './List.jsx';
import Carga from './Carga.jsx';
 
// function Content(user) {
//     return (
//     <div className="card-content">
//         <span className="card-title activator grey-text text-darken-4">{user}<i className="material-icons right">Más + </i></span>
//     </div>
//     );
// }


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
                    <Carga />
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