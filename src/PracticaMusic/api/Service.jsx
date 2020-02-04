import React, { Component } from 'react';

class Setimage extends Component {
    constructor() {
        super();
        this.state = { 
            done: false,
            items: []
        };
    }
    componentDidMount() {
        fetch('http://ec2-35-174-153-145.compute-1.amazonaws.com/api/tracks')
        .then(result=>result.json())
        .then( //result => console.log(result)
        result=>this.setState({
            done: true,
            items:result
        })
        )
    }

    render() {
        return(
            <div>
                {/* {this.state.items.id} */}
                {console.log(this.state.items[0])}
                {/* {url.url} */}
             <Setimaa items={this.state.items} />
             {/* <Setimaa items={this.state.items} imaaaaads={this.props.url} /> */}
             {/* {typeof(this.props.url)} */}

              
            </div>
        )
    }
}
const Setimaa = (props) => (
    <ul>
        {/* {console.log(props.imaaaaads)} */}
        {
            props.items.map((item, i) => {
                return (
                    <>
                        { item.album_id ? <img className="activator" src={item.album_id}/> : "" } 
                    </>
                )
            })
        }
    </ul>
);
export default Setimage;
