import React, { Component } from 'react';
import Content from "./Content";

class MainContent extends Component {
    constructor() {
        super();
        this.state = { 
            done: false,
            items: []
        };
        
    }
    componentDidMount() {
        let typeShare=this.props.type.toLowerCase();
        fetch('http://ec2-35-174-153-145.compute-1.amazonaws.com/api/'+typeShare)
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
             <GetResult items={this.state.items} type={this.props.type.toLowerCase()} />
            </div>
        )
    }
}
function VerifyTypeShare(type,item){

        if(type=="tracks"){
            return (
                <Content type={type} nombre={item.name} duration={item.duration} /> 
            );
        }else if(type=="tracks"){
            return (
                <Content type={type} nombre={item.name} /> 
                ); 
        }else if(type=="artists"){
            return (
                <Content type={type} nombre={item.name} urlImage={item.artwork} /> 
                );
        }else if(type=="albums"){
            return (
                <Content type={type} nombre={item.name} urlImage={item.artwork} /> 
                );
        }
    
}
const GetResult = (props) => (
       <div> 
        {
            props.items.map((item, i) => {
                return (
                    <>
                    {VerifyTypeShare(props.type,item)}
                    </>
                )
            })
        }
        </div>
);

export default MainContent;